"use client";

import React, { useState, useRef } from "react";
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
import { Input } from "@/components/ui/input";
import { IoMdAddCircle } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import Image from "next/image";
import { uploadImage } from "@/utils/helper";
import { useToast } from "@/hooks/use-toast";
import { IPartner } from "@/interfaces/partner.interface";

const Addpartner = ({ setPartners }: { setPartners: Function }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { toast } = useToast();
  const handleSubmit = async () => {
    setLoading(true);
    const { url, error: e } = await uploadImage(image);
    if (e) {
      setLoading(false);
      return alert("Unable to upload image!");
    }
    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        body: JSON.stringify({ formData: { image: url } }),
      });

      if (!res.ok) {
        const response = await res.json();
        setError(response.message);
      } else {
        const response = await res.json();
        setPartners((test: IPartner[]) => [...test, response.newPartner]);
        setError("");
        setIsOpen(false);
        toast({
          description: "Partners Added Succesfully",
        });
      }
    } catch (err) {
      setError("something goes wrong");
    }
    setLoading(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the image
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger className="flex cursor-pointer gap-2 place-items-center font-semibold duration-200 hover:bg-gray-200 rounded-xl px-2">
        <IoMdAddCircle />
        <div>Add Partner</div>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[600px]">
        <form onSubmit={(e) => e.preventDefault()}>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex justify-between place-items-center border-b pb-2">
              <div>Add Partner</div>
              <IoCloseSharp
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col w-full pb-14 pt-5">
              <div className="flex flex-col gap-2 w-full">
                <input
                  ref={fileInputRef}
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {imagePreview ? (
                  <div className="mt-4">
                    <Image
                      src={imagePreview}
                      width={100}
                      height={100}
                      alt="Selected"
                      className="w-40 h-40 object-cover mx-auto"
                    />
                  </div>
                ) : (
                  <div
                    onClick={handleButtonClick}
                    className="w-full flex mx-2 my-2 cursor-pointer hover:bg-gray-300 duration-200 rounded border py-12 border-dashed h-full"
                  >
                    <div className="flex flex-col m-auto">
                      <CiImageOn className="text-[70px] mx-auto" />
                      <div className="text-sm mx-auto">Upload Image</div>
                    </div>
                  </div>
                )}
              </div>
              {error && <div className="text-red-500 text-sm">{error}</div>}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            {imagePreview && (
              <Button variant={"outline"} onClick={handleButtonClick}>
                Change Image
              </Button>
            )}
            <Button
              disabled={!imagePreview || loading ? true : false}
              type="submit"
              onClick={handleSubmit}
            >
              Upload
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Addpartner;
