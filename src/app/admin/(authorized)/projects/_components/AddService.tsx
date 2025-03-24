"use service";

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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoMdAddCircle } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";

import Image from "next/image";
import { uploadImage } from "@/utils/helper";
import { useToast } from "@/hooks/use-toast";
// import { serviceValidation } from "@/validation/service.validation";
import { IService } from "@/interfaces/service.interface";

// Validation Schema
// export const types = [
//   "Wind Farms and Building Projects",
//   "Beverage,Cement and Textile Projects",
//   "Industry Parks and Other Industrial Projects",
//   "Glass and Bottle Projects",
//   "Hospital and School Projects",
//   "Road & Bridge, Air port and Railway",
//   "Dam, and Irrigation Projects",
//   "Towns Water & Waste water projects",
//   "Research Projects & Under water Drilling",
//   "Potash Mineral Development Project",
//   "Transmission Line & Sub-Station",
// ];
export const types = [
  "Building Projects",
  "Wind Farms",
  "Beverage Industry",
  "Cement Projects",
  "Industry Parks and Other Industrial Projects",
  "Hospital and Schools Projects",
  "Road & Bridge, Air port and Railway",
  "Dam and Irrigation Projects",
  "Research Projects & Under water Drilling",
  "Potash Mineral Development Projects",
  "Transmission Line & Sub-Station",
];

const AddService = ({ setServices }: { setServices: Function }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const initialValues = {
    name: "",
    service: "",
    type: "other",
    client: "",
    image: "",
  };
  const [ongoing, setOngoing] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    const values = formik.values;
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
          body: JSON.stringify({
            formData: { ...values, type: t,ongoing, image: uri },
          }),
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
      console.log(err, "++++++++++");
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
    onSubmit: handleSubmit,
  });

  const [t, setT] = useState("other");

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger className="flex cursor-pointer gap-2 place-items-center font-semibold duration-200 hover:bg-gray-200 rounded-xl px-2">
        <IoMdAddCircle />
        <div>Add Projects</div>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[600px] max-h-[95vh] overflow-auto">
        <form onSubmit={formik.handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex justify-between place-items-center border-b pb-2">
              <div>Add Service</div>
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
                    Project Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Project Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                {/* type Input */}
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="serviceName"
                    className="text-black font-semibold"
                  >
                    Type (optional)
                  </label>
                  <Select onValueChange={(value) => setT(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Type" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      <SelectGroup>
                        {types.map((t, ind) => (
                          <SelectItem key={ind} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {formik.touched.type && formik.errors.type ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.type}
                    </div>
                  ) : null}
                </div>

                {/* Service Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="serviceName"
                    className="text-black font-semibold"
                  >
                    Service
                  </label>
                  <Input
                    id="service"
                    name="service"
                    placeholder="Service"
                    value={formik.values.service}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.service && formik.errors.service ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.service}
                    </div>
                  ) : null}
                </div>

                {/* Client Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="clientname"
                    className="text-black font-semibold"
                  >
                    Client
                  </label>
                  <Input
                    id="client"
                    name="client"
                    placeholder="client"
                    value={formik.values.client}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.client && formik.errors.client ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.client}
                    </div>
                  ) : null}
                </div>
              </div>
              {/* ongoing Input */}
              <div className="items-top flex mt-2 space-x-2">
                <Checkbox
                  onClick={() => setOngoing((d) => !d)}
                  id="terms1"
                  checked={ongoing}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Is this project on going ?
                  </label>
                  {ongoing && (
                    <p className="text-sm text-muted-foreground">
                      This project will be marked as an ongoing project!
                    </p>
                  )}
                </div>
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
              {error && <div className="text-red-500 text-sm">{error}</div>}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <Button type="submit" onClick={handleSubmit} disabled={loading}>
              Continue
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddService;
