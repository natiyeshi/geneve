import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Package name is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    shortDescription: {
      type: String,
      required: [true, "Short description is required"],
    },
    price: {
      amount: {
        type: Number,
        required: [true, "Price amount is required"],
      },
      currency: {
        type: String,
        default: "USD",
      },
    },
    duration: {
      days: {
        type: Number,
        required: [true, "Duration in days is required"],
      },
      nights: {
        type: Number,
        required: [true, "Duration in nights is required"],
      },
    },
    images: [{
      type: String,
      required: [true, "At least one image is required"],
    }],
    featuredImage: {
      type: String,
      required: [true, "Featured image is required"],
    },
    destinations: [{
      type: String,
      required: [true, "At least one destination is required"],
    }],
    highlights: [{
      type: String,
      required: [true, "At least one highlight is required"],
    }],
    inclusions: [{
      type: String,
      required: [true, "At least one inclusion is required"],
    }],
    exclusions: [{
      type: String,
    }],
    itinerary: [{
      day: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      activities: [{
        type: String,
      }],
    }],
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    meta: {
      views: {
        type: Number,
        default: 0,
      },
      bookings: {
        type: Number,
        default: 0,
      },
      rating: {
        type: Number,
        default: 0,
      },
      reviews: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes
packageSchema.index({ name: "text", description: "text" });
packageSchema.index({ slug: 1 }, { unique: true });
packageSchema.index({ destinations: 1 });
packageSchema.index({ status: 1 });

export default mongoose.models.Package || mongoose.model("Package", packageSchema); 