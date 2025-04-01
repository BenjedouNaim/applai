"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase-client";

export default function ConfirmPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState("Verifying...");

  useEffect(() => {
    const confirmEmail = async () => {
      const tokenHash = searchParams.get("token_hash");
      const type = searchParams.get("type");

      console.log("Token Hash:", tokenHash); // Debugging log
      console.log("Type:", type); // Debugging log

      if (!tokenHash) {
        console.error("Missing token_hash in the URL.");
        setStatus("Invalid confirmation link: Missing token.");
        return;
      }

      // Allow multiple valid types (e.g., "signup", "recovery", etc.)
      const validTypes = ["signup", "recovery"];
      if (!type || !validTypes.includes(type)) {
        console.error("Invalid or missing type in the URL.");
        setStatus("Invalid confirmation link: Incorrect type.");
        return;
      }

      const email = searchParams.get("email");

      if (!email) {
        console.error("Missing email in the URL.");
        setStatus("Invalid confirmation link: Missing email.");
        return;
      }

      const { error } = await supabase.auth.verifyOtp({
        type: type as "signup" | "recovery",
        token: tokenHash,
        email,
      });

      if (error) {
        console.error("Email confirmation error:", error);
        setStatus("Email confirmation failed. Please try again.");
      } else {
        setStatus("Email confirmed successfully! Redirecting...");
        setTimeout(() => router.push("/login"), 3000);
      }
    };

    confirmEmail();
  }, [router, searchParams]);

  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-transparent">
      <div className="text-center">
        <h1 className="text-xl font-semibold">{status}</h1>
      </div>
    </section>
  );
}
