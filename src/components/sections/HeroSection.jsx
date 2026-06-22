function HeroSection() {
  return (
    <section className="hero section-shell">
      <div className="hero-copy">
        <div className="eyebrow"><span>●</span> Four connected paths. One people-first approach.</div>
        <h1>Edward Lacinski <em>|</em><br /><span>Eclipse Hub</span></h1>
        <p>I bring people-first experience across tech support, data analysis, hospitality operations, and content creation—with practical proof samples available for each path.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#paths">Choose your path <span aria-hidden="true">↓</span></a>
          <a className="text-link" href="#featured-proof">View featured proof <span aria-hidden="true">→</span></a>
          <span className="resume-note">Resume PDF coming soon.</span>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="eclipse-disc"><span>EL</span></div>
        <span className="visual-label label-one">Support</span><span className="visual-label label-two">Data</span>
        <span className="visual-label label-three">Service</span><span className="visual-label label-four">Create</span>
      </div>
    </section>
  )
}

export default HeroSection
