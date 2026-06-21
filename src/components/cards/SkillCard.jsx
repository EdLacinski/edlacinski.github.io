function SkillCard({ skill, index }) {
  const title = typeof skill === 'string' ? skill : skill.title
  const description = typeof skill === 'string' ? null : skill.description

  return (
    <article className={description ? 'skill-card has-description' : 'skill-card'}>
      <span>{String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </article>
  )
}

export default SkillCard
