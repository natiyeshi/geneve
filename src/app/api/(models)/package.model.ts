import mongoose from "mongoose";

const itineraryDaySchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const packageSchema = new mongoose.Schema({
  // 1. Package Title & Theme
  name: {
    type: String,
    required: [true, "Package name is required"],
    trim: true,
  },
  tagline: {
    type: String,
    required: [true, "Package tagline is required"],
    trim: true,
  },

  // 2. Destination Details
  locations: [{
    type: String,
    required: [true, "At least one location is required"],
  }],
  mapUrl: {
    type: String,
    required: [true, "Map or itinerary overview is required"],
  },
  duration: {
    type: String,
    required: [true, "Duration is required"],
  },

  // 3. Inclusions
  inclusions: {
    flights: {
      type: Boolean,
      default: false,
    },
    accommodation: {
      type: String,
      required: [true, "Accommodation details are required"],
    },
    airportTransfers: {
      type: Boolean,
      default: false,
    },
    guidedTours: {
      type: Boolean,
      default: false,
    },
    meals: {
      type: String,
      enum: ["Breakfast Only", "Half Board", "Full Board", "All Inclusive"],
      required: [true, "Meal plan is required"],
    },
    travelInsurance: {
      type: Boolean,
      default: false,
    },
  },

  // 4. Exclusions
  exclusions: [{
    type: String,
    required: [true, "Exclusions are required"],
  }],

  // 5. Itinerary
  itinerary: [itineraryDaySchema],

  // 6. Pricing
  pricing: {
    pricePerPerson: {
      type: Number,
      required: [true, "Price per person is required"],
    },
    doubleOccupancy: {
      type: Number,
      required: [true, "Double occupancy price is required"],
    },
    tripleOccupancy: {
      type: Number,
      required: [true, "Triple occupancy price is required"],
    },
    earlyBirdDiscount: {
      type: Number,
      default: 0,
    },
    groupDiscount: {
      type: Number,
      default: 0,
    },
    paymentPlans: [{
      type: String,
    }],
  },

  // 7. Booking & Contact Info
  bookingInfo: {
    bookingMethods: [{
      type: String,
      enum: ["Website", "Phone", "Email"],
      required: [true, "At least one booking method is required"],
    }],
    consultantName: String,
    officeAddress: String,
    bookingLink: String,
  },

  // 8. Terms & Conditions
  termsAndConditions: {
    cancellationPolicy: {
      type: String,
      required: [true, "Cancellation policy is required"],
    },
    refundPolicy: {
      type: String,
      required: [true, "Refund policy is required"],
    },
    passportRequirements: {
      type: String,
      required: [true, "Passport requirements are required"],
    },
    visaRequirements: {
      type: String,
      required: [true, "Visa requirements are required"],
    },
  },

  // 9. Visual Elements
  images: [{
    type: String,
    required: [true, "At least one image is required"],
  }],
  activityIcons: [{
    type: String,
  }],

  // Additional fields
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Package = mongoose.models.Package || mongoose.model("Package", packageSchema);

export default Package; 