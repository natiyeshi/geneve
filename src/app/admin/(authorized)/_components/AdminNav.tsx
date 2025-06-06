"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Package, 
  Users, 
  Newspaper, 
  Star,
  LogOut
} from "lucide-react";
import { signOut } from "next-auth/react";

const navigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: Star,
  },
  {
    name: "Packages",
    href: "/admin/packages",
    icon: Package,
  },
  {
    name: "Testimonials",
    href: "/admin/testimonials",
    icon: Users,
  },
  {
    name: "Blog",
    href: "/admin/blog",
    icon: Newspaper,
  },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="mt-5 flex-1 px-2 space-y-1">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
              isActive
                ? "bg-[#EE1D46] text-white"
                : "text-gray-300 hover:bg-[#EE1D46]/10 hover:text-white"
            }`}
          >
            <item.icon
              className={`mr-3 h-5 w-5 ${
                isActive ? "text-white" : "text-gray-400 group-hover:text-white"
              }`}
            />
            {item.name}
          </Link>
        );
      })}

      {/* Logout button */}
      <button
        onClick={() => signOut({ callbackUrl: "/admin/register" })}
        className="w-full mt-8 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-[#EE1D46]/10 hover:text-white"
      >
        <LogOut className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
        Logout
      </button>
    </nav>
  );
}
