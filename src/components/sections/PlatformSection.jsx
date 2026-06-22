function PlatformSection({ platform }) {
  const hasMedia = Boolean(platform.latestVideo || platform.latestPost)

  return (
    <section id={platform.id} className={`platform-section platform-${platform.theme}`} aria-labelledby={`${platform.id}-title`}>
      <div className="platform-inner section-shell">
        <header className="platform-header">
          <div className="platform-identity">
            {platform.profileImage ? (
              <img
                src={platform.profileImage}
                alt={`${platform.name} profile`}
                width="240"
                height="240"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="platform-monogram" aria-hidden="true">{platform.monogram}</div>
            )}
            <div>
              <span className="platform-label">{platform.platform}</span>
              <h2 id={`${platform.id}-title`}>{platform.name}</h2>
              <p>{platform.handle}</p>
            </div>
          </div>
          {platform.url ? (
            <a className="platform-link" href={platform.url} target="_blank" rel="noreferrer">
              Visit {platform.platform} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="platform-link platform-link-disabled">{platform.unavailableLinkLabel}</span>
          )}
        </header>

        <div className={`platform-body ${hasMedia ? 'has-media' : ''}`}>
          <div className="platform-story">
            <p>{platform.description}</p>
            <div className="platform-stats" aria-label={`${platform.name} audience snapshot`}>
              {platform.stats.map((stat) => (
                stat.url ? (
                  <a key={stat.label} className="platform-stat" href={stat.url} target="_blank" rel="noreferrer" aria-label={`${stat.label}: ${stat.value}. Open latest post`}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label} <span aria-hidden="true">↗</span></span>
                  </a>
                ) : (
                  <div key={stat.label} className="platform-stat">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                )
              ))}
            </div>
            <small>Public profile snapshot · {platform.updated}</small>
          </div>

          {platform.latestVideo && (
            <div className="platform-video">
              <div className="video-heading">
                <span>Latest upload</span>
                <h3>{platform.latestVideo.title}</h3>
              </div>
              <div className="video-frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${platform.latestVideo.id}`}
                  title={`${platform.name}: ${platform.latestVideo.title}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {platform.latestPost && (
            <div className="platform-post">
              <div className="video-heading">
                <span>Latest post</span>
                <a href={platform.latestPost.url} target="_blank" rel="noreferrer">Open on X <span aria-hidden="true">↗</span></a>
              </div>
              <iframe
                src={`https://platform.twitter.com/embed/Tweet.html?id=${platform.latestPost.id}&theme=dark`}
                title={platform.latestPost.title}
                loading="lazy"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PlatformSection
