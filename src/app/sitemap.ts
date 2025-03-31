import { ICBlog } from "@/interfaces/blog.interface";
import { MetadataRoute } from "next";

const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blog`
        );
        const data: ICBlog[] = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        return []
      }
};

export default async function sitemap() : Promise<MetadataRoute.Sitemap>{
  const URL = "https://gaber-wear.org"
  const blogs  = await fetchBlogs();
  const blogsSitemap : MetadataRoute.Sitemap = blogs ? blogs.map(blog => ({
    url : `${URL}/blog/${blog.link}`,
  })) : []

    return [
        {
            url : `${URL}`,
        },
        {
            url : `${URL}/products`,
        },
        {
            url : `${URL}/ourstory`,
        },
        {
            url : `${URL}/services`,
        },
        {
            url : `${URL}/contactus`,
        },
        {
            url : `${URL}/blogs`,
        },
        ...blogsSitemap,
    ]
}