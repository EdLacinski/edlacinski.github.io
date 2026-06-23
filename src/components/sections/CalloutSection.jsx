function CalloutSection({ variant = 'career', career }) {
  if (variant === 'home') {
    return (
      <section id="building" className="build-callout section-shell">
        <div className="build-mark" aria-hidden="true">↗</div>
        <div><span className="section-number">RECRUITING &amp; HIRING</span><h2>Hiring or recruiting?</h2><p>Start with the career path that best matches your opening, review the featured proof samples, or contact me directly to discuss where my experience can help your team.</p></div>
        <div className="build-actions">
          <a className="button button-secondary" href="#/contact">Contact for hiring <span aria-hidden="true">→</span></a>
          <a className="text-link" href="#featured-proof">View proof samples <span aria-hidden="true">→</span></a>
          <a className="text-link" href="#paths">Explore career paths <span aria-hidden="true">→</span></a>
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
