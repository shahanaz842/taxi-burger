import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
    const {pathname} = request.Url;
    if(!pathname.startsWith("/api/feedback")){
        return NextResponse.json({
            status: 404,
        })
    }
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: '/api/:path*',
}