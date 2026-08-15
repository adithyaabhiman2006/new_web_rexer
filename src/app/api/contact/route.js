import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // When Supabase is connected, save to the messages table:
    // const { data, error } = await supabase
    //   .from('messages')
    //   .insert([{ name, email, service, message }])

    // For now, log the message (works without Supabase)
    console.log('📩 New contact message:', { name, email, service, message, timestamp: new Date().toISOString() })

    return NextResponse.json(
      { success: true, message: 'Message received successfully.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}
