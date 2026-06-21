import SkillCard from '../cards/SkillCard.jsx'

function SkillsSection({ skills, title = 'Skills to highlight' }) {
  return (
    <section className="content-section section-shell" aria-labelledby="skills-title">
      <div className="content-section-heading"><span className="section-number">WHAT I BRING</span><h2 id="skills-title">{title}</h2></div>
      <div className="skill-grid">{skills.map((skill, index) => <SkillCard key={typeof skill === 'string' ? skill : skill.title} skill={skill} index={index} />)}</div>
    </section>
  )
}

export default SkillsSection
