import { AuthProvider } from './Auth'
import { ThemeProvider } from './ThemeContext'
import { ToastProvider } from './ToastContext'

export default function AppProvider({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          {children}
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
