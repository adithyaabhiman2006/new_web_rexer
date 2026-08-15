// Placeholder blog utilities — works with static data until Supabase is connected
const BLOG_POSTS = [
  {
    id: '1',
    title: 'Why AES-256 Encryption is Non-Negotiable for Fintech Apps',
    slug: 'aes-256-encryption-fintech',
    excerpt: 'Discover why institutional-grade encryption is the foundation of every secure financial application and how to implement it in Flutter.',
    content: `
## The Gold Standard of Encryption

In the world of financial technology, data security isn't just a feature — it's the foundation. AES-256 encryption has become the de facto standard for protecting sensitive financial data, and for good reason.

### What Makes AES-256 Special?

AES (Advanced Encryption Standard) with a 256-bit key length provides one of the strongest encryption methods available today. The number of possible key combinations is 2^256, making brute-force attacks computationally infeasible.

### Implementation in Flutter

When building fintech applications with Flutter, we integrate AES-256 encryption at multiple layers:

1. **Data at Rest**: All locally stored financial data is encrypted using AES-256-CBC
2. **Data in Transit**: TLS 1.3 with AES-256-GCM cipher suites
3. **Key Management**: Secure key storage using platform-specific keychains

### Best Practices

- Never hardcode encryption keys in your application
- Use platform-specific secure storage (Keychain on iOS, Keystore on Android)
- Implement key rotation policies
- Always use authenticated encryption modes (GCM, CCM)

The investment in proper encryption pays dividends in user trust and regulatory compliance. Every fintech app we build at Rexer Studio starts with security-first architecture.
    `,
    cover_image: null,
    category: 'Security',
    author: 'Rexer Studio',
    published: true,
    created_at: '2025-01-15',
    read_time: '5 min read',
  },
  {
    id: '2',
    title: 'Building Dark-Mode-First Trading Dashboards with Flutter Web',
    slug: 'dark-mode-trading-dashboards',
    excerpt: 'How we design data-dense, institutional-grade trading interfaces that prioritize speed, clarity, and user trust.',
    content: `
## Why Dark Mode First?

Professional traders spend 8-14 hours daily staring at screens. Dark mode isn't a preference — it's a necessity for eye health and focus in high-stakes trading environments.

### Design Principles for Trading UX

Our approach to fintech dashboard design follows four core principles:

1. **Information Density**: Maximum data visibility without overwhelming the user
2. **Hierarchy Through Color**: Using accent colors strategically to highlight critical data points
3. **Speed of Recognition**: Patterns and data should be parseable in milliseconds
4. **Trust Through Consistency**: Every element follows predictable interaction patterns

### The Glassmorphism Advantage

Glassmorphic UI elements create visual depth that helps traders distinguish between different data layers. Frosted glass effects on overlays and modals maintain context while focusing attention.

### Color Psychology in Trading

- **Green (#10B981)**: Positive movements, profits, success states
- **Red (#EF4444)**: Negative movements, losses, alerts
- **Blue (#3B82F6)**: Neutral data, navigation, interactive elements
- **Gold (#F5A623)**: Premium features, important notifications

The result is an interface that feels premium, reduces cognitive load, and helps traders make faster decisions.
    `,
    cover_image: null,
    category: 'Design',
    author: 'Rexer Studio',
    published: true,
    created_at: '2025-02-20',
    read_time: '7 min read',
  },
  {
    id: '3',
    title: 'OWASP Top 10: A Practical Guide to Mobile App Penetration Testing',
    slug: 'owasp-mobile-pentesting',
    excerpt: 'A hands-on walkthrough of the most critical mobile security vulnerabilities and how our pentesting methodology addresses each one.',
    content: `
## Mobile Security is Different

Mobile applications face unique security challenges that traditional web security testing doesn't fully address. The OWASP Mobile Top 10 provides a framework for systematic security assessment.

### Our Pentesting Methodology

At Rexer Studio, we follow a structured approach to mobile penetration testing:

#### Phase 1: Reconnaissance
- Application mapping and architecture analysis
- API endpoint discovery
- Certificate pinning assessment

#### Phase 2: Static Analysis
- Source code review (decompiled if necessary)
- Hardcoded credentials and API keys
- Insecure data storage patterns

#### Phase 3: Dynamic Analysis
- Runtime manipulation using Frida
- Traffic interception with Burp Suite
- Authentication bypass attempts

#### Phase 4: Reporting
- CVE-mapped vulnerability documentation
- Risk scoring using CVSS v3.1
- Remediation roadmaps with priority ordering

### Key Takeaways

Every mobile app should undergo penetration testing before production release. The cost of a security breach far exceeds the investment in proactive testing.
    `,
    cover_image: null,
    category: 'Security',
    author: 'Rexer Studio',
    published: true,
    created_at: '2025-03-10',
    read_time: '8 min read',
  },
]

export function getAllPosts() {
  return BLOG_POSTS.filter(p => p.published).sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  )
}

export function getPostBySlug(slug) {
  return BLOG_POSTS.find(p => p.slug === slug) || null
}

export function getPostsByCategory(category) {
  return getAllPosts().filter(p => p.category === category)
}

export function getAllCategories() {
  const cats = new Set(BLOG_POSTS.map(p => p.category))
  return Array.from(cats)
}
