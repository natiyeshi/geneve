import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAdmin = token?.role === "admin";
    const isUser = token?.role === "user";

    // Protect admin routes
    if (req.nextUrl.pathname.startsWith("/admin")) {
      if (!isAdmin) {
        return NextResponse.redirect(new URL("/auth/signin?error=AccessDenied", req.url));
      }
    }

    // Allow access to other routes if user is authenticated
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Require authentication for all protected routes
    },
  }
);

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*", // Protect admin API routes
  ],
}; 