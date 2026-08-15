import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { plan, email } = body

    // When Stripe is configured:
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    //
    // const PRICE_MAP = {
    //   starter: 'price_xxx',
    //   professional: 'price_xxx',
    //   enterprise: null, // custom quote
    // }
    //
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ['card'],
    //   line_items: [{
    //     price: PRICE_MAP[plan],
    //     quantity: 1,
    //   }],
    //   mode: 'payment',
    //   success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
    //   customer_email: email,
    //   metadata: { plan },
    // })
    //
    // return NextResponse.json({ url: session.url })

    // Placeholder response
    console.log('🛒 Checkout requested:', { plan, email, timestamp: new Date().toISOString() })

    return NextResponse.json({
      message: 'Stripe checkout will be available once STRIPE_SECRET_KEY is configured in .env.local',
      plan,
    })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session.' },
      { status: 500 }
    )
  }
}
