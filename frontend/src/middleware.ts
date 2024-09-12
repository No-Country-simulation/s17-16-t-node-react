import { NextResponse, type NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  exp: number;
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const url = new URL(request.url);

  if (token) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const expirationDate = new Date(decoded.exp * 1000);

      if (expirationDate < new Date()) {
        return NextResponse.redirect(new URL("/login", request.url));
      }

      if (url.pathname === "/login" || url.pathname === "/register") {
        return NextResponse.redirect(new URL("/d", request.url));
      }

      return NextResponse.next();
    } catch (error) {
      console.error("Error decoding token", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (url.pathname === "/login" || url.pathname === "/register") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/d/:path*", "/dashboard/:path*", "/login", "/register"],
};
