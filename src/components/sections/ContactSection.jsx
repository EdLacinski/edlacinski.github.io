function ContactSection({ heading = 'Let’s connect.', text = 'Contact details and social links will be added here soon.' }) {
  return (
    <section className="contact-section section-shell">
      <span className="section-number">CONTACT</span>
      <h2>{heading}</h2>
      <p>{text}</p>
    </section>
  )
}

export default ContactSection
