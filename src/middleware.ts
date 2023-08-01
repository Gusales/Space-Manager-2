import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('sm-token')?.value

  if (!token) {
    return NextResponse.redirect('https://space-manager-2.vercel.app/')
  }
}

export const config = {
  matcher: '/pages/:path*',
}
