import './globals.css'

export const metadata = {
  title: 'Family Budget Tracker',
  description: 'Track your family income and expenses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
