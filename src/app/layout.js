import Footer from '@/componets/Footer'
import './globals.css'

export const metadata = {
  title: 'Google Clone App',
  //SEO
  description: 'This google clone bulid by abhishek',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
            {children}

        </main>
        <Footer />
        </body>
    </html>
  )
}
