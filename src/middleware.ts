import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = [
  "/countdown",
  "/unlock",
  "/api",
  "/_next",
  "/favicon.ico",
  "/southbound",
  "/southboundsips",
  "/images",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static assets and public paths through
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Allow bypassed users through
  const bypass = request.cookies.get("sbs_bypass");
  if (bypass?.value === "true") {
    return NextResponse.next();
  }

  // Redirect everyone else to countdown
  const url = request.nextUrl.clone();
  url.pathname = "/countdown";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
