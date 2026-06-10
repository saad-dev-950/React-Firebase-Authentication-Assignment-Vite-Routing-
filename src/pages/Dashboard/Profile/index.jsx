import { useState } from 'react'
import { useAuth } from '../../../context/Auth'
import { useToast } from '../../../context/ToastContext'
import './Profile.scss'

export default function Profile() {
  const { user, updateDisplayName, reauthenticate, changePassword } = useAuth()
  const { addToast } = useToast()
  const [name, setName] = useState(user?.displayName || '')
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' })
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [nameLoading, setNameLoading] = useState(false)
  const [passLoading, setPassLoading] = useState(false)
  const [nameError, setNameError] = useState('')
  const [passError, setPassError] = useState('')

  async function handleNameUpdate(e) {
    e.preventDefault()
    if (!name.trim()) {
      setNameError('Name is required')
      return
    }
    try {
      setNameError('')
      setNameLoading(true)
      await updateDisplayName(name.trim())
      addToast('Name updated successfully!', 'success')
    } catch (err) {
      setNameError(err.message.replace('Firebase: ', '').replace(/\(.*\)/, ''))
    }
    setNameLoading(false)
  }

  async function handlePasswordUpdate(e) {
    e.preventDefault()
    if (!passwords.current) { setPassError('Current password is required'); return }
    if (!passwords.new) { setPassError('New password is required'); return }
    if (passwords.new.length < 6) { setPassError('New password must be at least 6 characters'); return }
    if (passwords.new !== passwords.confirm) { setPassError('Passwords do not match'); return }
    try {
      setPassError('')
      setPassLoading(true)
      await reauthenticate(passwords.current)
      await changePassword(passwords.new)
      setPasswords({ current: '', new: '', confirm: '' })
      addToast('Password changed successfully!', 'success')
    } catch (err) {
      setPassError(err.message.replace('Firebase: ', '').replace(/\(.*\)/, ''))
    }
    setPassLoading(false)
  }

  return (
    <div className="profile-page">
      <div className="profile-section">
        <h2>Profile</h2>
        <p className="profile-desc">Manage your personal information and account details. Your email address is used for authentication and cannot be changed here.</p>
        <p className="profile-email"><span className="profile-label">Email:</span> {user?.email}</p>
        <form onSubmit={handleNameUpdate}>
          <div className="form-group">
            <label>Display Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          {nameError && <div className="profile-error">{nameError}</div>}
          <button type="submit" disabled={nameLoading} className="btn-submit">
            {nameLoading ? 'Updating...' : 'Update Name'}
          </button>
        </form>
      </div>

      <div className="profile-section">
        <h2>Change Password</h2>
        <p className="profile-desc">For security reasons, you will need to enter your current password before setting a new one. Choose a strong password with at least 6 characters.</p>
        <form onSubmit={handlePasswordUpdate}>
          <div className="form-group">
            <label>Current Password</label>
            <div className="password-wrapper">
              <input
                type={showCurrent ? 'text' : 'password'}
                value={passwords.current}
                onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                placeholder="Enter current password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowCurrent(!showCurrent)}
              >
                {showCurrent ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>New Password</label>
            <div className="password-wrapper">
              <input
                type={showNew ? 'text' : 'password'}
                value={passwords.new}
                onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                placeholder="At least 6 characters"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowNew(!showNew)}
              >
                {showNew ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Confirm New Password</label>
            <div className="password-wrapper">
              <input
                type={showConfirm ? 'text' : 'password'}
                value={passwords.confirm}
                onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                placeholder="Confirm new password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {passError && <div className="profile-error">{passError}</div>}
          <button type="submit" disabled={passLoading} className="btn-submit">
            {passLoading ? 'Changing...' : 'Change Password'}
          </button>
        </form>
      </div>
    </div>
  )
}
