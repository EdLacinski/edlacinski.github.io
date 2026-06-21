import ProjectCard from '../cards/ProjectCard.jsx'

function ProjectsSection({ projects, title = 'Projects to add' }) {
  return (
    <section className="content-section section-shell" aria-labelledby="projects-title">
      <div className="content-section-heading"><span className="section-number">THE PROOF</span><h2 id="projects-title">{title}</h2></div>
      <div className="project-grid">{projects.map((item) => <ProjectCard key={item.title} item={item} />)}</div>
    </section>
  )
}

export default ProjectsSection
