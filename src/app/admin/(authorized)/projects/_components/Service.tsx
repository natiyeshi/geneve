import React from "react";
import temporary from "@/../public/assets/admin/template.png";
import Image from "next/image";
import { MdEdit } from "react-icons/md";
import AreYouSureDelete from "../../_components/AreYouSureDelete";
import { IService } from "@/interfaces/service.interface";
import { getMaxString } from "@/utils/helper";
import ReadService from "./ReadService";

const Service = ({
  service,
  onDelete,
}: {
  service: IService;
  onDelete: Function;
}) => {
  return (
    <div className="p-2 shadow-lg w-full flex flex-col gap-2 bg-white">
      <Image
        src={service.image!}
        alt="image"
        width={100}
        height={100}
        className="rounded  w-full h-[240px] object-cover"
        unoptimized
      />
      <div className="flex flex-col">
        <div className="font-semibold break-all">{service.name}</div>
        <div className="text-adminText break-all">
          {getMaxString(service.service)}
        </div>
      </div>
      <div className="flex justify-between w-full mt-auto">
        <ReadService data={service} />
        <AreYouSureDelete onDelete={onDelete} />
      </div>
    </div>
  );
};

export default Service;
