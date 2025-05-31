import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

const partnerSchema = new Schema(
  {
  image : {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Partner = mongoose.models.Partner || mongoose.model("Partner", partnerSchema);
export default Partner;

