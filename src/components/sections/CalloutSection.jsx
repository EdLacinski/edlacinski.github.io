function CalloutSection({ variant = 'career' }) {
  if (variant === 'home') {
    return (
      <section id="building" className="build-callout section-shell">
        <div className="build-mark" aria-hidden="true">↗</div>
        <div><span className="section-number">CURRENT STATUS</span><h2>The hub is just getting started.</h2><p>I’m building out the stories, projects, and experience behind each path. Check back soon—the foundation is here, and there’s plenty more to share.</p></div>
        <a className="button button-secondary" href="#/tech-support">Start exploring <span aria-hidden="true">→</span></a>
      </section>
    )
  }

  return (
    <section className="page-callout section-shell">
      <span className="status-dot" aria-hidden="true" />
      <div><p className="callout-kicker">Work in progress</p><h2>This chapter is still being written.</h2><p>I’m always trying new things and looking for ways to improve. Check back often for updates.</p></div>
      <a href="#/">Back to all paths <span aria-hidden="true">→</span></a>
    </section>
  )
}

export default CalloutSection
