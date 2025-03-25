"use client";
import { Section } from "@/components/custom/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
type FormData = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};
export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Section childClassName="flex mb-32 flex-col relative">
      <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:px-4 px-12 max-md:gap-10">
        <div>
          <h1 className="text-[3rem] font-semibold">
            Contact <span className="text-primary">Us</span>
          </h1>
          <div className="mt-4">Get in Touch Now</div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 flex flex-col gap-3"
          >
            <div>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-sm text-orange-500">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-sm text-orange-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <Input id="phone" {...register("phone")} />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <Input
                id="subject"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <span className="text-sm text-orange-500">
                  {errors.subject.message}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <Textarea
                id="message"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-sm text-orange-500">
                  {errors.message.message}
                </span>
              )}
            </div>
            <Button type="submit" className="w-fit mt-3">
              Submit
            </Button>
          </form>
        </div>
        <div className="flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112484839!2d144.9630579153167!3d-37.81410797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b6b1a1a1a1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633072800000!5m2!1sen!2sau"
            width="600"
            height="400"
            loading="lazy"
            title="Google Maps"
            className="m-auto"
          ></iframe>
        </div>
      </div>
      <div className="grid grid-cols-2 max-md:flex max-md:flex-col-reverse max-md:px-4 px-12 max-md:gap-10 mt-14">
        <div className="flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112484839!2d144.9630579153167!3d-37.81410797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b6b1a1a1a1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633072800000!5m2!1sen!2sau"
            width="600"
            height="400"
            loading="lazy"
            title="Google Maps"
            className="m-auto"
          ></iframe>
        </div>
        <div className="my-auto ps-10">
          <h3 className="text-2xl font-semibold">
            Visit Our Manufacturing{" "}
            <span className="text-primary">Facility</span>
          </h3>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex gap-2 items-center">
              <MdOutlineMail size={20} className="text-primary " />
              <div className="">Info@gaber-wear.com</div>
            </div>
            <div className="flex gap-2 items-center">
              <FaPhoneAlt size={20} className="text-primary " />
              <div className="">+251966205139</div>
            </div>
            <div className="flex gap-2 items-center">
              <FaPhoneAlt size={20} className="text-primary " />
              <div className="">+251953206159</div>
            </div>
            <div className="flex gap-2 items-center">
              <IoLocationOutline size={20} className="text-primary " />
              <div className="">Addis Ababa, Ethiopia</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
