import '@/styles/globals.css'
import Nav from '@/components/Nav'
import Provider from '@/components/Provider'

export const metadata = {
  title: "Eventually",
  description: "Plan Events Better"
}

function RootLayout({ children }) {
  return (
  <html lang='en'>
    <body>
      <Provider>
       <div className="main" />
       <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
  )
}

export default RootLayout