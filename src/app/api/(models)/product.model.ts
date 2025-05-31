import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

const productSchema = new Schema(
  {
    image : {
        type: String,
        required: true,
    },
    tag : {
        type: String,
        required: true,
    },
    group : {
        type: String,
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;

