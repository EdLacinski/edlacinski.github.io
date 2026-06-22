import { readFile, writeFile } from 'node:fs/promises'

const snapshotUrl = new URL('../src/data/platformSnapshots.json', import.meta.url)
const snapshot = JSON.parse(await readFile(snapshotUrl, 'utf8'))
const platforms = snapshot.platforms ?? {}
const offline = process.env.SNAPSHOT_OFFLINE === '1' || process.argv.includes('--offline')

const number = (value) => Number(value).toLocaleString('en-US')
const displayDate = () => new Intl.DateTimeFormat('en-US', {
  month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
}).format(new Date())

function update(id, values) {
  platforms[id] = { ...platforms[id], ...values, updated: displayDate() }
}

async function requestJson(url, options = {}) {
  const response = await fetch(url, { ...options, signal: AbortSignal.timeout(15000) })
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)
  return response.json()
}

async function refreshYouTube(id, handle) {
  const key = process.env.YOUTUBE_API_KEY
  if (!key) return 'skipped (YOUTUBE_API_KEY not configured)'

  const channelUrl = new URL('https://www.googleapis.com/youtube/v3/channels')
  channelUrl.search = new URLSearchParams({ part: 'snippet,statistics,contentDetails', forHandle: handle, key })
  const channel = (await requestJson(channelUrl)).items?.[0]
  if (!channel) throw new Error(`channel ${handle} was not found`)

  const uploads = channel.contentDetails?.relatedPlaylists?.uploads
  const videosUrl = new URL('https://www.googleapis.com/youtube/v3/playlistItems')
  videosUrl.search = new URLSearchParams({ part: 'snippet,contentDetails', playlistId: uploads, maxResults: '1', key })
  const latest = (await requestJson(videosUrl)).items?.[0]

  update(id, {
    profileImage: channel.snippet?.thumbnails?.high?.url || channel.snippet?.thumbnails?.default?.url,
    stats: {
      subscribers: channel.statistics?.hiddenSubscriberCount ? 'Hidden' : number(channel.statistics?.subscriberCount ?? 0),
      views: number(channel.statistics?.viewCount ?? 0),
      videos: number(channel.statistics?.videoCount ?? 0),
    },
    latestVideo: latest ? {
      id: latest.contentDetails?.videoId,
      title: latest.snippet?.title,
    } : platforms[id]?.latestVideo,
  })
  return 'updated'
}

async function twitchToken() {
  if (process.env.TWITCH_ACCESS_TOKEN) return process.env.TWITCH_ACCESS_TOKEN
  if (!process.env.TWITCH_CLIENT_ID || !process.env.TWITCH_CLIENT_SECRET) return null
  const url = new URL('https://id.twitch.tv/oauth2/token')
  url.search = new URLSearchParams({
    client_id: process.env.TWITCH_CLIENT_ID,
    client_secret: process.env.TWITCH_CLIENT_SECRET,
    grant_type: 'client_credentials',
  })
  return (await requestJson(url, { method: 'POST' })).access_token
}

async function refreshTwitch() {
  const clientId = process.env.TWITCH_CLIENT_ID
  const token = await twitchToken()
  if (!clientId || !token) return 'skipped (Twitch credentials not configured)'

  const headers = { 'Client-Id': clientId, Authorization: `Bearer ${token}` }
  const user = (await requestJson('https://api.twitch.tv/helix/users?login=eclipse_ed', { headers })).data?.[0]
  if (!user) throw new Error('channel eclipse_ed was not found')

  let followers = platforms['eclipse-ed-twitch']?.stats?.followers
  try {
    const result = await requestJson(`https://api.twitch.tv/helix/channels/followers?broadcaster_id=${user.id}`, { headers })
    followers = number(result.total)
  } catch {
    // Follower totals require a suitably authorized user token; retain the last snapshot otherwise.
  }

  update('eclipse-ed-twitch', {
    profileImage: user.profile_image_url,
    stats: { followers },
  })
  return 'updated'
}

async function refreshDiscord() {
  const invite = process.env.DISCORD_INVITE_CODE || 'HdtEw8W3'
  const data = await requestJson(`https://discord.com/api/v10/invites/${invite}?with_counts=true`)
  update('eclipse-ed-discord', {
    stats: { members: number(data.approximate_member_count ?? 0) },
  })
  return 'updated'
}

async function refreshX() {
  const token = process.env.X_BEARER_TOKEN
  if (!token) return 'skipped (X_BEARER_TOKEN not configured)'
  const headers = { Authorization: `Bearer ${token}` }
  const user = (await requestJson('https://api.x.com/2/users/by/username/ed_eclipse?user.fields=profile_image_url,public_metrics', { headers })).data
  if (!user) throw new Error('account @ed_eclipse was not found')
  const tweets = await requestJson(`https://api.x.com/2/users/${user.id}/tweets?max_results=5&exclude=retweets,replies`, { headers })
  const latest = tweets.data?.[0]

  update('eclipse-ed-x', {
    profileImage: user.profile_image_url?.replace('_normal', '_400x400'),
    stats: { followers: number(user.public_metrics?.followers_count ?? 0) },
    latestPost: latest ? {
      id: latest.id,
      title: 'Latest post from @ed_eclipse',
      url: `https://x.com/ed_eclipse/status/${latest.id}`,
    } : platforms['eclipse-ed-x']?.latestPost,
  })
  return 'updated'
}

const jobs = offline ? [] : [
  ['YouTube: Eclipse Ed', () => refreshYouTube('eclipse-ed-youtube', '@EclipseEd')],
  ['YouTube: Partial Edclipse', () => refreshYouTube('partial-edclipse-youtube', '@PartialEdclipse')],
  ['Twitch', refreshTwitch],
  ['Discord', refreshDiscord],
  ['X', refreshX],
]

for (const [name, job] of jobs) {
  try {
    console.log(`${name}: ${await job()}`)
  } catch (error) {
    console.warn(`${name}: update unavailable; keeping previous snapshot (${error.message})`)
  }
}

snapshot.generatedAt = new Date().toISOString()
snapshot.platforms = platforms
await writeFile(snapshotUrl, `${JSON.stringify(snapshot, null, 2)}\n`)
console.log(offline ? 'Snapshot updater validated offline.' : 'Platform snapshot refresh complete.')
