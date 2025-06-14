// src/components/referral-tracker.tsx
"use client";

import { useEffect } from "react";

export function ReferralTracker() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get("ref");
    if (ref) {
      fetch(`/api/referral?ref=${ref}`)
        .catch(error => console.error("Error tracking referral:", error));
    }
  }, []);

  return null;
}