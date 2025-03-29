import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

const blogSchema = new Schema(
  {
  topic : {
      type: String,
      required: true,
    },
  image : {
      type: String,
      required: true,
    },
  
  desc : {
    type: String,
    required: true,
  },
  link : {
    type: String,
    required: true,
  },

  content : {
    type: String,
    required: true,
  }},{
    timestamps: true,
  }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;

