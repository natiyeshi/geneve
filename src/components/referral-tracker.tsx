"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

export function ReferralTracker() {
  const searchParams = useSearchParams();
  const ref = searchParams?.get("ref");
  const hasTracked = useRef(false); // <-- track if already sent

  useEffect(() => {
    if (ref && !hasTracked.current) {
      hasTracked.current = true; // mark as tracked before sending
      fetch(`/api/referral?ref=${ref}`)
        .then(() => console.log("Successfully tracked referral"))
        .catch((error) => console.error("Error tracking referral:", error));
    }
  }, [ref]);

  return null;
}
// This component does not render anything, it just tracks the referral