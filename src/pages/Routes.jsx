import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../components/Misc/ProtectedRoute'

import FrontendLayout from './Frontend'
import Home from './Frontend/Home'
import About from './Frontend/About'
import Contact from './Frontend/Contact'

import AuthLayout from './Auth'
import Login from './Auth/Login'
import Register from './Auth/Register'
import ForgotPassword from './Auth/ForgotPassword'

import DashboardLayout from './Dashboard'
import DashboardHome from './Dashboard/Home'
import DashboardAbout from './Dashboard/About'
import DashboardContact from './Dashboard/Contact'
import DashboardProfile from './Dashboard/Profile'

import NoPage from '../components/Misc/NoPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<FrontendLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>

      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="about" element={<DashboardAbout />} />
        <Route path="contact" element={<DashboardContact />} />
        <Route path="profile" element={<DashboardProfile />} />
      </Route>

      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}
