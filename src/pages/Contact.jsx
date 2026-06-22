import PageShell from '../components/layout/PageShell.jsx'
import ContactCardsSection from '../components/sections/ContactCardsSection.jsx'
import { contactOptions } from '../data/contacts.js'

export default function Contact() {
  return (
    <PageShell>
      <section className="page-hero contact-hero section-shell">
        <div className="eyebrow"><span>05</span> Let&apos;s connect</div>
        <h1>Contact</h1>
        <p>Professional opportunities, hiring conversations, and creator/business inquiries.</p>
      </section>
      <ContactCardsSection contacts={contactOptions} />
    </PageShell>
  )
}
