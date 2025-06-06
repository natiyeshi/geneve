import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CTASection } from "@/components/cta-section"
import blog1 from "@/../public/assets/image/blog-2.jpg"
import { Button } from "@/components/ui/button"

interface BlogPost {
  _id: string
  topic: string
  desc: string
  content: string
  image: string
  link: string
  createdAt: string
  updatedAt: string
}

// Fetch blog post from API
const getBlogPost = async (id: string): Promise<BlogPost | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/${id}`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch blog post');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
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
    title: post.topic,
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
                Travel
              </span>
              <time dateTime={post.createdAt}>{new Date(post.createdAt).toLocaleDateString()}</time>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-serif font-bold mb-6">{post.topic}</h1>

            {/* Author */}
            <div className="flex items-center gap-2 mb-8">
              <span className="text-gray-600">By Admin</span>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.topic}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none [&>h2]:text-3xl [&>h2]:font-bold [&>h3]:text-2xl [&>h3]:font-bold" 
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
        </article>

        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
} 