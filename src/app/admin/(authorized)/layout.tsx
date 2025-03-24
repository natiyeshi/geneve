"use server";
import AdminLinks, { type Props } from "./_components/AdminLinks";

import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

async function Layout({ children }: any) {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }
  return (
    <div className="w-full shadow flex gap-5 px-4 py-4 h-[100vh] bg-adminMainBg">
      <div className="w-[450px] flex flex-col bg-gray-50 rounded-xl h-full">
        <div className="pt-5 ps-5 text-xl font-black">Dashboard</div>
        <div className="mt-12 w-full flex flex-col gap-1 overflow-auto">
          <AdminLinks />
        </div>
        <div className="mt-auto my-2 text-center text-xs">
          Powered By <span className="font-bold">Dama Solutions</span>
        </div>
      </div>
      <div className="w-full bg-gray-50  rounded-xl h-full shadow overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default Layout;
