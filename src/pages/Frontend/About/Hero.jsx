import { FaShieldAlt, FaRocket, FaCogs, FaHandshake, FaLightbulb, FaHeadset } from 'react-icons/fa'

export default function Hero() {
  return (
    <>
      <section className="hero">
        <h1>About Us</h1>
        <p>We are a team of passionate developers dedicated to building secure, scalable, and high-performance digital solutions that drive real results.</p>
      </section>
      <section className="section">
        <div className="cards">
          <div className="card">
            <span className="card-icon"><FaShieldAlt /></span>
            <h3>Security First</h3>
            <p>Every solution we build follows industry-standard security practices. From authentication to data handling, we ensure your digital assets are protected at all times.</p>
          </div>
          <div className="card">
            <span className="card-icon"><FaRocket /></span>
            <h3>Performance Driven</h3>
            <p>We optimize every layer of the stack — from frontend to backend — delivering fast, responsive applications that provide a seamless user experience across all devices.</p>
          </div>
          <div className="card">
            <span className="card-icon"><FaCogs /></span>
            <h3>Full-Stack Expertise</h3>
            <p>With deep experience in web, mobile, game, and software development, we craft end-to-end solutions tailored to your unique requirements and business goals.</p>
          </div>
          <div className="card">
            <span className="card-icon"><FaHandshake /></span>
            <h3>Client Partnership</h3>
            <p>We believe in transparent communication and long-term collaboration. Your success is our success — we work closely with you at every stage of the development journey.</p>
          </div>
          <div className="card">
            <span className="card-icon"><FaLightbulb /></span>
            <h3>Innovation Focus</h3>
            <p>We stay ahead of the curve by adopting cutting-edge technologies and modern development practices, ensuring your solutions are future-ready and competitive.</p>
          </div>
          <div className="card">
            <span className="card-icon"><FaHeadset /></span>
            <h3>Dedicated Support</h3>
            <p>Our commitment extends beyond delivery. We provide ongoing support and maintenance to ensure your applications run smoothly and evolve with your needs.</p>
          </div>
        </div>
      </section>
    </>
  )
}
