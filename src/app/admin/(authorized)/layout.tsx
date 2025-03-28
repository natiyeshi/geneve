"use server";
import AdminLinks, { type Props } from "./_components/AdminLinks";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Layout = async ({ children }: any) => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }
  return (
    <div className="w-full shadow flex gap-5 px-4 py-4 h-[100vh] bg-adminMainBg">
      <div className="w-[450px] flex flex-col bg-gray-50 rounded-xl h-full">
        <div className="pt-5 ps-5 text-xl font-black">Dashboards</div>
        <Link
          href={"https://gaber-wear.com/"}
          target="_blank"
          className="pt-2 ps-5 text-sm hover:text-primary duration-150 flex gap-2  items-center"
        >
          <span>gaber-wear.com</span>
          <FaArrowRight className="-rotate-[40deg] text-xs" />
        </Link>
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
};

export default Layout;
