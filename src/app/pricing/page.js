'use client'
import { motion } from 'framer-motion'
import { Check, Zap, Crown, Building2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import BouncyAccordion from '@/components/ui/BouncyAccordion'
import { AwardGlass, CalendarGlass, CartGlass, CodeEditorGlass } from '@/components/ui/GlassIcons'

const PLANS = [
  {
    id: 'starter',
    tier: 'Starter',
    price: '$2,499',
    period: '/project',
    desc: 'Perfect for startups needing a secure MVP.',
    features: [
      'Single platform (iOS or Android)',
      'Firebase backend setup',
      'Basic security audit',
      'UI/UX design (up to 10 screens)',
      '30-day post-launch support',
      'Source code ownership',
    ],
    icon: Zap,
    featured: false,
  },
  {
    id: 'professional',
    tier: 'Professional',
    price: '$7,999',
    period: '/project',
    desc: 'Full-stack development with institutional-grade security.',
    features: [
      'Cross-platform (iOS + Android + Web)',
      'Full penetration testing & CVE report',
      'AES-256 encryption implementation',
      'Custom API development',
      'Advanced UI/UX (unlimited screens)',
      'CI/CD pipeline setup',
      '90-day post-launch support',
      'Monthly security updates',
    ],
    icon: Crown,
    featured: true,
  },
  {
    id: 'enterprise',
    tier: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Tailored solutions for institutions and enterprises.',
    features: [
      'Everything in Professional',
      'Dedicated security team',
      'Compliance (SOC2, GDPR, PCI-DSS)',
      'White-label solutions',
      '24/7 monitoring & incident response',
      'Custom SLA & priority support',
      'On-premise deployment option',
      'Quarterly security audits',
    ],
    icon: Building2,
    featured: false,
  },
]

export default function PricingPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <motion.div
            className="section-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Crown size={12} /> Pricing
          </motion.div>
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transparent <span className="text-gradient-blue">Pricing</span>
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Institutional-grade quality at competitive rates.
            Every project includes security-first architecture.
          </motion.p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="pricing-grid">
            {PLANS.map((plan, i) => {
              const Icon = plan.icon
              return (
                <motion.div
                  key={plan.id}
                  className={`glass-card pricing-card ${plan.featured ? 'featured' : ''}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  id={`pricing-${plan.id}`}
                >
                  <div className="pricing-tier">{plan.tier}</div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: plan.featured ? 'var(--gradient-blue)' : 'var(--clr-blue-dim)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--space-lg)',
                    color: plan.featured ? 'white' : 'var(--clr-blue)',
                  }}>
                    <Icon size={22} />
                  </div>
                  <div className="pricing-price">
                    {plan.price}<span>{plan.period}</span>
                  </div>
                  <p className="pricing-desc">{plan.desc}</p>

                  <div className="pricing-features">
                    {plan.features.map(feature => (
                      <div key={feature} className="pricing-feature">
                        <Check size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
                    style={{ width: '100%', justifyContent: 'center' }}
                    id={`pricing-cta-${plan.id}`}
                  >
                    {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Bouncy Accordion Pricing FAQ Section */}
          <div style={{ marginTop: '5rem' }}>
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-eyebrow">
                <Crown size={12} /> Commission FAQ & Protocols
              </div>
              <h2 className="section-title">
                Frequently Asked <span className="text-gradient-cyan">Questions</span>
              </h2>
              <p className="section-subtitle">
                Everything you need to know about our institutional commission process,
                security-first SLA, and codebase ownership.
              </p>
            </motion.div>

            <BouncyAccordion
              items={[
                {
                  id: 'pricing-faq-payment',
                  title: 'What payment terms & milestones do you support?',
                  subtitle: '50/50 escrow split with milestone verification',
                  icon: CartGlass,
                  accent: 'var(--cyan-bright)',
                  badge: 'BILLING',
                  desc: 'Standard engagements are structured as 50% deposit upon kickoff and 50% upon final penetration testing verification and source repository handover. Enterprise retainer agreements are invoiced monthly via Stripe.',
                  specs: [
                    'Stripe invoicing (Credit Card, ACH, SEPA)',
                    'Multi-sig crypto settlement available upon request',
                    'Cryptographic receipt issued for every transaction',
                  ],
                  actionText: 'Commission a Tier',
                  actionHref: '/contact',
                },
                {
                  id: 'pricing-faq-security',
                  title: 'Is cybersecurity auditing included in all tiers?',
                  subtitle: 'Zero-CVE guarantee on every production release',
                  icon: AwardGlass,
                  accent: 'var(--amber-gold)',
                  badge: 'SECURITY',
                  desc: 'Yes. Even our Starter tier includes an automated AST security audit. The Professional and Enterprise tiers include full dynamic fuzzing, binary instrumentation, and CVSS v3.1 certified remediation.',
                  specs: [
                    'AST linting with CodeRabbit automated checks',
                    'OWASP MASVS mobile security compliance',
                    'Automated dependency supply-chain screening',
                  ],
                  actionText: 'Review Audit Standards',
                  actionHref: '/about',
                },
                {
                  id: 'pricing-faq-maintenance',
                  title: 'What post-launch support and SLAs are included?',
                  subtitle: '30 to 90 days guaranteed bug-fix and security patching',
                  icon: CalendarGlass,
                  accent: 'var(--emerald-neon)',
                  badge: 'SUPPORT',
                  desc: 'Every tier includes a warranty period covering performance optimizations, security patches, OS update compatibility (iOS/Android major versions), and direct engineer Telegram/Slack access.',
                  specs: [
                    'Sub-4 hour response time for critical incidents',
                    'Automated uptime & error monitoring',
                    'Dedicated Slack/Telegram channel with lead architect',
                  ],
                  actionText: 'Talk to Engineering',
                  actionHref: '/contact',
                },
                {
                  id: 'pricing-faq-source',
                  title: 'Do we own 100% of the Flutter & Backend code?',
                  subtitle: 'Full unencumbered intellectual property assignment',
                  icon: CodeEditorGlass,
                  accent: 'var(--blue-primary)',
                  badge: 'IP RIGHTS',
                  desc: 'Absolutely. All source repositories, design tokens, Figma assets, and CI/CD pipelines are owned completely by you with zero royalties or vendor lock-in.',
                  specs: [
                    'Direct GitHub organization repository transfer',
                    'Signed Intellectual Property (IP) assignment contract',
                    'Clean modular codebase ready for internal scaling',
                  ],
                  actionText: 'Commission Your Project',
                  actionHref: '/contact',
                },
              ]}
              defaultActive={0}
              maxWidth="680px"
            />
          </div>
        </div>
      </section>
    </>
  )
}
