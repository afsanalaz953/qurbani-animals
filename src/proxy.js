 import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
const { pathname } = request.nextUrl;

// Define protected routes
  const isProfilePage = pathname === "/profile";
  const isAnimalsPage = pathname.startsWith("/animals/");
  
  // Check if the current route needs protection
  const needsAuth = isProfilePage || isAnimalsPage;
   if (needsAuth) {
    const sessionCookie = 
      request.cookies.get("better-auth.session_token") ||
      request.cookies.get("__Secure-better-auth.session_token");
    
    const isLoggedIn = !!sessionCookie;
    
    // If NOT logged in, redirect to login page
    if (!isLoggedIn) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("from", "/profile");
      return NextResponse.redirect(loginUrl);
    }
  }
  
  // Allow access to all other pages
  return NextResponse.next();
}


//   return NextResponse.redirect(new URL('/login', request.url))
// }
  


 
 export const config = {
   matcher: ['/animals/:id', '/profile'], 
 }




