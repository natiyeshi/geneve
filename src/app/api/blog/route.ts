import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { clientPromise } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import slugify from "
";

// GET /api/blog - Get all blog posts
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const posts = await db
      .collection("blog_posts")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

// POST /api/blog - Create a new blog post
export async function POST(request: Request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { title, content, excerpt, author, image, published } = await request.json();

    if (!title || !content || !excerpt || !author) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const slug = slugify(title, { lower: true, strict: true });
    const client = await clientPromise;
    const db = client.db();

    // Check if slug already exists
    const existingPost = await db.collection("blog_posts").findOne({ slug });
    if (existingPost) {
      return NextResponse.json(
        { error: "A post with this title already exists" },
        { status: 400 }
      );
    }

    const newPost = {
      title,
      content,
      excerpt,
      slug,
      author,
      image,
      published: published || false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("blog_posts").insertOne(newPost);

    return NextResponse.json({
      message: "Blog post created successfully",
      postId: result.insertedId,
    });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}

// PUT /api/blog - Update a blog post
export async function PUT(request: Request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { _id, title, content, excerpt, author, image, published } = await request.json();

    if (!_id || !title || !content || !excerpt || !author) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const slug = slugify(title, { lower: true, strict: true });
    const client = await clientPromise;
    const db = client.db();

    // Check if slug exists for a different post
    const existingPost = await db.collection("blog_posts").findOne({
      slug,
      _id: { $ne: new ObjectId(_id) },
    });

    if (existingPost) {
      return NextResponse.json(
        { error: "A post with this title already exists" },
        { status: 400 }
      );
    }

    const result = await db.collection("blog_posts").updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          title,
          content,
          excerpt,
          slug,
          author,
          image,
          published,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Blog post updated successfully",
    });
  } catch (error) {
    console.error("Error updating blog post:", error);
    return NextResponse.json(
      { error: "Failed to update blog post" },
      { status: 500 }
    );
  }
}

// DELETE /api/blog - Delete a blog post
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { _id } = await request.json();

    if (!_id) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();

    const result = await db.collection("blog_posts").deleteOne({
      _id: new ObjectId(_id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Blog post deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return NextResponse.json(
      { error: "Failed to delete blog post" },
      { status: 500 }
    );
  }
}
    