const faqs = [
  { q: 'How do I update my profile?', a: 'Go to Profile in the dashboard navigation to update your display name and manage your account.' },
  { q: 'Is my dashboard data secure?', a: 'Yes, the dashboard is protected \u2014 only authenticated users can access it.' },
  { q: 'Can I change my password?', a: 'Yes, visit the Profile page in your dashboard to change your password directly, or use "Forgot Password" on the login page.' },
  { q: 'How do I contact support?', a: 'Visit our Contact page or email us directly at saad.dev.pk@gmail.com.' },
  { q: 'How do I log out?', a: 'Click the Logout button in the navigation bar to securely logout / sign out.' },
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
