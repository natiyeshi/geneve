"use client";

import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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
import { serviceValidation } from "@/validation/service.validation";
import { IService } from "@/interfaces/service.interface";

// Validation Schema

const AddService = ({ setServices }: { setServices: Function }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const initialValues = {
    title: "",
    client: "",
    desc: "",
  };
  const { toast } = useToast();

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);
      let uri = null;
      if (image) {
        const { url, error: e } = await uploadImage(image);
        if (e) {
          setLoading(false);
          return alert(`Unable to upload image! ${e}`);
        }
        uri = url;
      } else {
        setLoading(false);
        return alert(`Image is required! `);
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/service`,
        {
          method: "POST",
          body: JSON.stringify({ formData: { image: uri, ...values } }),
        }
      );

      if (!res.ok) {
        const response = await res.json();
        setError(response.message);
      } else {
        const response = await res.json();
        setServices((data: IService[]) => [...data, response.newService]);
        setError("");
        setIsOpen(false);
        formik.resetForm();
        setImage(null);
        setImagePreview(null);
        toast({
          description: "Service Added Succesfully",
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

  const formik = useFormik({
    initialValues,
    validationSchema: serviceValidation,
    onSubmit: handleSubmit,
  });

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger className="flex cursor-pointer gap-2 place-items-center font-semibold duration-200 hover:bg-gray-200 rounded-xl px-2">
        <IoMdAddCircle />
        <div>Add Service</div>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[600px] max-h-[95vh] overflow-auto">
        <form onSubmit={formik.handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex justify-between place-items-center border-b pb-2">
              <div>Add Project</div>
              <IoCloseSharp
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col gap-5 pb-14 pt-5">
              <div className="flex flex-col gap-2 w-full">
                {/* Service Name Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="serviceName"
                    className="text-black font-semibold"
                  >
                    Project Title
                  </label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Project Title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.title && formik.errors.title ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.title}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="serviceName"
                    className="text-black font-semibold"
                  >
                    Client Name
                  </label>
                  <Input
                    id="client"
                    name="client"
                    placeholder="Client Name"
                    value={formik.values.client}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.title && formik.errors.title ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.client}
                    </div>
                  ) : null}
                </div>

                {/* Description Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="description"
                    className="text-black font-semibold"
                  >
                    Description
                  </label>
                  <textarea
                    id="desc"
                    name="desc"
                    className="border px-1 py-1"
                    placeholder="Description"
                    value={formik.values.desc}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.desc && formik.errors.desc ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.desc}
                    </div>
                  ) : null}
                </div>
                <div className="text-sm text-red-500">{error}</div>
              </div>

              {/* Upload Image Section */}

              <input
                ref={fileInputRef}
                hidden
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {imagePreview ? (
                <div className="mt-4 flex w-full">
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
                  className="flex cursor-pointer w-full"
                >
                  <div className="w-full flex mx-2 my-2 border border-dashed py-10 h-full">
                    <div className="flex flex-col m-auto">
                      <CiImageOn className="text-[70px] mx-auto" />
                      <div className="text-sm mx-auto">Upload Image</div>
                    </div>
                  </div>
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <Button type="submit" disabled={loading}>
              Continue
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddService;
