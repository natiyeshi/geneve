"use client";
import React, { useState } from "react";
import { IPackage } from "@/interfaces/package.interface";
import Package from "./Package";
import AddPackage from "./AddPackage";
import { FaPlus } from "react-icons/fa";

interface Props {
  initialPackages: IPackage[];
}

const Packages = ({ initialPackages }: Props) => {
  const [packages, setPackages] = useState<IPackage[]>(initialPackages);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddPackage = (newPackage: IPackage) => {
    setPackages([newPackage, ...packages]);
    setIsAdding(false);
  };

  const handleDeletePackage = (id: string) => {
    setPackages(packages.filter((pkg) => pkg._id !== id));
  };

  const handleUpdatePackage = (updatedPackage: IPackage) => {
    setPackages(
      packages.map((pkg) => (pkg._id === updatedPackage._id ? updatedPackage : pkg))
    );
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Packages</h1>
          <p className="text-gray-600">Manage your travel packages</p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <FaPlus />
          Add Package
        </button>
      </div>

      {isAdding && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <AddPackage
              onAdd={handleAddPackage}
              onCancel={() => setIsAdding(false)}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <Package
            key={pkg._id}
            package={pkg}
            onDelete={handleDeletePackage}
            onUpdate={handleUpdatePackage}
          />
        ))}
      </div>

      {packages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No packages found. Add your first package!</p>
        </div>
      )}
    </div>
  );
};

export default Packages; 