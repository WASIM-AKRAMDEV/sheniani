import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';
// import { NextRequest, NextResponse } from 'next/server';
// import { verifyAccessToken } from './lib/auth';


// // Define which routes are protected (require authentication)
// const protectedRoutes = ['/dashboard'];

// // Define which routes are auth routes (only for unauthenticated users)
// const authRoutes = ['/login', '/register'];

// export async function middleware(request: NextRequest) {
//   console.log('middleware', request.nextUrl.pathname);
//   // Get the path of the request
//   const path = request.nextUrl.pathname;
  
//   // Get the token from cookies
//   const accessToken = request.cookies.get('accessToken')?.value;
  
//   // Verify the token
//   const isAuthenticated = accessToken ? 
//     !!(await verifyAccessToken(accessToken)) : false;

//   // If trying to access a protected route without authentication
//   if (protectedRoutes.some(route => path.startsWith(route)) && !isAuthenticated) {
//     const url = new URL('/login', request.url);
//     url.searchParams.set('from', path);
//     return NextResponse.redirect(url);
//   }

//   // If trying to access an auth route while authenticated
//   if (authRoutes.includes(path) && isAuthenticated) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }

//   return NextResponse.next();
// }

export default createMiddleware(routing);

export const config = {
  // Match all request paths except for the ones starting with:
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|icons).*)',
  ],
};