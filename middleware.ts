import { auth } from "@/auth";

export default auth((req) => {
  const { auth } = req;
  const { pathname } = req.nextUrl;

  // List of public pages that don't require authentication
  const publicPages = [
    "/",
    "/login",
    "/signup",
    "/verify-email",
    "/forgot-password",
    "/reset-password",
    "/opengraph-image",
  ];
  const isPublicPage =
    publicPages.includes(pathname) ||
    pathname.startsWith("/blog/") ||
    pathname.startsWith("/jobs/");

  // If it's not a public page and user isn't authenticated
  if (!auth && !isPublicPage) {
    return Response.redirect(new URL("/login", req.url));
  }
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/student-dashboard",
    "/company-dashboard/:path*",
    "/student-dashboard/:path*",
  ],
};
