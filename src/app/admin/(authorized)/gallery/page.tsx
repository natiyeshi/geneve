import React from "react";
import AdminNav from "../_components/AdminNav";
import Addgallery from "./_components/AddGallery";
import Gallery from "./_components/Gallery";
import Gallerys from "./_components/Gallerys";
import { IGallery } from "@/interfaces/gallery.interface";

const Page = async () => {
  let gallerys: IGallery[] = [];
  gallerys = await getGallerys();
  return (
    <div className="w-full px-6 pt-2 h-full overflow-auto pb-12">
      <AdminNav />
      <Gallerys initialGallerys={gallerys} />
      
    </div>
  );
};

async function getGallerys(): Promise<IGallery[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const gallerys: IGallery[] = await res.json();
    return gallerys;
  } catch (error) {
    return [];
  }
}

export default Page;
