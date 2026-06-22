function WorkSamplesSection({ samples, intro = 'Planned samples will demonstrate the process using employer-safe, privacy-conscious examples.' }) {
  return (
    <section className="work-samples content-section section-shell" aria-labelledby="samples-title">
      <div className="content-section-heading">
        <span className="section-number">WORK SAMPLES</span>
        <div>
          <h2 id="samples-title">Additional samples planned</h2>
          <p>{intro}</p>
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
