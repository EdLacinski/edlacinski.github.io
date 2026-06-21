function HeroSection() {
  return (
    <section className="hero section-shell">
      <div className="hero-copy">
        <div className="eyebrow"><span>●</span> Welcome to my career hub</div>
        <h1>Edward Lacinski <em>|</em><br /><span>Eclipse Hub</span></h1>
        <p>I help people, solve technical problems, organize information, serve customers, and build communities—sometimes all in the same day.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#paths">Explore my paths <span aria-hidden="true">↓</span></a>
          <a className="text-link" href="#building">See what’s next <span aria-hidden="true">→</span></a>
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
