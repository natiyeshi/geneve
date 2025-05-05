import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { NewsCardProps } from "@/components/news-section"
import { CTASection } from "@/components/cta-section"
import blog1 from "@/../public/assets/image/blog-2.jpg"
import { Button } from "@/components/ui/button"

interface BlogPost extends NewsCardProps {
  content: string
  date: string
  author: string
}

// This would typically come from your database or CMS
const getBlogPost = async (id: string): Promise<BlogPost | null> => {
  // Mock data for demonstration
  return {
    title: "Sample Blog Post",
    category: "Travel",
    imageSrc: blog1,
    href: `/blog/${id}`,
    content: "This is a sample blog post content. In a real application, this would be fetched from your database or CMS.",
    date: "2024-03-20",
    author: "John Doe"
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.id)
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160),
  }
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader isDark={true} />
      <main className="flex-1 mt-28">
        <article className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Category and Date */}
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-[#EE1D46] text-white px-3 py-1 rounded-full">
                {post.category}
              </span>
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-serif font-bold mb-6">{post.title}</h1>

            {/* Author */}
            <div className="flex items-center gap-2 mb-8">
              <span className="text-gray-600">By {post.author}</span>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.imageSrc}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p>{post.content}</p>
            </div>
          </div>
        </article>

        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
} 