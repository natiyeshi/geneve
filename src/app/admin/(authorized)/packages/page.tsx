"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Package, Plus, Edit, Trash2, Hotel, Utensils, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PackageInf } from "@/app/packages/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PackagesPage() {
  const [packages, setPackages] = useState<PackageInf[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState("featured");

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await fetch('/api/packages');
      if (!response.ok){ throw new Error('Failed to fetch packages')};
      const data = await response.json();
      setPackages(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this package?')) return;

    try {
      const response = await fetch(`/api/packages/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete package');
      
      setPackages(packages.filter(pkg => pkg._id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete package');
    }
  };

  // Sort packages based on selected option
  const sortedPackages = [...packages].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return (a.pricing?.pricePerPerson ?? 0) - (b.pricing?.pricePerPerson ?? 0);
      case "price-high":
        return (b.pricing?.pricePerPerson ?? 0) - (a.pricing?.pricePerPerson ?? 0);
      case "duration-short":
        const aDays = parseInt(a.duration?.split(" ")[0] ?? "0");
        const bDays = parseInt(b.duration?.split(" ")[0] ?? "0");
        return aDays - bDays;
      case "duration-long":
        const cDays = parseInt(a.duration?.split(" ")[0] ?? "0");
        const dDays = parseInt(b.duration?.split(" ")[0] ?? "0");
        return dDays - cDays;
      case "featured":
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  if (loading) {
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-gray-200 rounded"></div>
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

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-serif font-light text-[#09163A]">Travel Packages</h1>
            <p className="mt-2 text-sm text-gray-600">
              Manage your travel packages and offerings
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select
                className="border border-gray-300 rounded-sm p-2 text-sm"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration-short">Duration: Shortest to Longest</option>
                <option value="duration-long">Duration: Longest to Shortest</option>
              </select>
            </div>
            <Link href="/admin/packages/new">
              <Button className="bg-[#EE1D46] hover:bg-[#EE1D46]/90 text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Package
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPackages.map((pkg) => (
            <Card key={pkg._id} className="overflow-hidden hover-lift">
              <div className="relative aspect-[4/3]">
                <Image
                  src={pkg.images?.[0] || "/placeholder.svg"}
                  alt={pkg.name || "Package Image"}
                  fill
                  className="object-cover"
                />
                {pkg.featured && (
                  <Badge className="absolute top-4 right-4 bg-[#EE1D46]">Featured</Badge>
                )}
                {pkg.inclusions?.flights && (
                  <Badge className="absolute top-4 left-4 bg-[#EE1D46]">Flights Included</Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-[#09163A]">{pkg.name}</CardTitle>
                <CardDescription>
                  <p className="text-[#EE1D46] font-medium mb-2">{pkg.duration}</p>
                  <p className="text-gray-600 italic">{pkg.tagline}</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {pkg.locations?.map((location, index) => (
                      <Badge key={index} variant="outline" className="border-[#09163A] text-[#09163A]">
                        {location}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {pkg.inclusions?.accommodation && (
                      <div className="flex items-center">
                        <Hotel className="h-4 w-4 text-[#EE1D46] mr-2" />
                        <span className="text-sm">{pkg.inclusions.accommodation}</span>
                      </div>
                    )}
                    {pkg.inclusions?.meals && (
                      <div className="flex items-center">
                        <Utensils className="h-4 w-4 text-[#EE1D46] mr-2" />
                        <span className="text-sm">{pkg.inclusions.meals}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div>
                  <span className="text-sm text-gray-500">From</span>
                  <p className="text-lg font-serif text-[#09163A]">
                    ${pkg.pricing?.pricePerPerson?.toLocaleString() ?? 0} per person
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link href={`/admin/packages/${pkg._id}/edit`}>
                    <Button variant="outline" className="border-[#09163A] text-[#09163A] hover:bg-[#09163A] hover:text-white">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    onClick={() => handleDelete(pkg._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 