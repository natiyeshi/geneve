'use client';

import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { getBlogs } from "@/lib/api"
import { IBlog } from "@/interfaces/blog.interface"
import { motion } from "framer-motion"

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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-12"
        >
          <h2 className="text-4xl font-serif font-light text-[#09163A]">{t('blog.title')}</h2>
          <Link href="/blog" className="text-[#09163A] hover:text-[#EE1D46] font-medium uppercase">
            {t('blog.viewAll')}
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogs.map((blog, i) => (
            <motion.div
              key={blog._id}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.5, type: "spring" }}
              className="group"
            >
              <Link href={`/blog/${blog.link}`} className="block relative aspect-[4/3] overflow-hidden mb-4">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
