function CareerCard({ career }) {
  return (
    <article className="career-card">
      <div className="card-topline"><span>{career.number}</span><span className="card-arrow" aria-hidden="true">↗</span></div>
      <h3>{career.title}</h3>
      <p>{career.shortDescription}</p>
      <a href={`#/${career.id}`} aria-label={`Explore ${career.title}`}>Explore this path <span aria-hidden="true">→</span></a>
    </article>
  )
}

export default CareerCard
