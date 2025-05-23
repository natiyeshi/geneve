"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  Package,
  FileText,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    title: "Dashboard",
    href: "/admin/(authorized)",
    icon: LayoutDashboard,
  },
  {
    title: "Packages",
    href: "/admin/(authorized)/packages",
    icon: Package,
  },
  {
    title: "Blog Posts",
    href: "/admin/(authorized)/blog",
    icon: FileText,
  },
  {
    title: "Messages",
    href: "/admin/(authorized)/messages",
    icon: MessageSquare,
  },
  {
    title: "Analytics",
    href: "/admin/(authorized)/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/admin/(authorized)/settings",
    icon: Settings,
  },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/admin/(authorized)" className="text-xl font-serif text-[#09163A]">
                Geneve Admin
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? "border-[#09163A] text-[#09163A]"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-gray-500 hover:text-gray-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
