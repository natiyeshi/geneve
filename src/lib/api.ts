import { IBlog } from "@/interfaces/blog.interface"

export async function getBlogs(): Promise<IBlog[]> {
  try {
    const response = await fetch(`/api/blog`, {
      cache: 'no-store'
    });
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
} 