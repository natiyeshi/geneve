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
import { IBlog } from "@/interfaces/blog.interface";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic"; // Import dynamic
import "react-quill/dist/quill.snow.css"; // Keep styles

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); // Load only on client

const AddBlog = ({ setBlogs }: { setBlogs: Function }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState<{
    topic: string;
    desc: string;
    content: string;
  }>({
    topic: "",
    desc: "",
    content: "",
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!formData.topic || !formData.desc || !formData.content || !image) {
      setError("All fields are required");
      return;
    }
    setLoading(true);
    const { url, error: e } = await uploadImage(image);
    if (e) {
      setLoading(false);
      return alert("Unable to upload image!");
    }
    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        body: JSON.stringify({ formData: { ...formData, image: url } }),
      });

      if (!res.ok) {
        const response = await res.json();
        alert("error");
        console.log(response);
        setError(response.message);
      } else {
        const response = await res.json();
        setBlogs((prev: IBlog[]) => [...prev, response.newBlog]);
        setError(null);
        setIsOpen(false);
        toast({ description: "Blog Added Successfully" });
      }
    } catch (err) {
      setError("Something went wrong");
    }
    setLoading(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger className="flex cursor-pointer gap-2 place-items-center font-semibold duration-200 hover:bg-gray-200 rounded-xl px-2">
        <IoMdAddCircle />
        <div>Add Blogs</div>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[600px] max-h-[95vh] overflow-auto">
        <form onSubmit={(e) => e.preventDefault()}>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex justify-between place-items-center border-b pb-2">
              <div>Add Blog</div>
              <IoCloseSharp
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col gap-3 w-full pb-14 pt-5">
              <Input
                name="topic"
                placeholder="Topic"
                value={formData.topic}
                onChange={handleChange}
                required
              />
              <Input
                name="desc"
                placeholder="Short Description"
                value={formData.desc}
                onChange={handleChange}
                required
              />
              <ReactQuill
                // theme="snow"
                value={formData.content}
                onChange={(v) => setFormData((d) => ({ ...d, content: v }))}
              />
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
              {error && <div className="text-red-500 text-sm">{error}</div>}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            {imagePreview && (
              <Button variant={"outline"} onClick={handleButtonClick}>
                Change Image
              </Button>
            )}
            <Button disabled={loading} type="submit" onClick={handleSubmit}>
              {loading ? "Uploading..." : "Upload"}
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddBlog;
