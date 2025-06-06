import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

const referralSchema = new Schema(
  {
    source: {
      type: String,
      required: true,
      enum: ['tiktok', 'facebook', 'unknown'],
    },
    referralCode: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true, // This will add createdAt and updatedAt fields
  }
);

// Add indexes for better query performance
referralSchema.index({ source: 1, createdAt: -1 });
referralSchema.index({ referralCode: 1 });

const Referral = mongoose.models.Referral || mongoose.model("Referral", referralSchema);
export default Referral; 