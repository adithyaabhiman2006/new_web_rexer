import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Protected routes that require authentication
  const protectedRoutes = ['/dashboard', '/admin']
  const isProtected = protectedRoutes.some(route => pathname.startsWith(route))

  if (isProtected) {
    // When Supabase is connected, check for auth token:
    // const supabaseToken = request.cookies.get('sb-access-token')
    // if (!supabaseToken) {
    //   return NextResponse.redirect(new URL('/auth', request.url))
    // }

    // For now, allow access (remove this when Supabase auth is configured)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
}
