import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrenUser } from "./services/authService";

type Role = keyof typeof roleBaseRoutes;

const Authroutes = ["/login", "/registration"];

const roleBaseRoutes = {
  user: ["/cart", "/checkout", "/orders"],
  admin: [/^\/admin/]
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = await getCurrenUser();

  if (!user && Authroutes.includes(pathname)) {
    return NextResponse.next();
  }

  if (!user && !Authroutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (user?.role && roleBaseRoutes[user.role as Role]) {
    const allowedRoutes = roleBaseRoutes[user.role as Role];
    if (allowedRoutes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// Configure matching paths for middleware
export const config = {
  matcher: [
    "/admin",
    "/admin/:path*",
    "/login",
    "/cart",
    "/checkout",
    "/orders"
  ]
};
