import ContactCard from '../cards/ContactCard.jsx'

function ContactCardsSection({ contacts }) {
  return (
    <section className="contact-cards-section section-shell" aria-label="Ways to contact Edward Lacinski">
      <div className="contact-grid">
        {contacts.map((contact) => <ContactCard key={contact.id} contact={contact} />)}
      </div>
    </section>
  )
}

export default ContactCardsSection
