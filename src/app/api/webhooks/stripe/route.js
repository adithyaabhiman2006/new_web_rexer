import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.text()

    // When Stripe is configured:
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    // const sig = request.headers.get('stripe-signature')
    //
    // const event = stripe.webhooks.constructEvent(
    //   body,
    //   sig,
    //   process.env.STRIPE_WEBHOOK_SECRET
    // )
    //
    // switch (event.type) {
    //   case 'checkout.session.completed': {
    //     const session = event.data.object
    //     console.log('✅ Payment completed:', session.id)
    //     // Update Supabase with order data
    //     // await supabase.from('orders').insert({
    //     //   stripe_session_id: session.id,
    //     //   user_id: session.metadata.user_id,
    //     //   plan: session.metadata.plan,
    //     //   amount: session.amount_total,
    //     //   status: 'completed',
    //     // })
    //     break
    //   }
    //   default:
    //     console.log(`Unhandled event: ${event.type}`)
    // }

    console.log('🔔 Webhook received:', body.substring(0, 100))

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed.' },
      { status: 400 }
    )
  }
}

// Stripe webhooks need raw body
export const config = {
  api: {
    bodyParser: false,
  },
}
