import mongoose, { Schema, Document, Model } from "mongoose";

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

// Define the schema for the Blog model
const blogSchema = new Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default : "Image"
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
  }
);

// Create the Blog model
const Blog =
  mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
