import { useAuth } from '../../../context/Auth'
import Hero from './Hero'
import Services from './Services'
import FAQs from './FAQs'
import './DashboardHome.scss'

export default function DashboardHome() {
  const { user } = useAuth()

  return (
    <div className="dashboard-home">
      <div className="welcome-banner">
        <h1>Welcome, {user?.displayName || user?.email || 'User'}!</h1>
        <p>This is your protected dashboard.</p>
      </div>
      <Hero />
      <Services />
      <FAQs />
    </div>
  )
}
