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
        <div className="flex flex-col ">
          <h3 className="text-2xl my-auto font-semibold pt4">
            Visit Our Manufacturing{" "}
            <span className="text-primary">Facility</span>
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.2825213069964!2d38.7733142!3d9.035338699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8fb0e34da7d7%3A0xae0f0274e20aec2f!2sGaber%20Garment!5e1!3m2!1sen!2set!4v1742934079021!5m2!1sen!2set"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.550654696594!2d38.78916470000001!3d9.004263500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8535663b99a5%3A0xd03967e33c4794a6!2sGaber%20Wear!5e1!3m2!1sen!2set!4v1742934056685!5m2!1sen!2set"
            width="600"
            height="400"
            loading="lazy"
            title="Google Maps"
            className="m-auto"
          ></iframe>
        </div>
        <div className="my-auto ps-10">
          <h3 className="text-2xl font-semibold">
            Visit Our <span className="text-primary"> Shoping</span>
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
