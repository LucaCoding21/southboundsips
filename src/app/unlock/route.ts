import { NextRequest, NextResponse } from "next/server";

const SECRET_KEY = "southbound2026";

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");

  if (key !== SECRET_KEY) {
    return new NextResponse("Invalid key.", { status: 403 });
  }

  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set("sbs_bypass", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  return response;
}
