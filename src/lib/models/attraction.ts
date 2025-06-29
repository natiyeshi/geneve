import { Schema, model, models } from "mongoose";

const attractionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Attraction = models.Attraction || model("Attraction", attractionSchema);

export default Attraction; 