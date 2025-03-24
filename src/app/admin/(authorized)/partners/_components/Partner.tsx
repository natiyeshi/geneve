import AreYouSureDelete from "../../_components/AreYouSureDelete";
import img from "@/../public/assets/admin/template.png";
import { IPartner } from "@/interfaces/partner.interface";
import Image from "next/image";

const Partner = ({
  partner,
  onDelete,
}: {
  partner: IPartner;
  onDelete: Function;
}) => {
  return (
    <div className="bg-white text-adminText flex flex-col gap-2 w-[300px] px-2 py-2 shadow">
      <Image
        src={partner.image}
        className="w-[300px] h-[200px] object-cover "
        width={100}
        height={100}
        unoptimized
        alt="Image"
      />
      <div className="flex justify-center">
        <AreYouSureDelete onDelete={onDelete} />
      </div>
    </div>
  );
};

export default Partner;
