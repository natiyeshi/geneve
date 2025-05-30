export interface ItineraryDay {
  day: number;
  description: string;
}

export interface PackageInclusions {
  flights: boolean;
  accommodation: string;
  airportTransfers: boolean;
  guidedTours: boolean;
  meals: "Breakfast Only" | "Half Board" | "Full Board" | "All Inclusive";
  travelInsurance: boolean;
}

export interface PackagePricing {
  pricePerPerson: number;
  doubleOccupancy: number;
  tripleOccupancy: number;
  earlyBirdDiscount: number;
  groupDiscount: number;
  paymentPlans: string[];
}

export interface BookingInfo {
  bookingMethods: ("Website" | "Phone" | "Email")[];
  consultantName?: string;
  officeAddress?: string;
  bookingLink?: string;
}

export interface TermsAndConditions {
  cancellationPolicy: string;
  refundPolicy: string;
  passportRequirements: string;
  visaRequirements: string;
}

export interface IPackage {
  _id: string;
  // 1. Package Title & Theme
  name: string;
  tagline: string;

  // 2. Destination Details
  locations: string[];
  mapUrl: string;
  duration: string;

  // 3. Inclusions
  inclusions: PackageInclusions;

  // 4. Exclusions
  exclusions: string[];

  // 5. Itinerary
  itinerary: ItineraryDay[];

  // 6. Pricing
  pricing: PackagePricing;

  // 7. Booking & Contact Info
  bookingInfo: BookingInfo;

  // 8. Terms & Conditions
  termsAndConditions: TermsAndConditions;

  // 9. Visual Elements
  images: string[];
  activityIcons: string[];

  // Additional fields
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
} 