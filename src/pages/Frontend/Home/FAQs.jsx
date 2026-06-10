const faqs = [
  { q: 'What is SJ Authentication?', a: 'SJ Authentication is a secure login and registration system built with Firebase Authentication and React.' },
  { q: 'How do I create an account?', a: 'Click the Register button and fill in your email and password. Your account will be created instantly.' },
  { q: 'Is my data secure?', a: 'Yes, all authentication is handled by Firebase, which follows industry-standard security practices.' },
  { q: 'Can I reset my password?', a: 'Absolutely. Click "Forgot Password" on the login page and follow the instructions sent to your email.' },
  { q: 'What technologies are used?', a: 'Built with React, Vite, Firebase Authentication, and React Router for seamless navigation.' },
]

export default function FAQs() {
  return (
    <section className="section">
      <h2>Frequently Asked Questions</h2>
      <div className="faqs">
        {faqs.map((f, i) => (
          <div key={i} className="faq">
            <h4>{f.q}</h4>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
