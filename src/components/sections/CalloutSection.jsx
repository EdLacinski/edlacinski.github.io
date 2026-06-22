function CalloutSection({ variant = 'career', career }) {
  if (variant === 'home') {
    return (
      <section id="building" className="build-callout section-shell">
        <div className="build-mark" aria-hidden="true">↗</div>
        <div><span className="section-number">LET'S CONNECT</span><h2>Four paths. One conversation.</h2><p>Want to connect, collaborate, or discuss an opportunity? Choose a career path to explore the details, or reach out directly.</p></div>
        <div className="build-actions">
          <a className="button button-secondary" href="#/tech-support">Start exploring <span aria-hidden="true">→</span></a>
          <a className="text-link" href="#/contact">Contact Edward <span aria-hidden="true">→</span></a>
        </div>
      </section>
    )
  }

  return (
    <section className="page-callout section-shell">
      <span className="status-dot" aria-hidden="true" />
      <div><p className="callout-kicker">Next additions</p><h2>{career?.nextAdditions}</h2><p>{career?.contactPrompt}</p></div>
      <div className="callout-actions">
        <a className="button button-primary" href="#/contact">Contact Edward <span aria-hidden="true">→</span></a>
        <a href="#/">Back to all paths <span aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}

export default CalloutSection
