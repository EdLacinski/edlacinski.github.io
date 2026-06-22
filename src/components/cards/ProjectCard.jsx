function ProjectCard({ item, type = 'project' }) {
  return (
    <article className={item.details ? 'project-card has-details' : 'project-card'}>
      <span>{type === 'experience' ? 'Experience' : item.type || 'Project'}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {item.details && <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}
      {item.url && (
        <a href={item.url} target="_blank" rel="noreferrer">
          View repository <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </article>
  )
}

export default ProjectCard
