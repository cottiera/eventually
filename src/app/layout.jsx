import '@/styles/globals.css'
import Nav from '@/components/Nav'

export const metadata = {
  title: "Eventually",
  description: "Plan Events Better"
}

function RootLayout({ children }) {
  return (
  <html lang='en'>
    <body>
      <div className="main" />

      <main className="app">
        <Nav />
        {children}
      </main>
    </body>
  </html>
  )
}

export default RootLayout