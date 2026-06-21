import PlatformSection from './PlatformSection.jsx'

function PlatformsSection({ platforms }) {
  return (
    <div className="platforms-section" aria-label="Creator platforms">
      <div className="platforms-intro section-shell">
        <span className="section-number">PLATFORMS & REACH</span>
        <h2>Every platform.<br />One connected community.</h2>
        <p>Uploads, live moments, quick updates, and a shared home base all connect back to the same community.</p>
      </div>
      {platforms.map((platform) => <PlatformSection key={platform.id} platform={platform} />)}
    </div>
  )
}

export default PlatformsSection
