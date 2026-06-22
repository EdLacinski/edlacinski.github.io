import ExperienceProfileCard from '../cards/ExperienceProfileCard.jsx'

function ExperienceProfilesSection({ experiences, overview = false }) {
  return (
    <section className="content-section section-shell" aria-labelledby={overview ? 'experience-overview-title' : 'experience-snapshot-title'}>
      <div className="content-section-heading">
        <span className="section-number">{overview ? 'EXPERIENCE OVERVIEW' : 'EXPERIENCE SNAPSHOT'}</span>
        <h2 id={overview ? 'experience-overview-title' : 'experience-snapshot-title'}>
          {overview ? 'The Background Behind Each Path' : 'Where This Experience Comes From'}
        </h2>
      </div>
      <div className="experience-profile-grid">
        {experiences.map((experience) => <ExperienceProfileCard key={experience.id} experience={experience} />)}
      </div>
    </section>
  )
}

export default ExperienceProfilesSection
