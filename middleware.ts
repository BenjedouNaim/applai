import { NextResponse } from "next/server";
import { supabase } from "./utils/supabase-client";

export async function middleware(req) {
  const token = req.cookies.get("sb-access-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const { data: user, error } = await supabase.auth.getUser(token);

  if (error || !user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Protect all dashboard routes
};
