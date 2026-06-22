function CaseStudySection({ caseStudy }) {
  return (
    <section className="case-study content-section section-shell" aria-labelledby="case-study-title">
      <div className="content-section-heading">
        <span className="section-number">CASE STUDY{caseStudy.ownership ? ` · ${caseStudy.ownership}` : ''}</span>
        <div>
          <h2 id="case-study-title">{caseStudy.title}</h2>
          <p>{caseStudy.subtitle}</p>
        </div>
      </div>
      <div className="case-study-grid">
        {caseStudy.stages.map((stage, index) => (
          <article key={stage.label}>
            <span>0{index + 1} / {stage.label}</span>
            <p>{stage.text}</p>
          </article>
        ))}
      </div>
      <p className="privacy-note">Portfolio examples describe workflows only and do not include personally identifiable student information.</p>
    </section>
  )
}

export default CaseStudySection
