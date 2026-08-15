import './globals.css'
import TelemetryBar from '@/components/ui/TelemetryBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'REXER Studio | Institutional Cybersecurity & Fintech OS',
  description: 'Expert Flutter Development, Penetration Testing & Fintech Trading Dashboards. Institutional architecture by @RexerLK.',
  keywords: 'Flutter Architecture, Cybersecurity, Penetration Testing, OWASP Top 10, Fintech UI/UX, Trading Dashboards, Rexer Studio, RexerLK',
  openGraph: {
    title: 'REXER Studio | Building Fortified Digital Empires',
    description: 'Expert Flutter Development, Cybersecurity & Fintech UI/UX.',
    type: 'website',
    siteName: 'REXER Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REXER Studio | Building Fortified Digital Empires',
    description: 'Expert Flutter Development, Cybersecurity & Fintech UI/UX.',
    creator: '@RexerLK',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TelemetryBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
