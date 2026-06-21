import CareerCard from '../cards/CareerCard.jsx'

function CareerCardsSection({ careers }) {
  return (
    <section id="paths" className="paths-section section-shell" aria-labelledby="paths-title">
      <div className="section-heading">
        <div><span className="section-number">01 / CAREER PATHS</span><h2 id="paths-title">Four ways I show up.</h2></div>
        <p>Each path stands on its own. Together, they tell the fuller story.</p>
      </div>
      <div className="career-grid">{careers.map((career) => <CareerCard key={career.id} career={career} />)}</div>
    </section>
  )
}

export default CareerCardsSection
