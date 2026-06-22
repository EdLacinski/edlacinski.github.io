function ProofCard({ sample }) {
  return (
    <article className="proof-card">
      <div className="card-topline"><span>{sample.careerLabel}</span><span>{sample.status}</span></div>
      <h3>{sample.title}</h3>
      <p>{sample.summary}</p>
      <a href={`#/${sample.careerId}`} aria-label={`View ${sample.title} on the ${sample.careerLabel} page`}>
        View sample <span aria-hidden="true">→</span>
      </a>
    </article>
  )
}

export default ProofCard
