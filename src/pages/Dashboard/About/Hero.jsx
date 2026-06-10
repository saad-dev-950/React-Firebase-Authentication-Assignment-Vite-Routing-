import { FaUserShield, FaChartLine, FaBell, FaTools, FaLock, FaSyncAlt } from 'react-icons/fa'

export default function Hero() {
  return (
    <>
      <section className="hero">
        <h1>About Dashboard</h1>
        <p>Your centralized command center for managing authentication, account settings, and profile information — built for security and simplicity.</p>
      </section>
      <section className="section">
        <div className="cards">
          <div className="card">
            <span className="card-icon"><FaUserShield /></span>
            <h3>Account Security</h3>
            <p>Your account is protected with Firebase Authentication. Monitor your login activity, update credentials, and manage access controls from a single dashboard.</p>
          </div>
          <div className="card">
            <span className="card-icon"><FaChartLine /></span>
            <h3>Activity Overview</h3>
            <p>Stay informed with a clear overview of your account activity. Track changes, monitor usage, and maintain full visibility into your digital footprint.</p>
          </div>
          <div className="card">
            <span className="card-icon"><FaBell /></span>
            <h3>Instant Notifications</h3>
            <p>Receive real-time updates on important account events. From password changes to profile updates, you are always in the loop with instant toast alerts.</p>
          </div>
          <div className="card">
            <span className="card-icon"><FaTools /></span>
            <h3>Profile Management</h3>
            <p>Easily update your display name, change your password, and customize your profile settings. Everything you need is just a few clicks away.</p>
          </div>
          <div className="card">
            <span className="card-icon"><FaLock /></span>
            <h3>Data Privacy</h3>
            <p>Your personal information is encrypted and securely stored. We follow strict privacy protocols to ensure your data remains confidential and protected at all times.</p>
          </div>
          <div className="card">
            <span className="card-icon"><FaSyncAlt /></span>
            <h3>Seamless Sync</h3>
            <p>All your settings and preferences are synchronized in real-time across sessions. Log in from any device and pick up right where you left off without missing a beat.</p>
          </div>
        </div>
      </section>
    </>
  )
}
