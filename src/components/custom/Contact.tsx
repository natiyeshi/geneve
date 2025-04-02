"use client";

import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useToast } from "@/hooks/use-toast"; // Adjust import based on your folder structure
import { Button } from "@/components/ui/button";
import { BiMessageRounded, BiChevronUp } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { messageValidation } from "@/validation/message.validation";

const Contact = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Validation Schema

  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any
  ) => {
    setSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ formData: values }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setIsOpen(false);
      toast({
        title: "Message sent successfully!",
        description: "We will get back to you shortly.",
      });
      resetForm();
    } catch (error) {
      toast({
        title: "Error",
        description: (error as any).message || "Failed to send message.",
        variant: "destructive",
        
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Scroll event listener to show "Scroll to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    const topElement = document.getElementById("top");
    topElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative  z-[100]">
      {/* Floating Message Button */}
      <Button
        className="fixed bottom-5 right-5 bg-primary text-white rounded-full w-14 h-14 shadow-lg hover:bg-yellow-500 focus:outline-none flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? (
          <BiMessageRounded className="duration-500 text-[50px]" />
        ) : (
          <IoCloseSharp className="duration-500 text-[50px]" />
        )}
      </Button>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <Button
          className="fixed bottom-20 right-5  bg-gray-200  rounded-full w-14 h-14 shadow-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center"
          onClick={scrollToTop}
        >
          <BiChevronUp className="text-[30px] text-background" />
        </Button>
      )}

      {/* Message Form */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-96 max-md:w-72 bg-gray-200 p-5 rounded-xl shadow-lg max-w-full">
          <h2 className="text-3xl font-bold mb-6">
            Send Us a <span className="text-primary">Message</span>.
          </h2>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
              phoneNumber: "",
            }}
            validationSchema={messageValidation}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-3">
                {/* Name Field */}
                <div>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Full-Name"
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-primary focus:border-primary"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <Field
                    name="phoneNumber"
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-primary focus:border-primary"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-primary focus:border-primary"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <Field
                    name="message"
                    as="textarea"
                    placeholder="Message"
                    rows={2}
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-primary focus:border-primary"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white p-3 rounded-lg hover:bg-yellow-500 focus:outline-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default Contact;
