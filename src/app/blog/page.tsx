import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BackToTop } from "@/components/back-to-top"
import { BlogContent } from "./blog-content"
import { BlogHero } from "./blog-hero"
import { getBlogs } from "@/lib/api"

export const metadata = {
  title: "Blog & Press - Geneve Getaway",
  description: "Discover the latest travel insights, news, and stories from Geneve Getaway."
}

export default async function BlogPage() {
  const blogs = await getBlogs()

  return (
    <>
      <SiteHeader />
      <BlogHero />
      <main className="py-16">
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <BlogContent blogs={blogs} />
        </Suspense>
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  )
}
