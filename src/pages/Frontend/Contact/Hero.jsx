import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="hero">
      <h1>Contact Us</h1>
      <p>Have a question about our authentication system, services, or anything else? We are here to help. Whether you need technical support, want to collaborate on a project, or simply want to say hello — do not hesitate to reach out. Our team is committed to providing fast and helpful responses to every inquiry.</p>
      <div className="contact-cards">
        <div className="contact-card">
          <span className="contact-icon"><FaEnvelope /></span>
          <h3>Email</h3>
          <p className="contact-desc">Send us an email and we will get back to you within 24 hours. Whether it is a detailed inquiry or a quick question, email is the best way to reach our team.</p>
          <a href="mailto:saad.dev.pk@gmail.com">saad.dev.pk@gmail.com</a>
        </div>
        <div className="contact-card">
          <span className="contact-icon"><FaWhatsapp /></span>
          <h3>WhatsApp</h3>
          <p className="contact-desc">Prefer instant messaging? Reach us directly on WhatsApp for quick responses. Ideal for urgent queries and real-time conversations.</p>
          <a href="https://wa.me/923261822075" target="_blank" rel="noopener noreferrer">+92 326 1822075</a>
        </div>
      </div>
    </section>
  )
}
