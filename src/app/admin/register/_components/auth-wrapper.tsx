"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import LoginForm from "./login";
import SignupForm from "./signup";

export default function AuthWrapper() {
  const searchParams = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);
  const isSignup = searchParams.get("mode") === "signup";

  useEffect(() => {
    // Show success message if user just registered
    if (searchParams.get("registered") === "true") {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <>
      {showSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded shadow-lg">
            Account created successfully! Please sign in.
          </div>
        </div>
      )}
      {isSignup ? <SignupForm /> : <LoginForm />}
    </>
  );
} 