import { useEffect, useState } from 'react'

function getInitials(company) {
  return company.split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join('').toUpperCase()
}

function ExperienceProfileCard({ experience }) {
  const [imageFailed, setImageFailed] = useState(false)

  useEffect(() => setImageFailed(false), [experience.imageSrc])

  return (
    <article className="experience-profile-card">
      <div className="experience-profile-image">
        {!imageFailed && experience.imageSrc ? (
          <img
            src={experience.imageSrc}
            alt={experience.imageAlt}
            width={experience.imageWidth}
            height={experience.imageHeight}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="experience-image-fallback" role="img" aria-label={`${experience.company} image placeholder`}>
            <span aria-hidden="true">{getInitials(experience.company)}</span>
            <small>Photo coming soon</small>
          </div>
        )}
      </div>
      <div className="experience-profile-copy">
        <span>{experience.company}</span>
        <h3>{experience.role}</h3>
        <dl className="experience-facts">
          <div><dt>Dates</dt><dd>{experience.dateLabel || `${experience.startDate} – ${experience.endDate}`}</dd></div>
          <div><dt>Service</dt><dd>{experience.yearsOfService}</dd></div>
        </dl>
        <p>{experience.summary}</p>
        <ul className="experience-tags" aria-label="Related experience areas">
          {experience.experienceArea.map((area) => <li key={area}>{area}</li>)}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceProfileCard
