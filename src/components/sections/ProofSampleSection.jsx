function ProofSampleSection({ sample }) {
  const titleId = `${sample.id}-title`

  return (
    <section id={sample.id} className="proof-sample content-section section-shell" aria-labelledby={titleId}>
      <div className="content-section-heading proof-sample-heading">
        <div><span className="section-number">PORTFOLIO PROOF</span><span className="proof-status">{sample.status}</span></div>
        <div><span className="proof-career">{sample.careerLabel}</span><h2 id={titleId}>{sample.title}</h2><p>{sample.intro}</p></div>
      </div>

      {(sample.scenario || sample.mockData) && (
        <div className="proof-context-grid">
          {sample.scenario && <article><span>Scenario</span><p>{sample.scenario}</p></article>}
          {sample.mockData && <article><span>Mock data</span><p>{sample.mockData}</p></article>}
        </div>
      )}

      {sample.code && (
        <div className="proof-code-block">
          <div><span>SQL</span><small>Synthetic example</small></div>
          <pre tabIndex="0" aria-label={`${sample.title} SQL example`}><code>{sample.code}</code></pre>
        </div>
      )}

      <div className="proof-steps-grid">
        {sample.sections.map((section) => (
          <article key={section.title}>
            <h3>{section.title}</h3>
            {section.body && <p>{section.body}</p>}
            {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
          </article>
        ))}
      </div>

      <div className="proof-takeaways">
        <div><span className="section-number">WHAT THIS DEMONSTRATES</span><ul>{sample.demonstrates.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div className="proof-note">
          {sample.credential && <strong>{sample.credential}</strong>}
          <p>{sample.note}</p>
        </div>
      </div>
    </section>
  )
}

export default ProofSampleSection
