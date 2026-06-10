import { Link } from 'react-router-dom'
import './NoPage.scss'

export default function NoPage() {
  return (
    <div className="no-page">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go Home</Link>
    </div>
  )
}
