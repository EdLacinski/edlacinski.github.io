import { useEffect, useState } from 'react'

function HeroSection() {
  const [showPortrait, setShowPortrait] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let hideTimer
    let cycleTimer

    const revealPortrait = () => {
      setShowPortrait(true)
      hideTimer = window.setTimeout(() => setShowPortrait(false), 5000)
    }

    const firstReveal = window.setTimeout(() => {
      revealPortrait()
      cycleTimer = window.setInterval(revealPortrait, 30000)
    }, 5000)

    return () => {
      window.clearTimeout(firstReveal)
      window.clearTimeout(hideTimer)
      window.clearInterval(cycleTimer)
    }
  }, [])

  return (
    <section className="hero section-shell">
      <div className="hero-copy">
        <div className="eyebrow"><span>●</span> Edward Lacinski | Eclipse Hub</div>
        <h1>Versatile experience.<br /><span>People-first work.</span></h1>
        <p>A one-stop career hub for hiring managers, recruiters, and collaborators exploring my work across tech support, data analysis, hospitality, and content creation.</p>
        <p className="hero-supporting-copy">I bring troubleshooting, data quality, guest service, community leadership, and clear communication. Choose the path relevant to your opening and review the proof behind it.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#paths">Explore career paths <span aria-hidden="true">↓</span></a>
          <a className="text-link" href="#featured-proof">View featured proof <span aria-hidden="true">→</span></a>
          <span className="resume-note">Resume PDF coming soon.</span>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className={`eclipse-disc ${showPortrait ? 'is-portrait' : ''}`}>
          <span className="hero-initials">EL</span>
          <img src="/images/experience/edward-lacinski-profile.jpg" alt="" aria-hidden="true" />
        </div>
        <span className="visual-label label-one">Support</span><span className="visual-label label-two">Data</span>
        <span className="visual-label label-three">Service</span><span className="visual-label label-four">Create</span>
      </div>
    </section>
  )
}

export default HeroSection
