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
import { Button } from "@/components/ui/button";
import { CiRead } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { formatDate } from "@/utils/helper";
import { IMessage } from "@/interfaces/message.interface";

const ReadMessage = ({ data }: { data: IMessage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger>
        <div className="py-1 duration-200 hover:bg-blue-600/20 px-3 rounded flex gap-2 justify-center place-items-center text-blue-600 flex-gap-1 cursor-pointer">
          <CiRead />
          <div>Read</div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex justify-between place-items-center border-b pb-2">
            <div>Message</div>
            <IoCloseSharp
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-4 pt-5">
            <div>
              {formatDate(
                data.createdAt ? new Date(data.createdAt) : new Date(Date.now())
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div>Name</div>
              <div className="font-semibold text-black break-all">
                {data.name}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div>Email</div>
              <div className="font-semibold text-black break-all">
                {data.email}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Phone Number</div>
              <div className="font-semibold text-black break-all">
                {data.phoneNumber}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Message</div>
              <div className="font-semibold text-black break-all">
                {data.message}
              </div>
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

export default ReadMessage;
