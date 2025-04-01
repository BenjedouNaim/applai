"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { supabase } from "@/utils/supabase-client";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_OUT") {
          document.cookie =
            "sb-access-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;";
        } else if (session) {
          document.cookie = `sb-access-token=${session.access_token}; Path=/;`;
        }
      }
    );

    return () => subscription?.unsubscribe();
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
