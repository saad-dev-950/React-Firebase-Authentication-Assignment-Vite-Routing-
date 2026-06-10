import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="hero">
      <h1>Contact Support</h1>
      <p>Facing an issue with your account, authentication, or dashboard? Our support team is ready to assist you. Whether it is a technical problem, a feature request, or a question about your profile settings — we are just a message away. We strive to resolve all inquiries promptly and ensure you have the best experience using our platform.</p>
      <div className="contact-cards">
        <div className="contact-card">
          <span className="contact-icon"><FaEnvelope /></span>
          <h3>Email</h3>
          <p className="contact-desc">Reach out to us via email for detailed support. Our team typically responds within 24 hours with a thorough resolution to your issue.</p>
          <a href="mailto:saad.dev.pk@gmail.com">saad.dev.pk@gmail.com</a>
        </div>
        <div className="contact-card">
          <span className="contact-icon"><FaWhatsapp /></span>
          <h3>WhatsApp</h3>
          <p className="contact-desc">For faster assistance, message us on WhatsApp. Perfect for urgent account issues or when you need a quick answer on the go.</p>
          <a href="https://wa.me/923261822075" target="_blank" rel="noopener noreferrer">+92 326 1822075</a>
        </div>
      </div>
    </section>
  )
}
