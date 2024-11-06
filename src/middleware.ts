import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrenUser } from "./services/authService";

type role = keyof typeof roleBaseRoutes;

const Authroutes = ["/login", "/registration"];

const roleBaseRoutes = {
  user: ["/cart", "/checkout", "/orders"],
  admin: [/^\/admin/]
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = await getCurrenUser();

  if (!user) {
    if (Authroutes.includes(pathname)) {
      return NextResponse.next();
    }
  }

  if (user?.role && roleBaseRoutes[user?.role as role]) {
    const route = roleBaseRoutes[user?.role as role];
    if (route.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/admin",
    "/admin/:page*",
    "/admin/:path*",
    "/login",
    "/cart",
    "/checkout",
    "/orders"
  ]
};
