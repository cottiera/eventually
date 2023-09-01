import '@/styles/globals.css'

const metadata = {
    title: "Eventually",
    description: "Plan Events Better"
}

function RootLayout({ children }) {
  return (
    <html>
        <body>
            <div className='main' />
        </body>
        <main className='app'>
            {children}
        </main>
    </html>
  )
}

export default RootLayout