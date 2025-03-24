import AreYouSureDelete from "../../_components/AreYouSureDelete";
import img from "@/../public/assets/admin/template.png";
import { IGallery } from "@/interfaces/gallery.interface";
import Image from "next/image";

const Gallery = ({
  gallery,
  onDelete,
}: {
  gallery: IGallery;
  onDelete: Function;
}) => {
  return (
    <div className="bg-white text-adminText flex flex-col gap-2 w-[300px] px-2 py-2 shadow">
      <Image
        src={gallery.image}
        className="w-[300px] h-[200px] object-cover "
        width={100}
        height={100}
        unoptimized
        alt="Image"
      />
      <p>{gallery.caption}</p>
      <div className="flex justify-center">
        <AreYouSureDelete onDelete={onDelete} />
      </div>
    </div>
  );
};

export default Gallery;
