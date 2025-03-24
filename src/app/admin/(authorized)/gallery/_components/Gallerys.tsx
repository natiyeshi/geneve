"use client";

import { useState } from "react";
import { IGallery } from "@/interfaces/gallery.interface";
import AddGallery from "./AddGallery";
import Gallery from "./Gallery";
import { useToast } from "@/hooks/use-toast";

interface Props {
  initialGallerys: IGallery[];
}

const Gallerys = ({ initialGallerys }: Props) => {
  const [gallerys, setGallerys] = useState<IGallery[]>(initialGallerys);

  const { toast } = useToast();
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/gallery/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setGallerys((test) => test.filter((data) => data._id != id));
        return true;
      }
      toast({
        description: "Error deleting gallery ",
      });
    } catch (error) {
      toast({
        description: "Error deleting gallery ",
      });
    }
    return false;
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <div className="text-2xl font-black">Gallerys</div>
        <AddGallery setGallerys={setGallerys} />
      </div>
      <div className=" text-adminText capitalize">Available testimonies</div>
      <div className="grid grid-cols-3 mt-8 gap-5 ">
        {gallerys.map((gallery) => (
          <Gallery
            key={gallery._id}
            gallery={gallery}
            onDelete={() => handleDelete(gallery._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallerys;
