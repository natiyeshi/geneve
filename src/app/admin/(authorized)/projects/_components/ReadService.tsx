"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CiRead } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { formatDate } from "@/utils/helper";
import { IService } from "@/interfaces/service.interface";
import Image from "next/image";

const ReadService = ({ data }: { data: IService }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger>
        <div className="py-1 duration-200 hover:bg-blue-600/20 px-3 rounded flex gap-2 justify-center place-items-center text-blue-600 flex-gap-1 cursor-pointer">
          <CiRead />
          <div>Read</div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-h-[95vh] overflow-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex justify-between place-items-center border-b pb-2">
            <div>Projects</div>
            <IoCloseSharp
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-4 pt-5">
            <div className="w-full flex flex-col gap-4">
              <div>
                {formatDate(
                  data.createdAt
                    ? new Date(data.createdAt)
                    : new Date(Date.now())
                )}
              </div>
              <div className="flex flex-col gap-2">
                <div>Name</div>
                <div className="font-semibold text-black break-all">
                  {data.name}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>Service</div>
                <div className="font-semibold text-black break-all">
                  {data.service}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>Type</div>
                <div className="font-semibold text-black break-all">
                  {data.type}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>Client</div>
                <div className="font-semibold text-black break-all">
                  {data.client}
                </div>
              </div>
            </div>
            <div className="w-full flex">
              <Image
                src={data.image}
                className="w-full h-full object-cover "
                width={100}
                height={100}
                unoptimized
                alt="Image"
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ReadService;
