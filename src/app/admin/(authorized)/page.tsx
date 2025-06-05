"use client";

export const dynamic = 'force-dynamic';

import { useEffect, useState } from "react";
import { Package, Users, Newspaper, Share2 } from "lucide-react";
import Link from "next/link";
import AdminNav from "./_components/AdminNav";
import { FcGoogle } from "react-icons/fc";
import { SiGoogleanalytics } from "react-icons/si";
import * as Toast from '@radix-ui/react-toast';
import { Cross2Icon } from '@radix-ui/react-icons';

interface DashboardStats {
  packages: number;
  testimonials: number;
  blogPosts: number;
  referrals: {
    source: string;
    count: number;
  }[];
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    packages: 0,
    testimonials: 0,
    blogPosts: 0,
    referrals: [],
  });
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showError = (message: string) => {
    setErrorMessage(message);
    setOpen(true);
  };

  useEffect(() => {
    // Fetch dashboard statistics
    const fetchStats = async () => {
      try {
        const [packagesRes, testimonialsRes, blogRes, referralsRes] = await Promise.all([
          fetch('/api/packages/count'),
          fetch('/api/testimonial'),
          fetch('/api/blog'),
          fetch('/api/referral', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({}),
          })
        ]);

        if (!packagesRes.ok || !testimonialsRes.ok || !blogRes.ok || !referralsRes.ok) {
          throw new Error('Failed to fetch dashboard statistics');
        }

        const [packagesCount, testimonials, blog, referrals] = await Promise.all([
          packagesRes.json(),
          testimonialsRes.json(),
          blogRes.json(),
          referralsRes.json()
        ]);

        setStats({
          packages: packagesCount.count || 0,
          testimonials: testimonials.length || 0,
          blogPosts: blog.length || 0,
          referrals: referrals.stats || [],
        });
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        showError(error instanceof Error ? error.message : 'Failed to fetch dashboard statistics');
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      name: 'Travel Packages',
      value: stats.packages,
      icon: Package,
      href: '/admin/packages',
      color: 'bg-[#EE1D46]',
    },
    {
      name: 'Testimonials',
      value: stats.testimonials,
      icon: Users,
      href: '/admin/testimonials',
      color: 'bg-[#09163A]',
    },
    {
      name: 'Blog Posts',
      value: stats.blogPosts,
      icon: Newspaper,
      href: '/admin/blog',
      color: 'bg-[#09163A]',
    },
  ];

  return (
    <Toast.Provider swipeDirection="right">
    <div className="w-full  relative px-6 pt-2 h-full overflow-auto">
        {/* <Section1 />
      <div className="flex flex-col mt-8">
        <div className="text-2xl font-black">Recent status</div>
        <div className=" text-adminText mt-1">
          Follow current status of your site
        </div>
        </div> */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl font-serif font-light text-[#09163A]">Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">
            Welcome to your Geneve Getaway admin dashboard
          </p>
        </div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {statCards.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow hover:shadow-lg transition-shadow duration-200"
              >
                <dt>
                  <div className={`absolute rounded-md p-3 ${item.color}`}>
                    <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500">
                    {item.name}
                  </p>
                </dt>
                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                  <p className="text-2xl font-semibold text-[#09163A]">
                    {item.value}
                  </p>
                </dd>
              </Link>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-[#09163A]">Quick Actions</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/admin/packages/new"
                className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-[#EE1D46] hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Package className="h-6 w-6 text-[#EE1D46]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-[#09163A]">
                      Create New Package
                    </h3>
                    <p className="text-sm text-gray-500">
                      Add a new travel package to your offerings
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/admin/blog/new"
                className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-[#EE1D46] hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Newspaper className="h-6 w-6 text-[#EE1D46]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-[#09163A]">
                      Write New Blog Post
                    </h3>
                    <p className="text-sm text-gray-500">
                      Create a new blog post for your website
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/admin/testimonials/new"
                className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-[#EE1D46] hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-[#EE1D46]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-[#09163A]">
                      Add Testimonial
                    </h3>
                    <p className="text-sm text-gray-500">
                      Add a new customer testimonial
                    </p>
                  </div>
                </div>
              </Link>
              </div>
            </div>

            {/* Referral Stats Section */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-[#09163A]">Referral Statistics</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {stats.referrals.map((referral) => (
                  <div
                    key={referral.source}
                    className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Share2 className="h-6 w-6 text-[#EE1D46]" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-[#09163A] capitalize">
                          {referral.source}
                        </h3>
                        <p className="text-2xl font-semibold text-[#09163A]">
                          {referral.count}
                        </p>
                        <p className="text-sm text-gray-500">
                          Total Referrals
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toast.Root
        className="bg-white rounded-md shadow-lg border border-red-200 p-4 flex items-start gap-3 data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut"
        open={open}
        onOpenChange={setOpen}
      >
        <div className="flex-1">
          <Toast.Title className="text-red-600 font-medium">
            Error
          </Toast.Title>
          <Toast.Description className="text-gray-600 mt-1">
            {errorMessage}
          </Toast.Description>
    </div>
        <Toast.Close className="rounded-full p-1 hover:bg-gray-100">
          <Cross2Icon className="h-4 w-4 text-gray-500" />
        </Toast.Close>
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-96 max-w-[100vw] m-0 z-50 outline-none" />
    </Toast.Provider>
  );
}

const Section1 = () => (
  <div className="flex flex-col mt-6">
    <div className="text-2xl z-10 font-black">Website Overview</div>
    <div className="z-10 text-adminText mt-1">
      You can checkout out your website over view here!
    </div>
    <div className="w-full flex gap-5 mt-5 z-10">
      <div className="hover:shadow-xl duration-200 cursor-pointer flex gap-2 relative overflow-hidden place-items-center px-5 py-3 rounded-lg bg-adminSecondary text-white">
        <div className="w-12 h-12 absolute bg-adminPrimary -top-5 -left-3 blur-xl z-0"></div>
        <div className="w-12 h-12 absolute bg-adminPrimary -bottom-5 -right-3 blur-[30px] z-0"></div>
        <FcGoogle className="text-[50px] z-10" />
        <div className="pt-2">
          <div className="text-xl font-bold">Google search Console</div>
          <div className="text-gray-100 text-sm">
            Check out your website search status
          </div>
        </div>
      </div>

      <div className="hover:shadow-xl duration-200 cursor-pointer flex gap-2 relative overflow-hidden place-items-center px-5 py-3 rounded-lg bg-adminSecondary text-white">
        <div className="w-12 h-12 absolute bg-adminPrimary -top-5 -left-3 blur-xl z-0"></div>
        <div className="w-12 h-12 absolute bg-adminPrimary -bottom-5 -right-3 blur-[30px] z-0"></div>
        <SiGoogleanalytics className="text-[50px] text-[#F9AB00] z-10" />
        <div className="pt-2">
          <div className="text-xl font-bold">Google Analytics</div>
          <div className="text-gray-100 text-sm">
            Check out your website search status
          </div>
        </div>
      </div>
    </div>
  </div>
);
