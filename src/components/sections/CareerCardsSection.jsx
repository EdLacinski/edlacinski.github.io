import CareerCard from '../cards/CareerCard.jsx'

function CareerCardsSection({ careers }) {
  return (
    <section id="paths" className="paths-section section-shell" aria-labelledby="paths-title">
      <div className="section-heading">
        <div><span className="section-number">01 / CAREER PATHS</span><h2 id="paths-title">Choose your path.</h2></div>
        <p>Start with the role that brought you here. Each path connects experience, skills, and a practical proof sample.</p>
      </div>
      <div className="career-grid">{careers.map((career) => <CareerCard key={career.id} career={career} />)}</div>
    </section>
  )
}

export default CareerCardsSection
