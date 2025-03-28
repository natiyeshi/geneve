"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  email: string;
  password: string;
}

// Validation schema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm: React.FC = () => {
  const initialValues: FormValues = {
    email: "",
    password: "",
  };
  const [error, setError] = useState("");

  const onSubmit = async (values: FormValues) => {
    setError("");
    try {
      console.log("Form data:", values);
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ formData: values }),
      });

      if (!res.ok) {
        const response = await res.json();
        setError(response.message);
        return;
      }
      alert("Works");
      setError("");
    } catch (err) {
      setError("something goes wrong");
    }
  };

  return (
    <div className="w-full flex bg-gray-800 text-white h-[100vh]">
      <div className="mx-auto mt-32 px-12 h-fit pt-5 bg-gray-900">
        <h1 className="text-2xl mb-12">Login Form</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="min-w-[400px] text-black outline-none rounded mt-2 px-2 py-1 "
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-orange-400 text-xs"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="min-w-[400px] text-black outline-none rounded mt-2 px-2 py-1 "
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-orange-400 text-xs"
                />
              </div>

              <div className="mt-6 w-full">
                <button
                  type="submit"
                  className="bg-blue-700 px-2 py-1 rounded"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </div>
              <div className="text-orange-700 text-sm my-3 capitalize">
                {error}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
