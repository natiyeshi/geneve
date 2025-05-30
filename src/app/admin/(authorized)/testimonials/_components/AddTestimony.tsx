"use client";

import React from "react";
import { useFormik } from "formik";
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
// import { testimonialValidation } from "@/validation/testimonial.validation";
import { ITestimonial } from "@/interfaces/testimoial.interface";
import { useToast } from "@/hooks/use-toast";

const AddTestimony = ({ setTestimonials }: { setTestimonials: Function }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [error, setError] = React.useState<null | string>(null);
  const [loading, setLoading] = React.useState(false);
  const initialValues = {
    name: "",
    message: "",
  };
  const { toast } = useToast();
  const formik = useFormik({
    initialValues,
    // validationSchema: testimonialValidation,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await fetch("/api/testimonial", {
          method: "POST",
          body: JSON.stringify({ formData: values }),
        });

        if (!res.ok) {
          const response = await res.json();
          setError(response.message);
        } else {
          const response = await res.json();
          setTestimonials((test: ITestimonial[]) => [
            ...test,
            response.newTestimony,
          ]);
          formik.resetForm();
          setError("");
          setIsOpen(false);
          toast({
            description: "Testimonial Added Succesfully",
          });
        }
      } catch (err) {
        console.log(err);
        setError("something goes wrong");
      }
      setLoading(false);
    },
  });

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger className="flex cursor-pointer gap-2 place-items-center font-semibold duration-200 hover:bg-gray-200 rounded-xl px-2">
        <IoMdAddCircle />
        <div>Add Testimony</div>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[600px]">
        <form onSubmit={formik.handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex justify-between place-items-center border-b pb-2">
              <div>Add Testimony</div>
              <IoCloseSharp
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </AlertDialogTitle>
            <AlertDialogDescription className="flex gap-5 pb-14 pt-5">
              <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-black font-semibold">
                    Company/Person Name {error}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Testimony Name"
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

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-black font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="border px-1 py-1"
                    placeholder="Message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.message && formik.errors.message ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>
                {error && <div className="text-red-500 text-sm">{error}</div>}
              </div>
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

export default AddTestimony;
