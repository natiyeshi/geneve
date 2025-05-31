"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PackageForm from "../../_components/PackageForm";
import { PackageInf } from "@/app/packages/data";

export default function EditPackagePage() {
  const { id } = useParams();
  const [packageData, setPackageData] = useState<PackageInf | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await fetch(`/api/packages/${id}`);
        if (!response.ok) throw new Error("Failed to fetch package");
        const data = await response.json();
        setPackageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch package");
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, [id]);

  if (loading) {
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        </div>
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
            Package not found
          </div>
        </div>
      </div>
    );
  }

  return <PackageForm initialValues={packageData} isEditing />;
} 