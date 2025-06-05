'use client';

import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { getBlogs } from "@/lib/api"
import { IBlog } from "@/interfaces/blog.interface"

export default function NewsSection() {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data.slice(0, 3)); // Get first 3 blogs
      } catch (err) {
        setError('Failed to fetch blogs');
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">{t('common.loading')}</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-serif font-light text-[#09163A]">{t('blog.title')}</h2>
          <Link href="/blog" className="text-[#09163A] hover:text-[#EE1D46] font-medium uppercase">
            {t('blog.viewAll')}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog._id} className="group">
              <Link href={`/blog/${blog._id}`} className="block relative aspect-[4/3] overflow-hidden mb-4">
                <Image
                  src={blog.image}
                  alt={blog.topic}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div>
                <div className="text-sm text-[#09163A] mb-2">{t('blog.category')}</div>
                <Link href={`/blog/${blog._id}`} className="block">
                  <h3 className="text-xl font-serif text-[#09163A] group-hover:text-[#EE1D46]">{blog.topic}</h3>
                </Link>
                <p className="text-gray-600 mt-2 line-clamp-2">{blog.desc}</p>
                <div className="mt-4">
                  <Link href={`/blog/${blog._id}`} className="inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#09163A]"
                    >
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
