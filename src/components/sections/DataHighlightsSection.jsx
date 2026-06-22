function DataHighlightsSection({ focuses, tools, title = 'Core Skills & Focus Areas' }) {
  return (
    <section className="data-highlights content-section section-shell" aria-labelledby="focus-title">
      <div className="content-section-heading">
        <span className="section-number">AT A GLANCE</span>
        <h2 id="focus-title">{title}</h2>
      </div>
      <div className="focus-grid">
        {focuses.map((focus) => (
          <article key={focus.title}>
            <h3>{focus.title}</h3>
            <p>{focus.description}</p>
          </article>
        ))}
      </div>
      <div className="tools-strip">
        <span>Tools & systems</span>
        <ul>{tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
      </div>
    </section>
  )
}

export default DataHighlightsSection
