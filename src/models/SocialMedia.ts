import mongoose from "mongoose";

const socialMediaSchema = new mongoose.Schema(
  {
    platform: {
      type: String,
      required: [true, "Platform is required"],
      enum: ["facebook", "instagram", "twitter", "linkedin", "youtube"],
    },
    postId: {
      type: String,
      required: [true, "Post ID is required"],
    },
    postType: {
      type: String,
      required: [true, "Post type is required"],
      enum: ["text", "image", "video", "carousel", "story", "reel"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    mediaUrls: [{
      type: String,
    }],
    metrics: {
      likes: {
        type: Number,
        default: 0,
      },
      comments: {
        type: Number,
        default: 0,
      },
      shares: {
        type: Number,
        default: 0,
      },
      saves: {
        type: Number,
        default: 0,
      },
      reach: {
        type: Number,
        default: 0,
      },
      impressions: {
        type: Number,
        default: 0,
      },
      engagement: {
        type: Number,
        default: 0,
      },
    },
    postedAt: {
      type: Date,
      required: [true, "Post date is required"],
    },
    status: {
      type: String,
      enum: ["scheduled", "published", "failed"],
      default: "published",
    },
    tags: [{
      type: String,
      trim: true,
    }],
    campaign: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes
socialMediaSchema.index({ platform: 1, postId: 1 }, { unique: true });
socialMediaSchema.index({ postedAt: 1 });
socialMediaSchema.index({ status: 1 });
socialMediaSchema.index({ tags: 1 });
socialMediaSchema.index({ campaign: 1 });

export default mongoose.models.SocialMedia || mongoose.model("SocialMedia", socialMediaSchema); 