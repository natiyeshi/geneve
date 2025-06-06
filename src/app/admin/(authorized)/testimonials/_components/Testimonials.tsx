"use client";

import { useState } from "react";
import { ITestimonial } from "@/interfaces/testimoial.interface";
import AddTestimony from "./AddTestimony";
import Testimony from "./Testimony";
import { useToast } from "@/hooks/use-toast";

interface Props {
  initialTestimonials: ITestimonial[];
}

const Testimonials = ({ initialTestimonials }: Props) => {
  const [testimonials, setTestimonials] =
    useState<ITestimonial[]>(initialTestimonials);

  const { toast } = useToast();
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/testimonial/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setTestimonials((test) => test.filter((data) => data._id != id));
        return true;
      }
    } catch (error) {
      toast({
        description: "Error deleting testimonial ",
      });
    }
    return false;
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <div className="text-2xl font-black">Testimonials</div>
        <AddTestimony setTestimonials={setTestimonials} />
      </div>
      <div className=" text-adminText capitalize">Available testimonies</div>
      <div className="grid grid-cols-3 mt-8 gap-5 ">
        {testimonials.map((testimonial) => (
          <Testimony
            key={testimonial._id}
            testimony={testimonial}
            onDelete={() => handleDelete(testimonial._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
