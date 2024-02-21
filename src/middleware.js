import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

const protectedRoutes = ["/dash", "/form"]
const userRoutes = ["/"]

export async function middleware(req) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  if (!session && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteUrl = new URL("/", req.nextUrl.origin)
    return NextResponse.redirect(absoluteUrl.toString())
  }
  if (session && userRoutes.includes(req.nextUrl.pathname)) {
    const absoluteUrl = new URL("/form", req.nextUrl.origin)
    return NextResponse.redirect(absoluteUrl.toString())
  }
}
