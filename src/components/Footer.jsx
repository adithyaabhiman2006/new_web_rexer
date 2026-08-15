'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Youtube, Github, Twitter, Mail } from 'lucide-react'

const FOOTER_LINKS = {
  'Quick Links': [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ],
  'Services': [
    { href: '/pricing', label: 'Mobile App Dev' },
    { href: '/pricing', label: 'Penetration Testing' },
    { href: '/pricing', label: 'Fintech UI/UX' },
    { href: '/contact', label: 'Get a Quote' },
  ],
  'Connect': [
    { href: 'https://youtube.com/@RexerLK', label: 'YouTube', external: true },
    { href: 'https://github.com/RexerLK', label: 'GitHub', external: true },
    { href: 'https://twitter.com/RexerLK', label: 'Twitter', external: true },
    { href: 'mailto:rexerlk@gmail.com', label: 'Email', external: true },
  ],
}

const SOCIALS = [
  { icon: Youtube, href: 'https://youtube.com/@RexerLK', label: 'YouTube' },
  { icon: Github, href: 'https://github.com/RexerLK', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/RexerLK', label: 'Twitter' },
  { icon: Mail, href: 'mailto:rexerlk@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer id="site-footer">
      <div className="section-divider" />
      <div className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="footer-brand" id="footer-brand">
                REX<span>ER</span>
              </div>
              <p className="footer-tagline">
                Building Secure Digital Empires. Expert Flutter development,
                cybersecurity, and institutional-grade fintech UI/UX design.
              </p>
              <div className="footer-socials">
                {SOCIALS.map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label={social.label}
                    id={`footer-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Link Columns */}
            {Object.entries(FOOTER_LINKS).map(([title, links], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1, duration: 0.6 }}
              >
                <h4 className="footer-col-title">{title}</h4>
                {links.map(link => (
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link key={link.label} href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  )
                ))}
              </motion.div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom" id="footer-bottom">
            <span>© {new Date().getFullYear()} Rexer Studio. All rights reserved.</span>
            <span>@RexerLK · Building Secure Digital Empires</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
