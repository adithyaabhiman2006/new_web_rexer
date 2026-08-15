# REXER Studio — Full-Stack Website

> **Building Secure Digital Empires** — Expert Flutter Development, Cybersecurity & Fintech UI/UX

A premium full-stack website built with Next.js, Supabase, and Stripe. Features a stunning dark-mode design with glassmorphism, particle backgrounds, and smooth animations.

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14+ (App Router) |
| **Styling** | Vanilla CSS with CSS Variables |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Backend** | Supabase (Auth, PostgreSQL, Storage) |
| **Payments** | Stripe (Checkout Sessions + Webhooks) |
| **Deployment** | Vercel |

## 📄 Pages

### Public
- `/` — Home (Hero + About + Services + Portfolio + Testimonials + Stats + CTA)
- `/portfolio` — Project portfolio with category filters
- `/blog` — Blog listing with articles
- `/blog/[slug]` — Individual blog posts
- `/pricing` — 3-tier pricing (Starter / Professional / Enterprise)
- `/about` — Team, tech stack, certifications
- `/contact` — Contact form

### Authenticated
- `/auth` — Login / Signup
- `/dashboard` — Client dashboard
- `/admin` — Blog CMS, messages, project management

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/adithyaabhiman2006/new_web_rexer.git
cd new_web_rexer

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# Edit .env.local with your Supabase and Stripe credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
| `NEXT_PUBLIC_SITE_URL` | Your site URL (for redirects) |

## 🗄️ Database Setup

1. Create a [Supabase](https://supabase.com/) project
2. Go to SQL Editor
3. Run the SQL from `supabase/schema.sql`
4. Copy your project URL and anon key to `.env.local`

## 💳 Stripe Setup

1. Create a [Stripe](https://stripe.com/) account
2. Get your API keys from the Stripe dashboard
3. Create products/prices for each tier
4. Update the price IDs in `src/app/api/checkout/route.js`
5. Set up a webhook endpoint pointing to `/api/webhooks/stripe`

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repo in [Vercel](https://vercel.com/)
3. Add environment variables
4. Deploy!

### Netlify
1. Push code to GitHub
2. Import in [Netlify](https://netlify.com/)
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── about/page.js      # About page
│   ├── admin/page.js      # Admin panel
│   ├── auth/page.js       # Login/Signup
│   ├── blog/
│   │   ├── page.js        # Blog listing
│   │   └── [slug]/page.js # Blog post
│   ├── contact/page.js    # Contact form
│   ├── dashboard/page.js  # Client dashboard
│   ├── portfolio/page.js  # Portfolio
│   ├── pricing/page.js    # Pricing tiers
│   ├── api/
│   │   ├── contact/       # Contact form handler
│   │   ├── checkout/      # Stripe checkout
│   │   └── webhooks/      # Stripe webhooks
│   └── globals.css        # Design system
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Stats.jsx
│   │   └── CTA.jsx
│   └── ui/
│       ├── ParticleBackground.jsx
│       └── AnimatedCounter.jsx
├── lib/
│   ├── supabase.js
│   └── blog.js
└── middleware.js
```

## 👤 About

Built by **Rexer Studio** (@RexerLK)

- 🔴 [YouTube](https://youtube.com/@RexerLK) — 60K+ subscribers
- 🐙 [GitHub](https://github.com/RexerLK)
- 🐦 [Twitter](https://twitter.com/RexerLK)
- 📧 [Email](mailto:rexerlk@gmail.com)

## 📜 License

This project is proprietary. © 2025 Rexer Studio. All rights reserved.