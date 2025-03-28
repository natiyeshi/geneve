"use client";
import { useState } from "react";
import {
  FaCalendar,
  FaCheck,
  FaInstagram,
  FaLocationPin,
} from "react-icons/fa6";
import { IService } from "@/interfaces/service.interface";
import { formatDate, getMaxString } from "@/utils/helper";
import ReadService from "./ReadService";
import AreYouSureDelete from "../../_components/AreYouSureDelete";
import Image from "next/image";

const Service = ({
  service,
  onDelete,
}: {
  service: IService;
  onDelete: Function;
}) => {
  
  return (
    <div className="flex flex-col gap-2 bg-white px-3 py-4 rounded-xl shadow-lg">
      {/* Service Title */}
      <div className="w-full flex">
        <Image
          src={service.image}
          className="w-full h-[180px] object-cover rounded-lg "
          width={100}
          height={100}
          unoptimized
          alt="Image"
        />
      </div>
      <div className="text-lg font-bold">{service.title}</div>

      {/* Location and Date */}
      <div className="flex flex-col justify-between text-sm">
        <div className="flex gap-2 place-items-center">
          <div>{service.client}</div>
        </div>
        <div className="flex gap-2 place-items-center">
          <div className="text-sm">
            {getMaxString(service.desc)}
          </div>
        </div>
      </div>

      {/* Minimum Qualifications */}

      <div className="flex justify-between mt-auto w-full">
        <ReadService data={service} />
        <AreYouSureDelete onDelete={onDelete} />
      </div>
    </div>
  );
};

export default Service;
