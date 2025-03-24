import mongoose, { Schema, Document, Model } from "mongoose";

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

// Define the schema for the Gallery model
const gallerySchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default : "Image"
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
  }
);

// Create the Gallery model
const Gallery =
  mongoose.models.Gallery || mongoose.model("Gallery", gallerySchema);

export default Gallery;
