'use client'
import { motion } from 'framer-motion'
import { Check, Zap, Crown, Building2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

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
        </div>
      </section>
    </>
  )
}
