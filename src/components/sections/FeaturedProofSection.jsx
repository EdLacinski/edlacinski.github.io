import ProofCard from '../cards/ProofCard.jsx'

function FeaturedProofSection({ samples }) {
  return (
    <section id="featured-proof" className="featured-proof-section section-shell" aria-labelledby="featured-proof-title">
      <div className="section-heading">
        <div><span className="section-number">FEATURED PROOF</span><h2 id="featured-proof-title">Work Samples & Case Studies</h2></div>
        <p>Selected examples showing how I approach troubleshooting, data quality, guest service, and creator/community work. Samples use synthetic or anonymized details where needed.</p>
      </div>
      <div className="proof-card-grid">
        {samples.map((sample) => <ProofCard key={sample.id} sample={sample} />)}
      </div>
    </section>
  )
}

export default FeaturedProofSection
