"use client";

import { useState } from "react";
import { IService } from "@/interfaces/service.interface";
import AddService from "./AddService";
import Service from "./Service";
import { useToast } from "@/hooks/use-toast";

interface Props {
  initialServices: IService[];
}

const Services = ({ initialServices }: Props) => {
  const [services, setServices] = useState<IService[]>(initialServices);

  const { toast } = useToast();
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/service/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setServices((test) => test.filter((data) => data._id != id));
        return true;
      }
      toast({
        description: "Error deleting service ",
      });
    } catch (error) {
      toast({
        description: "Error deleting service ",
      });
    }
    return false;
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <div className="text-2xl font-black">Services</div>
        <AddService setServices={setServices} />
      </div>
      <div className=" text-adminText capitalize">Available testimonies</div>
      <div className="grid grid-cols-3 mt-8 gap-5 ">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            onDelete={() => handleDelete(service._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
