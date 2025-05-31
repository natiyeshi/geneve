"use client";

import { Suspense } from "react";
import AuthWrapper from "./_components/auth-wrapper";

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
        <AuthWrapper />
      </Suspense>
    </div>
  );
}
