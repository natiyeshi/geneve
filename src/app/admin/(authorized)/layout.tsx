"use server";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options as authOptions } from "@/app/api/auth/[...nextauth]/options";
import AdminNav from "./_components/AdminNav";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/register");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-[#09163A]">
              <div className="flex items-center flex-shrink-0 px-4">
                <h1 className="text-xl font-serif text-white">Geneve Admin</h1>
              </div>
              <AdminNav />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1 w-0 overflow-hidden">
          <main className="relative flex-1 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
