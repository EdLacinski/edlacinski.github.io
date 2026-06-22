import PageShell from '../components/layout/PageShell.jsx'
import ContactCardsSection from '../components/sections/ContactCardsSection.jsx'
import { contactOptions } from '../data/contacts.js'

export default function Contact() {
  return (
    <PageShell>
      <section className="page-hero contact-hero section-shell">
        <div className="eyebrow"><span>05</span> Let&apos;s connect</div>
        <h1>Contact</h1>
        <p>Choose the contact path that matches your reason for reaching out: professional networking, recruiting and hiring, or creator and event business.</p>
      </section>
      <ContactCardsSection contacts={contactOptions} />
    </PageShell>
  )
}
