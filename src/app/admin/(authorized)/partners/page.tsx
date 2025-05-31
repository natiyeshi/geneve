import React from "react";
import AdminNav from "../_components/AdminNav";
import Addpartner from "./_components/AddPartner";
import Partner from "./_components/Partner";
import Partners from "../partners/_components/Partners";
import { IPartner } from "@/interfaces/partner.interface";

const Page = async () => {
  let partners: IPartner[] = [];
  partners = await getPartners();
  return (
    <div className="w-full px-6 pt-2 h-full overflow-auto pb-12">
      <AdminNav />
      <Partners initialPartners={partners} />
    </div>
  );
};

async function getPartners(): Promise<IPartner[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/partner`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const partners: IPartner[] = await res.json();
    return partners;
  } catch (error) {
    return [];
  }
}

export default Page;
