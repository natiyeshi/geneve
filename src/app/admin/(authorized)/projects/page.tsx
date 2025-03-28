import React from "react";
import AdminNav from "../_components/AdminNav";
import Services from "./_components/Services";
import { IService } from "@/interfaces/service.interface";

const Page = async () => {
  let services: IService[] = [];
  services = await getServices();
  return (
    <div className="w-full px-6 pt-2 h-full overflow-auto pb-12">
      <AdminNav />
      <Services initialServices={services} />
    </div>
  );
};

async function getServices(): Promise<IService[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const services: IService[] = await res.json();
    return services;
  } catch (error) {
    return [];
  }
}

export default Page;
