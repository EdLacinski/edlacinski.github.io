function IntroSection({ career }) {
  if (career) {
    return (
      <section className="page-hero section-shell">
        <div className="eyebrow"><span>{career.number}</span> Career path</div>
        <h1>{career.pageTitle || career.title}</h1>
        <p>{career.summary}</p>
      </section>
    )
  }

  return (
    <section className="intro section-shell" aria-labelledby="intro-title">
      <span className="section-number">00 / INTRO</span>
      <div>
        <h2 id="intro-title">Different rooms.<br />The same strengths.</h2>
        <p>My work has taken me from school technology and state reporting to busy bars and creator events. The thread connecting it all is simple: listen closely, make the complicated feel manageable, and leave people better supported than I found them.</p>
      </div>
    </section>
  )
}

export default IntroSection
