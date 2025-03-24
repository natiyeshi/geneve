import mongoose, { Schema, Document, Model } from "mongoose";

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

// Define the schema for the Product model
const productSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
        type: String,
        default : "Our Product"
      },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
  }
);

// Create the Product model
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
