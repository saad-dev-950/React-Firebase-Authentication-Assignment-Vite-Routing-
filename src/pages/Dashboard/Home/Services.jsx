import { FaGlobe, FaMobileAlt, FaGamepad, FaLaptopCode, FaPuzzlePiece, FaGraduationCap } from 'react-icons/fa'

const services = [
  { icon: <FaGlobe />, title: 'Web Development', desc: 'Modern, responsive websites and web applications using cutting-edge technologies.' },
  { icon: <FaMobileAlt />, title: 'Mobile App Development', desc: 'Native and cross-platform mobile applications for iOS and Android.' },
  { icon: <FaGamepad />, title: 'Game Development', desc: 'Immersive 2D and 3D gaming experiences across multiple platforms.' },
  { icon: <FaLaptopCode />, title: 'Software Development', desc: 'Custom desktop and enterprise software solutions tailored to your needs.' },
  { icon: <FaPuzzlePiece />, title: 'Google Extensions', desc: 'Powerful Google extensions to enhance functionality and productivity.' },
  { icon: <FaGraduationCap />, title: 'LMS', desc: 'Learning Management Systems for seamless online education and training.' },
]

export default function DashboardServices() {
  return (
    <section className="section">
      <h2>Our Services</h2>
      <div className="cards">
        {services.map((s, i) => (
          <div key={i} className="card">
            <span className="card-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
