import React from "react";
import AdminNav from "../_components/AdminNav";
import Packages from "./_components/Packages";
import { IPackage } from "@/interfaces/package.interface";

async function getPackages() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/packages`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch packages");
    return res.json();
  } catch (error) {
    console.error("Error fetching packages:", error);
    return [];
  }
}

const Page = async () => {
  let packages: IPackage[] = [];
  packages = await getPackages();
  
  return (
    <div className="w-full px-6 pt-2 h-full overflow-auto pb-12">
      <AdminNav />
      <Packages initialPackages={packages} />
    </div>
  );
};

export default Page; 