function ContactCard({ contact }) {
  const external = contact.url.startsWith('http')

  return (
    <article className="contact-card">
      <span>{contact.label}</span>
      <h2>{contact.title}</h2>
      <p>{contact.description}</p>
      <a className="contact-value" href={contact.url} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
        {contact.value}
      </a>
      <a className="button button-primary" href={contact.url} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
        {contact.buttonText}<span aria-hidden="true">→</span>
      </a>
    </article>
  )
}

export default ContactCard
