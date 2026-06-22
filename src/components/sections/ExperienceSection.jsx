import ProjectCard from '../cards/ProjectCard.jsx'

function ExperienceSection({ experiences = [], summary, highlights = [], roleTitle, roleMeta = [], note, title = 'Experience to expand' }) {
  return (
    <section className="content-section section-shell" aria-labelledby="experience-title">
      <div className="content-section-heading"><span className="section-number">THE BACKGROUND</span><h2 id="experience-title">{title}</h2></div>
      {summary ? (
        <div className="experience-panel">
          {roleTitle && (
            <div className="experience-role-header">
              <h3 className="experience-role-title">{roleTitle}</h3>
              {roleMeta.length > 0 && <p>{roleMeta.join(' · ')}</p>}
            </div>
          )}
          <div className="experience-narrative">
            <p>{summary}</p>
            <ul>{highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          </div>
          {note && <p className="experience-note">{note}</p>}
        </div>
      ) : (
        <div className="project-grid">{experiences.map((item) => <ProjectCard key={item.title} item={item} type="experience" />)}</div>
      )}
    </section>
  )
}

export default ExperienceSection
