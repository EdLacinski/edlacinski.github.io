function ContactCard({ contact }) {
  const external = contact.url.startsWith('http')

  return (
    <article className="contact-card">
      <span>{contact.label}</span>
      <h2>{contact.title}</h2>
      <p>{contact.description}</p>
      <span className="contact-value">{contact.value}</span>
      <a className="button button-primary" href={contact.url} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
        {contact.buttonText}<span aria-hidden="true">→</span>{external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    </article>
  )
}

export default ContactCard
