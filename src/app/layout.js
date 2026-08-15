import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Rexer Studio | Building Secure Digital Empires',
  description: 'Expert Flutter Development, Cybersecurity & Fintech UI/UX. Institutional-grade mobile apps, penetration testing, and trading dashboard design by Rexer Studio.',
  keywords: 'Flutter Development, Cybersecurity, Fintech UI/UX, Penetration Testing, Mobile App Development, Trading Dashboard, Rexer Studio',
  openGraph: {
    title: 'Rexer Studio | Building Secure Digital Empires',
    description: 'Expert Flutter Development, Cybersecurity & Fintech UI/UX.',
    type: 'website',
    siteName: 'Rexer Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rexer Studio | Building Secure Digital Empires',
    description: 'Expert Flutter Development, Cybersecurity & Fintech UI/UX.',
    creator: '@RexerLK',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
