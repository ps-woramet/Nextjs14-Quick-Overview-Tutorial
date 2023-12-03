import { NextResponse } from 'next/server'
 
const middleware1 = async (request) => {
    const url = request.url
    console.log('middleware', {url});
    return NextResponse.next()
}

const middleware2 = async (request) => {
    const pathname = request.nextUrl
    console.log('middleware', {pathname});
    return NextResponse.next()
}

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    await middleware1(request)
    await middleware2(request)
  
    // return NextResponse.redirect(new URL('/home', request.url))
    return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
}