"use client";
import Image from "next/image";
import LoginForm from "./_components/signup";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/api/auth/signin?callbackUrl=/admin/register");
  //   },
  // });
  return (
    <div className="">
      {/* HI {session?.user?.email} */}
      <LoginForm />
    </div>
  );
}
