import { NextResponse } from 'next/server'

export function proxy(request) {
  return NextResponse.redirect(new URL('/login', request.url))
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: ['/allanimals/:path*', "/profile"]
}