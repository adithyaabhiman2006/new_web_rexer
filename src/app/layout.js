import './globals.css'
import TelemetryBar from '@/components/ui/TelemetryBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CyberGridBackdrop from '@/components/ui/CyberGridBackdrop'
import CyberDock from '@/components/ui/CyberDock'
import ClickSpark from '@/components/ui/ClickSpark'

export const metadata = {
  title: 'REXER Studio | Institutional Cybersecurity & Fintech OS',
  description: 'Expert Flutter Development, Penetration Testing & Fintech Trading Dashboards. Institutional architecture by @RexerLK. CEH Certified. AES-256-GCM encrypted.',
  keywords: 'Flutter Architecture, Cybersecurity, Penetration Testing, OWASP Top 10, Fintech UI/UX, Trading Dashboards, Rexer Studio, RexerLK, Mobile Security, CEH',
  metadataBase: new URL('https://adithyaabhiman2006.github.io'),
  openGraph: {
    title: 'REXER Studio | Building Fortified Digital Empires',
    description: 'Expert Flutter Development, Cybersecurity & Fintech UI/UX. Institutional-grade architecture.',
    type: 'website',
    siteName: 'REXER Studio',
    url: 'https://adithyaabhiman2006.github.io/new_web_rexer/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REXER Studio | Building Fortified Digital Empires',
    description: 'Expert Flutter Development, Cybersecurity & Fintech UI/UX. Institutional-grade architecture.',
    creator: '@RexerLK',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'REXER Studio',
              url: 'https://adithyaabhiman2006.github.io/new_web_rexer/',
              description: 'Institutional-grade Flutter architecture, offensive penetration testing (OWASP), and high-density fintech UI/UX design.',
              founder: {
                '@type': 'Person',
                name: 'RexerLK',
                url: 'https://youtube.com/@RexerLK',
              },
              serviceType: ['Mobile App Development', 'Penetration Testing', 'Fintech UI/UX Design'],
              areaServed: 'Worldwide',
            }),
          }}
        />
      </head>
      <body>
        <ClickSpark sparkColor="#F59E0B" sparkCount={8}>
          <CyberGridBackdrop />
          <TelemetryBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CyberDock />
        </ClickSpark>
      </body>
    </html>
  )
}
