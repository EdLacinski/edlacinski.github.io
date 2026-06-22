import snapshotData from './platformSnapshots.json'

const snapshot = (id) => snapshotData.platforms?.[id] ?? {}
const stat = (id, key, fallback) => snapshot(id).stats?.[key] ?? fallback

export const creatorPlatforms = [
  {
    id: 'eclipse-ed-youtube',
    platform: 'YouTube',
    theme: 'youtube',
    name: 'Eclipse Ed',
    handle: '@EclipseEd',
    url: 'https://www.youtube.com/@EclipseEd',
    profileImage: snapshot('eclipse-ed-youtube').profileImage || 'https://yt3.googleusercontent.com/ytc/AIdro_ndV5A_5NDZBIdzF6VyZNRVWmLHRp2fJT-j3WYFzzxaqQ=s240-c-k-c0x00ffffff-no-rj',
    description: 'The main Eclipse Ed home for TCG coverage, community spotlights, interviews, and creator-led event stories.',
    stats: [
      { value: stat('eclipse-ed-youtube', 'subscribers', '218'), label: 'Subscribers' },
      { value: stat('eclipse-ed-youtube', 'views', '29,825'), label: 'Total views' },
      { value: stat('eclipse-ed-youtube', 'videos', '134'), label: 'Videos' },
    ],
    updated: snapshot('eclipse-ed-youtube').updated || 'June 20, 2026',
    latestVideo: snapshot('eclipse-ed-youtube').latestVideo || {
      id: '4xB3gyYfbzY',
      title: 'Top Teams Break Down BSF Philly | Vanguard Interviews',
    },
  },
  {
    id: 'partial-edclipse-youtube',
    platform: 'YouTube',
    theme: 'youtube',
    name: 'Partial Edclipse',
    handle: '@PartialEdclipse',
    url: 'https://www.youtube.com/@PartialEdclipse',
    profileImage: snapshot('partial-edclipse-youtube').profileImage || 'https://yt3.googleusercontent.com/OANVfh6swYwYlxNe3wK3F2NDUlsivd3x1vLKqCUxfvRxHUczeTUXS5ZgtvL1HGqNYaphMjAUTQ=s240-c-k-c0x00ffffff-no-rj',
    description: 'The other side of the eclipse: full Twitch VODs, general gaming, collaborations, and the experiments that live beyond the TCG channel.',
    stats: [
      { value: stat('partial-edclipse-youtube', 'subscribers', '11'), label: 'Subscribers' },
      { value: stat('partial-edclipse-youtube', 'views', '146'), label: 'Total views' },
      { value: stat('partial-edclipse-youtube', 'videos', '35'), label: 'Videos' },
    ],
    updated: snapshot('partial-edclipse-youtube').updated || 'June 20, 2026',
    latestVideo: snapshot('partial-edclipse-youtube').latestVideo || {
      id: 'X5EYubJMfHY',
      title: 'Dispatch | Episode 8 — Endgame: Suit Up or Shut Down',
    },
  },
  {
    id: 'eclipse-ed-twitch',
    platform: 'Twitch',
    theme: 'twitch',
    name: 'Eclipse_Ed',
    handle: 'twitch.tv/eclipse_ed',
    url: 'https://www.twitch.tv/eclipse_ed',
    profileImage: snapshot('eclipse-ed-twitch').profileImage || 'https://static-cdn.jtvnw.net/jtv_user_pictures/74afdf1c-6ca7-4d35-9ab2-d5ab164e526c-profile_image-300x300.png',
    description: 'The live home of Eclipse Ed—gameplay, TCG conversation, community collaborations, and the spontaneous moments that make live content feel alive.',
    stats: [
      { value: stat('eclipse-ed-twitch', 'followers', '368'), label: 'Followers' },
      { value: 'Private', label: 'Subscribers' },
      { value: 'Not listed', label: 'Channel views' },
    ],
    updated: snapshot('eclipse-ed-twitch').updated || 'June 20, 2026',
  },
  {
    id: 'eclipse-ed-discord',
    platform: 'Discord',
    theme: 'discord',
    name: 'The Lunar Lounge',
    handle: 'The official community hub',
    url: 'https://discord.gg/HdtEw8W3',
    profileImage: snapshot('eclipse-ed-youtube').profileImage || 'https://yt3.googleusercontent.com/ytc/AIdro_ndV5A_5NDZBIdzF6VyZNRVWmLHRp2fJT-j3WYFzzxaqQ=s240-c-k-c0x00ffffff-no-rj',
    description: 'The Lunar Lounge is the official hub for everything Eclipse Ed—a shared home for content updates, community conversation, events, streams, and the people behind the numbers.',
    stats: [
      { value: stat('eclipse-ed-discord', 'members', '25'), label: 'Server members' },
      { value: 'Official', label: 'Community hub' },
      { value: 'All content', label: 'One home base' },
    ],
    updated: snapshot('eclipse-ed-discord').updated || 'June 20, 2026',
  },
  {
    id: 'eclipse-ed-x',
    platform: 'X',
    theme: 'x',
    name: 'Eclipse_Ed | @ Your Heart',
    handle: '@ed_eclipse',
    url: 'https://x.com/ed_eclipse',
    profileImage: snapshot('eclipse-ed-x').profileImage || 'https://pbs.twimg.com/profile_images/1668651037207543810/rgGezHFC_400x400.jpg',
    description: 'The quick-update side of Eclipse Ed: creator notes, stream conversation, TCG thoughts, community connections, and the occasional meme supreme.',
    stats: [
      { value: stat('eclipse-ed-x', 'followers', '142'), label: 'Followers' },
    ],
    updated: snapshot('eclipse-ed-x').updated || 'June 20, 2026',
    latestPost: snapshot('eclipse-ed-x').latestPost || {
      id: '2067172358717125088',
      title: 'Latest post from @ed_eclipse',
      url: 'https://x.com/ed_eclipse/status/2067172358717125088',
    },
  },
]
