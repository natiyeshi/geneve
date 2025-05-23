"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Package,
  FileText,
  Users,
  MessageSquare,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import Link from "next/link";

interface DashboardStats {
  totalPackages: number;
  totalBlogPosts: number;
  totalMessages: number;
  totalViews: number;
  socialMediaStats: {
    facebook: number;
    instagram: number;
    linkedin: number;
  };
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({
    totalPackages: 0,
    totalBlogPosts: 0,
    totalMessages: 0,
    totalViews: 0,
    socialMediaStats: {
      facebook: 0,
      instagram: 0,
      linkedin: 0,
    },
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  useEffect(() => {
    // TODO: Fetch actual stats from API
    // This is mock data for now
    setStats({
      totalPackages: 12,
      totalBlogPosts: 8,
      totalMessages: 24,
      totalViews: 1234,
      socialMediaStats: {
        facebook: 450,
        instagram: 380,
        linkedin: 404,
      },
    });
  }, []);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const statCards = [
    {
      name: "Total Packages",
      value: stats.totalPackages,
      icon: Package,
      href: "/admin/packages",
      color: "bg-blue-500",
    },
    {
      name: "Blog Posts",
      value: stats.totalBlogPosts,
      icon: FileText,
      href: "/admin/blog",
      color: "bg-green-500",
    },
    {
      name: "Messages",
      value: stats.totalMessages,
      icon: MessageSquare,
      href: "/admin/messages",
      color: "bg-purple-500",
    },
    {
      name: "Total Views",
      value: stats.totalViews,
      icon: Users,
      href: "/admin/analytics",
      color: "bg-yellow-500",
    },
  ];

  const socialMediaCards = [
    {
      name: "Facebook",
      value: stats.socialMediaStats.facebook,
      icon: TrendingUp,
      trend: "+12%",
      color: "bg-blue-600",
    },
    {
      name: "Instagram",
      value: stats.socialMediaStats.instagram,
      icon: TrendingUp,
      trend: "+8%",
      color: "bg-pink-600",
    },
    {
      name: "LinkedIn",
      value: stats.socialMediaStats.linkedin,
      icon: TrendingDown,
      trend: "-3%",
      color: "bg-blue-700",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-serif text-[#09163A]">
          Welcome back, {session?.user?.name}
        </h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <Link
            key={stat.name}
            href={stat.href}
            className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow hover:shadow-md transition-shadow"
          >
            <dt>
              <div className={`absolute rounded-md p-3 ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {stat.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </dd>
          </Link>
        ))}
      </div>

      {/* Social Media Stats */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Social Media Traffic
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {socialMediaCards.map((stat) => (
            <div
              key={stat.name}
              className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow"
            >
              <dt>
                <div className={`absolute rounded-md p-3 ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">
                  {stat.name}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    stat.trend.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.trend}
                </p>
              </dd>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flow-root">
              <ul className="-mb-8">
                <li className="relative pb-8">
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                        <Package className="h-5 w-5 text-white" />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">
                          New package{" "}
                          <span className="font-medium text-gray-900">
                            "Luxury Safari Experience"
                          </span>{" "}
                          was added
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        <time dateTime="2024-03-20">1 hour ago</time>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="relative pb-8">
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                        <FileText className="h-5 w-5 text-white" />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">
                          Blog post{" "}
                          <span className="font-medium text-gray-900">
                            "Top 10 Travel Destinations"
                          </span>{" "}
                          was published
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        <time dateTime="2024-03-19">3 hours ago</time>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center ring-8 ring-white">
                        <MessageSquare className="h-5 w-5 text-white" />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">
                          New message from{" "}
                          <span className="font-medium text-gray-900">
                            John Doe
                          </span>
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        <time dateTime="2024-03-18">5 hours ago</time>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 