function WorkSamplesSection({ samples }) {
  return (
    <section className="work-samples content-section section-shell" aria-labelledby="samples-title">
      <div className="content-section-heading">
        <span className="section-number">WORK SAMPLES</span>
        <div>
          <h2 id="samples-title">Anonymized proof to add</h2>
          <p>Future samples will demonstrate the process without exposing student or district-sensitive information.</p>
        </div>
      </div>
      <div className="sample-grid">
        {samples.map((sample) => (
          <article key={sample.title}>
            <span>{sample.status}</span>
            <h3>{sample.title}</h3>
            <p>{sample.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WorkSamplesSection
