"use client";
import React, { useState } from "react";
import { IPackage } from "@/interfaces/package.interface";
import { FaTimes } from "react-icons/fa";

type MealPlan = "Breakfast Only" | "Half Board" | "Full Board" | "All Inclusive";
type BookingMethod = "Website" | "Phone" | "Email";

interface FormData {
  name: string;
  tagline: string;
  locations: string[];
  mapUrl: string;
  duration: string;
  inclusions: {
    flights: boolean;
    accommodation: string;
    airportTransfers: boolean;
    guidedTours: boolean;
    meals: MealPlan;
    travelInsurance: boolean;
  };
  exclusions: string[];
  itinerary: Array<{ day: number; description: string }>;
  pricing: {
    pricePerPerson: number;
    doubleOccupancy: number;
    tripleOccupancy: number;
    earlyBirdDiscount: number;
    groupDiscount: number;
    paymentPlans: string[];
  };
  bookingInfo: {
    bookingMethods: BookingMethod[];
    consultantName: string;
    officeAddress: string;
    bookingLink: string;
  };
  termsAndConditions: {
    cancellationPolicy: string;
    refundPolicy: string;
    passportRequirements: string;
    visaRequirements: string;
  };
  images: string[];
  activityIcons: string[];
}

interface Props {
  package: IPackage;
  onUpdate: (pkg: IPackage) => void;
  onCancel: () => void;
}

const EditPackage = ({ package: pkg, onUpdate, onCancel }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    // 1. Package Title & Theme
    name: pkg.name,
    tagline: pkg.tagline,

    // 2. Destination Details
    locations: pkg.locations.length ? pkg.locations : [""],
    mapUrl: pkg.mapUrl,
    duration: pkg.duration,

    // 3. Inclusions
    inclusions: {
      flights: pkg.inclusions.flights,
      accommodation: pkg.inclusions.accommodation,
      airportTransfers: pkg.inclusions.airportTransfers,
      guidedTours: pkg.inclusions.guidedTours,
      meals: pkg.inclusions.meals,
      travelInsurance: pkg.inclusions.travelInsurance,
    },

    // 4. Exclusions
    exclusions: pkg.exclusions.length ? pkg.exclusions : [""],

    // 5. Itinerary
    itinerary: pkg.itinerary.length ? pkg.itinerary : [{ day: 1, description: "" }],

    // 6. Pricing
    pricing: {
      pricePerPerson: pkg.pricing.pricePerPerson,
      doubleOccupancy: pkg.pricing.doubleOccupancy,
      tripleOccupancy: pkg.pricing.tripleOccupancy,
      earlyBirdDiscount: pkg.pricing.earlyBirdDiscount,
      groupDiscount: pkg.pricing.groupDiscount,
      paymentPlans: pkg.pricing.paymentPlans.length ? pkg.pricing.paymentPlans : [""],
    },

    // 7. Booking & Contact Info
    bookingInfo: {
      bookingMethods: pkg.bookingInfo.bookingMethods,
      consultantName: pkg.bookingInfo.consultantName || "",
      officeAddress: pkg.bookingInfo.officeAddress || "",
      bookingLink: pkg.bookingInfo.bookingLink || "",
    },

    // 8. Terms & Conditions
    termsAndConditions: {
      cancellationPolicy: pkg.termsAndConditions.cancellationPolicy,
      refundPolicy: pkg.termsAndConditions.refundPolicy,
      passportRequirements: pkg.termsAndConditions.passportRequirements,
      visaRequirements: pkg.termsAndConditions.visaRequirements,
    },

    // 9. Visual Elements
    images: pkg.images.length ? pkg.images : [""],
    activityIcons: pkg.activityIcons.length ? pkg.activityIcons : [""],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Clean up empty arrays and validate required fields
      const cleanedData = {
        ...formData,
        locations: formData.locations.filter(Boolean),
        exclusions: formData.exclusions.filter(Boolean),
        itinerary: formData.itinerary.filter(day => day.description.trim() !== ""),
        pricing: {
          ...formData.pricing,
          paymentPlans: formData.pricing.paymentPlans.filter(Boolean),
        },
        images: formData.images.filter(Boolean),
        activityIcons: formData.activityIcons.filter(Boolean),
      };

      const res = await fetch(`/api/packages/${pkg._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanedData),
      });

      if (!res.ok) throw new Error("Failed to update package");

      const data = await res.json();
      onUpdate(data.package);
    } catch (error) {
      console.error("Error updating package:", error);
      alert("Failed to update package");
    } finally {
      setIsLoading(false);
    }
  };

  const handleArrayFieldChange = (
    field: keyof FormData,
    index: number,
    value: string,
    parentField?: keyof FormData
  ) => {
    if (parentField) {
      const parent = formData[parentField] as Record<string, any>;
      setFormData(prev => ({
        ...prev,
        [parentField]: {
          ...parent,
          [field]: (parent[field] as string[]).map((item, i) => (i === index ? value : item)),
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: (prev[field] as string[]).map((item, i) => (i === index ? value : item)),
      }));
    }
  };

  const addArrayField = (field: keyof FormData, parentField?: keyof FormData) => {
    if (parentField) {
      const parent = formData[parentField] as Record<string, any>;
      setFormData(prev => ({
        ...prev,
        [parentField]: {
          ...parent,
          [field]: [...(parent[field] as string[]), ""],
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: [...(prev[field] as string[]), ""],
      }));
    }
  };

  const removeArrayField = (field: keyof FormData, index: number, parentField?: keyof FormData) => {
    if (parentField) {
      const parent = formData[parentField] as Record<string, any>;
      setFormData(prev => ({
        ...prev,
        [parentField]: {
          ...parent,
          [field]: (parent[field] as string[]).filter((_, i) => i !== index),
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: (prev[field] as string[]).filter((_, i) => i !== index),
      }));
    }
  };

  return (
    <div className="relative">
      <button
        onClick={onCancel}
        className="absolute right-0 top-0 text-gray-500 hover:text-gray-700"
      >
        <FaTimes />
      </button>

      <h2 className="text-2xl font-bold mb-6">Edit Package</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Package Title & Theme */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Package Title & Theme</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Package Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tagline
            </label>
            <input
              type="text"
              required
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        {/* Destination Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Destination Details</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Locations
            </label>
            <div className="space-y-2">
              {formData.locations.map((location, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => handleArrayFieldChange("locations", index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder={`Location ${index + 1}`}
                  />
                  {formData.locations.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayField("locations", index)}
                      className="px-3 py-2 text-red-500 hover:text-red-600"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayField("locations")}
                className="text-primary hover:text-primary/80 text-sm font-medium"
              >
                + Add Location
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Map URL
            </label>
            <input
              type="url"
              required
              value={formData.mapUrl}
              onChange={(e) => setFormData({ ...formData, mapUrl: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration
            </label>
            <input
              type="text"
              required
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="e.g., 3 days, 1 week"
            />
          </div>
        </div>

        {/* Inclusions */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Inclusions</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="flights"
                checked={formData.inclusions.flights}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    inclusions: { ...formData.inclusions, flights: e.target.checked },
                  })
                }
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="flights" className="text-sm text-gray-700">
                Flights Included
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="airportTransfers"
                checked={formData.inclusions.airportTransfers}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    inclusions: { ...formData.inclusions, airportTransfers: e.target.checked },
                  })
                }
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="airportTransfers" className="text-sm text-gray-700">
                Airport Transfers
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="guidedTours"
                checked={formData.inclusions.guidedTours}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    inclusions: { ...formData.inclusions, guidedTours: e.target.checked },
                  })
                }
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="guidedTours" className="text-sm text-gray-700">
                Guided Tours
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="travelInsurance"
                checked={formData.inclusions.travelInsurance}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    inclusions: { ...formData.inclusions, travelInsurance: e.target.checked },
                  })
                }
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="travelInsurance" className="text-sm text-gray-700">
                Travel Insurance
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Accommodation Details
            </label>
            <input
              type="text"
              required
              value={formData.inclusions.accommodation}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  inclusions: { ...formData.inclusions, accommodation: e.target.value },
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Meal Plan
            </label>
            <select
              required
              value={formData.inclusions.meals}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  inclusions: {
                    ...formData.inclusions,
                    meals: e.target.value as MealPlan,
                  },
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="Breakfast Only">Breakfast Only</option>
              <option value="Half Board">Half Board</option>
              <option value="Full Board">Full Board</option>
              <option value="All Inclusive">All Inclusive</option>
            </select>
          </div>
        </div>

        {/* Exclusions */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Exclusions</h3>
          <div className="space-y-2">
            {formData.exclusions.map((exclusion, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  required
                  value={exclusion}
                  onChange={(e) => handleArrayFieldChange("exclusions", index, e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder={`Exclusion ${index + 1}`}
                />
                {formData.exclusions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayField("exclusions", index)}
                    className="px-3 py-2 text-red-500 hover:text-red-600"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayField("exclusions")}
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              + Add Exclusion
            </button>
          </div>
        </div>

        {/* Itinerary */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Itinerary</h3>
          <div className="space-y-4">
            {formData.itinerary.map((day, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Day {day.day}</span>
                  {formData.itinerary.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayField("itinerary", index)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
                <textarea
                  required
                  value={day.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      itinerary: formData.itinerary.map((d, i) =>
                        i === index ? { ...d, description: e.target.value } : d
                      ),
                    })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder={`Description for Day ${day.day}`}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  itinerary: [
                    ...formData.itinerary,
                    { day: formData.itinerary.length + 1, description: "" },
                  ],
                })
              }
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              + Add Day
            </button>
          </div>
        </div>

        {/* Pricing */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Pricing</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Per Person ($)
              </label>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                value={formData.pricing.pricePerPerson}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    pricing: {
                      ...formData.pricing,
                      pricePerPerson: parseFloat(e.target.value),
                    },
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Double Occupancy ($)
              </label>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                value={formData.pricing.doubleOccupancy}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    pricing: {
                      ...formData.pricing,
                      doubleOccupancy: parseFloat(e.target.value),
                    },
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Triple Occupancy ($)
              </label>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                value={formData.pricing.tripleOccupancy}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    pricing: {
                      ...formData.pricing,
                      tripleOccupancy: parseFloat(e.target.value),
                    },
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Early Bird Discount (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                value={formData.pricing.earlyBirdDiscount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    pricing: {
                      ...formData.pricing,
                      earlyBirdDiscount: parseInt(e.target.value),
                    },
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Group Discount (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                value={formData.pricing.groupDiscount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    pricing: {
                      ...formData.pricing,
                      groupDiscount: parseInt(e.target.value),
                    },
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Plans
            </label>
            <div className="space-y-2">
              {formData.pricing.paymentPlans.map((plan, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={plan}
                    onChange={(e) =>
                      handleArrayFieldChange("paymentPlans", index, e.target.value, "pricing")
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder={`Payment Plan ${index + 1}`}
                  />
                  {formData.pricing.paymentPlans.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayField("paymentPlans", index, "pricing")}
                      className="px-3 py-2 text-red-500 hover:text-red-600"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayField("paymentPlans", "pricing")}
                className="text-primary hover:text-primary/80 text-sm font-medium"
              >
                + Add Payment Plan
              </button>
            </div>
          </div>
        </div>

        {/* Booking Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Booking Information</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Booking Methods
            </label>
            <div className="space-y-2">
              {["Website", "Phone", "Email"].map((method) => (
                <div key={method} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={method}
                    checked={formData.bookingInfo.bookingMethods.includes(method as any)}
                    onChange={(e) => {
                      const methods = e.target.checked
                        ? [...formData.bookingInfo.bookingMethods, method as any]
                        : formData.bookingInfo.bookingMethods.filter((m) => m !== method);
                      setFormData({
                        ...formData,
                        bookingInfo: { ...formData.bookingInfo, bookingMethods: methods },
                      });
                    }}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor={method} className="text-sm text-gray-700">
                    {method}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Consultant Name
            </label>
            <input
              type="text"
              value={formData.bookingInfo.consultantName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bookingInfo: { ...formData.bookingInfo, consultantName: e.target.value },
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Office Address
            </label>
            <input
              type="text"
              value={formData.bookingInfo.officeAddress}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bookingInfo: { ...formData.bookingInfo, officeAddress: e.target.value },
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Booking Link
            </label>
            <input
              type="url"
              value={formData.bookingInfo.bookingLink}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bookingInfo: { ...formData.bookingInfo, bookingLink: e.target.value },
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Terms & Conditions</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cancellation Policy
            </label>
            <textarea
              required
              value={formData.termsAndConditions.cancellationPolicy}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  termsAndConditions: {
                    ...formData.termsAndConditions,
                    cancellationPolicy: e.target.value,
                  },
                })
              }
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Refund Policy
            </label>
            <textarea
              required
              value={formData.termsAndConditions.refundPolicy}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  termsAndConditions: {
                    ...formData.termsAndConditions,
                    refundPolicy: e.target.value,
                  },
                })
              }
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Passport Requirements
            </label>
            <textarea
              required
              value={formData.termsAndConditions.passportRequirements}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  termsAndConditions: {
                    ...formData.termsAndConditions,
                    passportRequirements: e.target.value,
                  },
                })
              }
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Visa Requirements
            </label>
            <textarea
              required
              value={formData.termsAndConditions.visaRequirements}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  termsAndConditions: {
                    ...formData.termsAndConditions,
                    visaRequirements: e.target.value,
                  },
                })
              }
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        {/* Visual Elements */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Visual Elements</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Images
            </label>
            <div className="space-y-2">
              {formData.images.map((image, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="url"
                    required
                    value={image}
                    onChange={(e) => handleArrayFieldChange("images", index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder={`Image URL ${index + 1}`}
                  />
                  {formData.images.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayField("images", index)}
                      className="px-3 py-2 text-red-500 hover:text-red-600"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayField("images")}
                className="text-primary hover:text-primary/80 text-sm font-medium"
              >
                + Add Image
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Activity Icons
            </label>
            <div className="space-y-2">
              {formData.activityIcons.map((icon, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={icon}
                    onChange={(e) => handleArrayFieldChange("activityIcons", index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder={`Activity Icon ${index + 1}`}
                  />
                  {formData.activityIcons.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayField("activityIcons", index)}
                      className="px-3 py-2 text-red-500 hover:text-red-600"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayField("activityIcons")}
                className="text-primary hover:text-primary/80 text-sm font-medium"
              >
                + Add Activity Icon
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50"
          >
            {isLoading ? "Updating..." : "Update Package"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPackage; 