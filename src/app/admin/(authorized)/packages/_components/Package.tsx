"use client";
import React, { useState } from "react";
import { IPackage } from "@/interfaces/package.interface";
import Image from "next/image";
import { FaEdit, FaTrash, FaChevronRight, FaPlane, FaHotel, FaUtensils, FaShieldAlt } from "react-icons/fa";
import EditPackage from "./EditPackage";

interface Props {
  package: IPackage;
  onDelete: (id: string) => void;
  onUpdate: (pkg: IPackage) => void;
}

const Package = ({ package: pkg, onDelete, onUpdate }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/packages/${pkg._id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete package");
      onDelete(pkg._id);
    } catch (error) {
      console.error("Error deleting package:", error);
      alert("Failed to delete package");
    }
    setIsDeleting(false);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <div className="relative h-48 w-full">
          <Image
            src={pkg.images[0]}
            alt={pkg.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{pkg.name}</h3>
              <p className="text-sm text-gray-600">{pkg.tagline}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => setIsDeleting(true)}
                className="text-red-500 hover:text-red-600 transition-colors"
              >
                <FaTrash />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Locations:</span>
              <span>{pkg.locations.join(", ")}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Duration:</span>
              <span>{pkg.duration}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <FaPlane className={pkg.inclusions.flights ? "text-green-500" : "text-gray-400"} />
                <span>Flights</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaHotel className="text-green-500" />
                <span>Accommodation</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaUtensils className="text-green-500" />
                <span>{pkg.inclusions.meals}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaShieldAlt className={pkg.inclusions.travelInsurance ? "text-green-500" : "text-gray-400"} />
                <span>Insurance</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <div className="text-primary font-semibold">
                From ${pkg.pricing.pricePerPerson}
              </div>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-1 text-sm text-primary hover:text-primary/80"
              >
                {showDetails ? "Hide Details" : "View Details"}
                <FaChevronRight className={`text-xs transition-transform ${showDetails ? "rotate-90" : ""}`} />
              </button>
            </div>

            {showDetails && (
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Itinerary Overview</h4>
                  <div className="space-y-2">
                    {pkg.itinerary.slice(0, 3).map((day) => (
                      <div key={day.day} className="text-sm text-gray-600">
                        <span className="font-medium">Day {day.day}:</span> {day.description}
                      </div>
                    ))}
                    {pkg.itinerary.length > 3 && (
                      <div className="text-primary text-xs">
                        +{pkg.itinerary.length - 3} more days
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Exclusions</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {pkg.exclusions.slice(0, 3).map((exclusion, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        {exclusion}
                      </li>
                    ))}
                    {pkg.exclusions.length > 3 && (
                      <li className="text-primary text-xs">
                        +{pkg.exclusions.length - 3} more exclusions
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {pkg.activityIcons.map((icon, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <EditPackage
              package={pkg}
              onUpdate={onUpdate}
              onCancel={() => setIsEditing(false)}
            />
          </div>
        </div>
      )}

      {isDeleting && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Delete Package</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this package? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsDeleting(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Package; 