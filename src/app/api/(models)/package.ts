import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tagline: String,
  locations: [String],
  mapUrl: String,
  duration: String,
  inclusions: {
    flights: Boolean,
    accommodation: String,
    airportTransfers: Boolean,
    guidedTours: Boolean,
    meals: String,
    travelInsurance: Boolean
  },
  exclusions: [String],
  itinerary: [{
    day: Number,
    description: String
  }],
  pricing: {
    pricePerPerson: Number,
    doubleOccupancy: Number,
    tripleOccupancy: Number,
    earlyBirdDiscount: Number,
    groupDiscount: Number,
    paymentPlans: [String]
  },
  bookingInfo: {
    bookingMethods: [String],
    consultantName: String,
    officeAddress: String,
    bookingLink: String
  },
  termsAndConditions: {
    cancellationPolicy: String,
    refundPolicy: String,
    passportRequirements: String,
    visaRequirements: String
  },
  images: [String],
  activityIcons: [String],
  category: String,
  featured: { type: Boolean, default: false }
}, {
  timestamps: true
});

// Create the model if it doesn't exist, otherwise use the existing one
const Package = mongoose.models.Package || mongoose.model('Package', packageSchema);

export default Package; 