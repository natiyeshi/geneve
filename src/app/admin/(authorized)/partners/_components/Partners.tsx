"use client";

import { useState } from "react";
import { IPartner } from "@/interfaces/partner.interface";
import AddPartner from "./AddPartner";
import Partner from "./Partner";
import { useToast } from "@/hooks/use-toast";

interface Props {
  initialPartners: IPartner[];
}

const Partners = ({ initialPartners }: Props) => {
  const [partners, setPartners] = useState<IPartner[]>(initialPartners);

  const { toast } = useToast();
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/partner/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setPartners((test) => test.filter((data) => data._id != id));
        return true;
      }
      toast({
        description: "Error deleting partner ",
      });
    } catch (error) {
      toast({
        description: "Error deleting partner ",
      });
    }
    return false;
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <div className="text-2xl font-black">Partners</div>
        <AddPartner setPartners={setPartners} />
      </div>
      <div className=" text-adminText capitalize">Available testimonies</div>
      <div className="grid grid-cols-3 mt-8 gap-5 ">
        {partners.map((partner) => (
          <Partner
            key={partner._id}
            partner={partner}
            onDelete={() => handleDelete(partner._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
