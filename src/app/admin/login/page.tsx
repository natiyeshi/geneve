"use client";

export const dynamic = 'force-dynamic';

import { useRouter } from "next/navigation";
import LoginForm from "../register/_components/login";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <LoginForm />
    </div>
  );
} 