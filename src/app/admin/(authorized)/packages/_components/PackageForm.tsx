"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { PackageInf } from "@/app/packages/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Upload, X, Image as ImageIcon, Loader2 } from "lucide-react";
import { uploadImage } from "@/utils/helper";
import Image from "next/image";

interface PackageFormProps {
  initialValues?: Partial<PackageInf>;
  isEditing?: boolean;
}

// Add new interface for temporary image storage
interface TempImageFile {
  file?: File;  // Make file optional since we might have URLs from existing images
  preview: string;
  url?: string;  // Add url field to store existing image URLs
}

const validationSchema = Yup.object({
  name: Yup.string().required("Package name is required"),
  tagline: Yup.string().required("Tagline is required"),
  duration: Yup.string().required("Duration is required"),
  category: Yup.string().required("Category is required"),
  pricing: Yup.object({
    pricePerPerson: Yup.number().required("Price per person is required").min(0),
    doubleOccupancy: Yup.number().min(0),
    tripleOccupancy: Yup.number().min(0),
    earlyBirdDiscount: Yup.number().min(0).max(100),
    groupDiscount: Yup.number().min(0).max(100),
  }),
  inclusions: Yup.object({
    flights: Yup.boolean(),
    accommodation: Yup.string(),
    airportTransfers: Yup.boolean(),
    guidedTours: Yup.boolean(),
    meals: Yup.string(),
    travelInsurance: Yup.boolean(),
  }),
  exclusions: Yup.array().of(Yup.string()),
  itinerary: Yup.array().of(
    Yup.object({
      day: Yup.number().required(),
      description: Yup.string().required(),
    })
  ),
  termsAndConditions: Yup.object({
    cancellationPolicy: Yup.string(),
    refundPolicy: Yup.string(),
    passportRequirements: Yup.string(),
    visaRequirements: Yup.string(),
  }),
  featured: Yup.boolean(),
});

const defaultValues: Partial<PackageInf> = {
  name: "",
  tagline: "",
  locations: [],
  duration: "",
  category: "",
  pricing: {
    pricePerPerson: 0,
    doubleOccupancy: 0,
    tripleOccupancy: 0,
    earlyBirdDiscount: 0,
    groupDiscount: 0,
    paymentPlans: [],
  },
  inclusions: {
    flights: false,
    accommodation: "",
    airportTransfers: false,
    guidedTours: false,
    meals: "",
    travelInsurance: false,
  },
  exclusions: [],
  itinerary: [],
  termsAndConditions: {
    cancellationPolicy: "",
    refundPolicy: "",
    passportRequirements: "",
    visaRequirements: "",
  },
  featured: false,
  images: [],
  activityIcons: [],
};

export default function PackageForm({ initialValues = defaultValues, isEditing = false }: PackageFormProps) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tempImages, setTempImages] = useState<TempImageFile[]>(() => {
    // Initialize tempImages with existing images if in edit mode
    if (isEditing && initialValues.images?.length) {
      return initialValues.images.map(url => ({
        preview: url,
        url: url
      }));
    }
    return [];
  });
  const router = useRouter();

  // Function to handle file selection and preview
  const handleFileSelect = (file: File, setFieldValue: (field: string, value: any) => void) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const newTempImage: TempImageFile = {
        file,
        preview: reader.result as string
      };
      setTempImages(prev => [...prev, newTempImage]);
    };
    reader.readAsDataURL(file);
  };

  // Function to remove temporary image
  const removeTempImage = (index: number) => {
    setTempImages(prev => prev.filter((_, i) => i !== index));
  };

  // Function to upload all images
  const uploadAllImages = async (files: TempImageFile[]): Promise<string[]> => {
    const uploadPromises = files.map(async (tempImage) => {
      // If the image already has a URL (existing image), use it
      if (tempImage.url) {
        return tempImage.url;
      }
      // Otherwise upload the new file
      if (tempImage.file) {
        const { error, url } = await uploadImage(tempImage.file);
        if (error) throw new Error(error);
        return url;
      }
      throw new Error("Invalid image data");
    });

    return Promise.all(uploadPromises);
  };

  const handleSubmit = async (values: Partial<PackageInf>, { setSubmitting }: any) => {
    console.log("Submit handler triggered", values);
    try {
      setIsLoading(true);
      setError("");

      // Validate that we have at least one image
      if (tempImages.length === 0) {
        setError("At least one image is required");
        return;
      }

      // Upload all images first
      const uploadedImageUrls = await uploadAllImages(tempImages);
      
      // Create the final package data with uploaded image URLs
      const packageData = {
        ...values,
        images: uploadedImageUrls,
        locations: values.locations || []
      };

      console.log("Submitting package data:", packageData);

      const url = isEditing 
        ? `/api/packages/${initialValues._id}` 
        : "/api/packages";
      
      const method = isEditing ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(packageData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save package");
      }

      // Only navigate if the request was successful
      router.push("/admin/packages");
      router.refresh();
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err instanceof Error ? err.message : "Failed to save package");
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-light text-[#09163A]">
          {isEditing ? "Edit Package" : "Create New Package"}
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          {isEditing 
            ? "Update your travel package details" 
            : "Add a new travel package to your offerings"}
        </p>
      </div>

      <Formik
        initialValues={{
          ...initialValues,
          locations: initialValues.locations || []
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue, isSubmitting, validateForm, setSubmitting }) => (
          <Form className="space-y-8">
            {/* Image Upload Section */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-[#09163A] mb-4">Package Images</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {tempImages.map((tempImage, index) => (
                    <div key={index} className="relative aspect-[4/3] group">
                      <Image
                        src={tempImage.preview}
                        alt={`Package image ${index + 1}`}
                        fill
                        className="object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => removeTempImage(index)}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <label className="relative aspect-[4/3] border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:border-[#EE1D46] transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleFileSelect(file, setFieldValue);
                        }
                      }}
                      disabled={isLoading || isSubmitting}
                    />
                    <div className="text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <span className="text-sm text-gray-600">
                        {isEditing ? "Add More Images" : "Select Image"}
                      </span>
                    </div>
                  </label>
                </div>
                {tempImages.length === 0 && (
                  <div className="text-sm text-red-600">At least one image is required</div>
                )}
                <p className="text-sm text-gray-500">
                  {isEditing 
                    ? "Add or remove images for your package. The first image will be used as the main image. New images will be uploaded when you submit the form."
                    : "Select at least one image for your package. The first image will be used as the main image. Images will be uploaded when you submit the form."}
                </p>
              </div>
            </div>

            {/* Basic Information */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-[#09163A] mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Package Name</Label>
                  <Field name="name">
                    {({ field }: any) => (
                      <Input
                        {...field}
                        id="name"
                        placeholder="Enter package name"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="name" component="div" className="text-sm text-red-600" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tagline">Tagline</Label>
                  <Field name="tagline">
                    {({ field }: any) => (
                      <Input
                        {...field}
                        id="tagline"
                        placeholder="Enter package tagline"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="tagline" component="div" className="text-sm text-red-600" />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label>Locations</Label>
                  <div className="space-y-4">
                    {values.locations?.map((location, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="flex-1 space-y-2">
                          <Field name={`locations.${index}`}>
                            {({ field }: any) => (
                              <Input
                                {...field}
                                placeholder="Enter location"
                              />
                            )}
                          </Field>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const newLocations = [...(values.locations || [])];
                            newLocations.splice(index, 1);
                            setFieldValue("locations", newLocations);
                          }}
                          className="mt-2 text-red-600 hover:text-red-900"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        const newLocations = [...(values.locations || [])];
                        newLocations.push("");
                        setFieldValue("locations", newLocations);
                      }}
                      className="mt-2 text-[#EE1D46] hover:text-[#EE1D46]/90"
                    >
                      + Add Location
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Field name="duration">
                    {({ field }: any) => (
                      <Input
                        {...field}
                        id="duration"
                        placeholder="e.g., 7 days, 6 nights"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="duration" component="div" className="text-sm text-red-600" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Field name="category">
                    {({ field }: any) => (
                      <Select
                        value={field.value}
                        onValueChange={(value) => setFieldValue("category", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="adventure">Adventure</SelectItem>
                          <SelectItem value="cultural">Cultural</SelectItem>
                          <SelectItem value="luxury">Luxury</SelectItem>
                          <SelectItem value="family">Family</SelectItem>
                          <SelectItem value="honeymoon">Honeymoon</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  </Field>
                  <ErrorMessage name="category" component="div" className="text-sm text-red-600" />
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-[#09163A] mb-4">Pricing</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="pricing.pricePerPerson">Price per Person</Label>
                  <Field name="pricing.pricePerPerson">
                    {({ field }: any) => (
                      <Input
                        {...field}
                        type="number"
                        id="pricing.pricePerPerson"
                        min="0"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="pricing.pricePerPerson" component="div" className="text-sm text-red-600" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pricing.doubleOccupancy">Double Occupancy Price</Label>
                  <Field name="pricing.doubleOccupancy">
                    {({ field }: any) => (
                      <Input
                        {...field}
                        type="number"
                        id="pricing.doubleOccupancy"
                        min="0"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="pricing.doubleOccupancy" component="div" className="text-sm text-red-600" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pricing.earlyBirdDiscount">Early Bird Discount (%)</Label>
                  <Field name="pricing.earlyBirdDiscount">
                    {({ field }: any) => (
                      <Input
                        {...field}
                        type="number"
                        id="pricing.earlyBirdDiscount"
                        min="0"
                        max="100"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="pricing.earlyBirdDiscount" component="div" className="text-sm text-red-600" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pricing.groupDiscount">Group Discount (%)</Label>
                  <Field name="pricing.groupDiscount">
                    {({ field }: any) => (
                      <Input
                        {...field}
                        type="number"
                        id="pricing.groupDiscount"
                        min="0"
                        max="100"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="pricing.groupDiscount" component="div" className="text-sm text-red-600" />
                </div>
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-[#09163A] mb-4">Inclusions & Exclusions</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Inclusions</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Field name="inclusions.flights">
                        {({ field }: any) => (
                          <Checkbox
                            id="inclusions.flights"
                            checked={field.value}
                            onCheckedChange={(checked) => setFieldValue("inclusions.flights", checked)}
                          />
                        )}
                      </Field>
                      <Label htmlFor="inclusions.flights">Flights</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Field name="inclusions.airportTransfers">
                        {({ field }: any) => (
                          <Checkbox
                            id="inclusions.airportTransfers"
                            checked={field.value}
                            onCheckedChange={(checked) => setFieldValue("inclusions.airportTransfers", checked)}
                          />
                        )}
                      </Field>
                      <Label htmlFor="inclusions.airportTransfers">Airport Transfers</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Field name="inclusions.guidedTours">
                        {({ field }: any) => (
                          <Checkbox
                            id="inclusions.guidedTours"
                            checked={field.value}
                            onCheckedChange={(checked) => setFieldValue("inclusions.guidedTours", checked)}
                          />
                        )}
                      </Field>
                      <Label htmlFor="inclusions.guidedTours">Guided Tours</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Field name="inclusions.travelInsurance">
                        {({ field }: any) => (
                          <Checkbox
                            id="inclusions.travelInsurance"
                            checked={field.value}
                            onCheckedChange={(checked) => setFieldValue("inclusions.travelInsurance", checked)}
                          />
                        )}
                      </Field>
                      <Label htmlFor="inclusions.travelInsurance">Travel Insurance</Label>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inclusions.accommodation">Accommodation Type</Label>
                      <Field name="inclusions.accommodation">
                        {({ field }: any) => (
                          <Input
                            {...field}
                            id="inclusions.accommodation"
                            placeholder="Enter accommodation type"
                          />
                        )}
                      </Field>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inclusions.meals">Meals Included</Label>
                      <Field name="inclusions.meals">
                        {({ field }: any) => (
                          <Input
                            {...field}
                            id="inclusions.meals"
                            placeholder="Enter meals included"
                          />
                        )}
                      </Field>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Exclusions</h3>
                  <div className="space-y-2">
                    <Field name="exclusions">
                      {({ field }: any) => (
                        <Textarea
                          {...field}
                          value={values.exclusions?.join("\n")}
                          onChange={(e) => {
                            const exclusions = e.target.value.split("\n").filter(Boolean);
                            setFieldValue("exclusions", exclusions);
                          }}
                          placeholder="Enter exclusions (one per line)"
                          rows={6}
                        />
                      )}
                    </Field>
                  </div>
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-[#09163A] mb-4">Itinerary</h2>
              <div className="space-y-4">
                {values.itinerary?.map((day, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-20 space-y-2">
                      <Label>Day {index + 1}</Label>
                      <Field name={`itinerary.${index}.day`}>
                        {({ field }: any) => (
                          <Input
                            {...field}
                            value={index + 1}
                            readOnly
                            className="bg-gray-50"
                          />
                        )}
                      </Field>
                    </div>
                    <div className="flex-1 space-y-2">
                      <Label>Description</Label>
                      <Field name={`itinerary.${index}.description`}>
                        {({ field }: any) => (
                          <Textarea
                            {...field}
                            rows={2}
                            placeholder="Enter day description"
                          />
                        )}
                      </Field>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const newItinerary = [...(values.itinerary || [])];
                        newItinerary.splice(index, 1);
                        setFieldValue("itinerary", newItinerary);
                      }}
                      className="mt-6 text-red-600 hover:text-red-900"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    const newItinerary = [...(values.itinerary || [])];
                    newItinerary.push({
                      day: newItinerary.length + 1,
                      description: "",
                    });
                    setFieldValue("itinerary", newItinerary);
                  }}
                  className="mt-2 text-[#EE1D46] hover:text-[#EE1D46]/90"
                >
                  + Add Day
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-[#09163A] mb-4">Terms and Conditions</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="termsAndConditions.cancellationPolicy">Cancellation Policy</Label>
                  <Field name="termsAndConditions.cancellationPolicy">
                    {({ field }: any) => (
                      <Textarea
                        {...field}
                        rows={3}
                        placeholder="Enter cancellation policy"
                      />
                    )}
                  </Field>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="termsAndConditions.refundPolicy">Refund Policy</Label>
                  <Field name="termsAndConditions.refundPolicy">
                    {({ field }: any) => (
                      <Textarea
                        {...field}
                        rows={3}
                        placeholder="Enter refund policy"
                      />
                    )}
                  </Field>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="termsAndConditions.passportRequirements">Passport Requirements</Label>
                  <Field name="termsAndConditions.passportRequirements">
                    {({ field }: any) => (
                      <Textarea
                        {...field}
                        rows={3}
                        placeholder="Enter passport requirements"
                      />
                    )}
                  </Field>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="termsAndConditions.visaRequirements">Visa Requirements</Label>
                  <Field name="termsAndConditions.visaRequirements">
                    {({ field }: any) => (
                      <Textarea
                        {...field}
                        rows={3}
                        placeholder="Enter visa requirements"
                      />
                    )}
                  </Field>
                </div>
              </div>
            </div>

            {/* Featured Status */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center space-x-2">
                <Field name="featured">
                  {({ field }: any) => (
                    <Checkbox
                      id="featured"
                      checked={field.value}
                      onCheckedChange={(checked) => setFieldValue("featured", checked)}
                    />
                  )}
                </Field>
                <Label htmlFor="featured">Feature this package on the homepage</Label>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
                <p className="font-medium">Error</p>
                <p className="text-sm">{error}</p>
              </div>
            )}

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                onClick={() => router.back()}
                variant="outline"
                disabled={isLoading || isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="button"
                disabled={isLoading || isSubmitting}
                className="bg-[#EE1D46] hover:bg-[#EE1D46]/90 text-white min-w-[120px]"
                onClick={async () => {
                  console.log("Submit button clicked");
                  try {
                    // Validate form
                    const errors = await validateForm();
                    console.log("Form values:", values);
                    console.log("Temp images:", tempImages);
                    console.log("Validation errors:", errors);

                    if (Object.keys(errors).length > 0) {
                      setError("Please fix the form errors before submitting");
                      return;
                    }

                    // Additional validation for images
                    if (tempImages.length === 0) {
                      setError("At least one image is required");
                      return;
                    }

                    // If validation passes, proceed with submission
                    setSubmitting(true);
                    await handleSubmit(values, { setSubmitting });
                  } catch (err) {
                    console.error("Error during submission:", err);
                    setError(err instanceof Error ? err.message : "Failed to submit form");
                  }
                }}
              >
                {isLoading || isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isEditing ? "Updating..." : "Creating..."}
                  </>
                ) : (
                  isEditing ? "Update Package" : "Create Package"
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
} 