"use client";

import React, { useState, useRef, useEffect } from "react";
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
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface BlogFormProps {
  initialBlog?: IBlog; // optional initial blog (for edit mode)
  isEdit?: boolean; // toggle add/edit mode
  onEdit?: (updatedBlog: IBlog) => void; // callback (optional) to update parent state on edit
  setBlogs?: (fn: (prev: IBlog[]) => IBlog[]) => void; // (optional) callback (for add) to update parent state
}

const BlogForm = ({ initialBlog, isEdit = false, onEdit, setBlogs }: BlogFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(initialBlog?.image || null);
  const [formData, setFormData] = useState<{ topic: string; desc: string; content: string; }>({
    topic: initialBlog?.topic || "",
    desc: initialBlog?.desc || "",
    content: initialBlog?.content || "",
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { toast } = useToast();

  // (Optional) Reset form on modal open (if not edit) or update (if edit) if initialBlog changes
  useEffect(() => {
    if (isOpen) {
      if (isEdit && initialBlog) {
         setFormData({ topic: initialBlog.topic, desc: initialBlog.desc, content: initialBlog.content });
         setImagePreview(initialBlog.image);
      } else if (!isEdit) {
         setFormData({ topic: "", desc: "", content: "" });
         setImagePreview(null);
      }
    }
  }, [isOpen, isEdit, initialBlog]);

  const handleSubmit = async () => {
    if (!formData.topic || !formData.desc || !formData.content) {
      setError("All fields are required");
      return;
    }
    if (!isEdit && !image) {
      setError("Image is required for new blog");
      return;
    }
    setLoading(true);
    let imageUrl = initialBlog?.image; // (edit) use old image if no new image
    if (image) {
       const { url, error: e } = await uploadImage(image);
       if (e) {
         setLoading(false);
         alert("Unable to upload image!");
         return;
       }
       imageUrl = url;
    }
    const payload = { topic: formData.topic, desc: formData.desc, content: formData.content, image: imageUrl };
    const url = isEdit ? `/api/blog/${initialBlog?._id}` : "/api/blog";
    const method = isEdit ? "PUT" : "POST";
    try {
      const res = await fetch(url, { method, body: JSON.stringify({formData : payload}) });
      if (!res.ok) {
         const response = await res.json();
         alert("Error: " + (response.message || ""));
         setError(response.message || "Something went wrong");
      } else {
         const response = await res.json();
         if (isEdit && onEdit) {
           onEdit({...response.blog,_id : initialBlog});
           if (typeof window !== 'undefined') {
             window.location.reload();
           }
         } else if (setBlogs) {
            setBlogs((prev) => [...prev, response.newBlog]);
         }
         setError(null);
         setIsOpen(false);
         toast({ description: isEdit ? "Blog Updated Successfully" : "Blog Added Successfully" });
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

  const handleButtonClick = () => { fileInputRef.current?.click(); };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      {!isEdit && (
         <AlertDialogTrigger className="flex cursor-pointer gap-2 place-items-center font-semibold duration-200 hover:bg-gray-200 rounded-xl px-2">
            <IoMdAddCircle />
            <div>Add Blog</div>
         </AlertDialogTrigger>
      )}
      {isEdit && (
         <AlertDialogTrigger asChild>
            <Button variant="outline" className="border-[#09163A] text-[#09163A] hover:bg-[#09163A] hover:text-white">
               Edit
            </Button>
         </AlertDialogTrigger>
      )}
      <AlertDialogContent className="min-w-[600px] max-h-[95vh] overflow-auto">
        <form onSubmit={(e) => e.preventDefault()}>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex justify-between place-items-center border-b pb-2">
              {isEdit ? "Edit Blog" : "Add Blog"}
              <IoCloseSharp className="cursor-pointer" onClick={() => setIsOpen(false)} />
            </AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col gap-3 w-full pb-14 pt-5">
              <Input name="topic" placeholder="Topic" value={formData.topic} onChange={handleChange} required />
              <Input name="desc" placeholder="Short Description" value={formData.desc} onChange={handleChange} required />
              <ReactQuill value={formData.content} onChange={(v) => setFormData((d) => ({ ...d, content: v }))} />
              <input ref={fileInputRef} hidden type="file" accept="image/*" onChange={handleImageChange} />
              {imagePreview ? (
                <div className="mt-4">
                  <Image src={imagePreview} width={100} height={100} alt="Selected" className="w-40 h-40 object-cover mx-auto" />
                </div>
              ) : (
                <div onClick={handleButtonClick} className="w-full flex mx-2 my-2 cursor-pointer hover:bg-gray-300 duration-200 rounded border py-12 border-dashed h-full">
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
            {imagePreview && ( <Button variant="outline" onClick={handleButtonClick}> Change Image </Button> )}
            <Button className="bg-primary hover:bg-primary/60" disabled={loading} type="submit" onClick={handleSubmit}>
              {loading ? (isEdit ? "Updating..." : "Uploading...") : (isEdit ? "Update" : "Upload")}
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BlogForm;
