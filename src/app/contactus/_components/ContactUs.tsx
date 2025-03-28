"use client";
import { Section } from "@/components/custom/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <Section childClassName="flex mb-32 flex-col relative">
      <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:px-4 px-12 max-md:gap-10">
        <div>
          <h1 className="text-[3rem] font-semibold">
            Contact <span className="text-primary">Us</span>
          </h1>
          <div className="mt-4">Get in Touch Now</div>
          <ContactForm />
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
