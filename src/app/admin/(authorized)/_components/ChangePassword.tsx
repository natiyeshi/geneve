"use client";

import React from "react";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoCloseSharp } from "react-icons/io5";

const ChangePassword = ({ setIsChangePassword, isChangePassword }: any) => {
  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("New password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
      .required("Confirm your new password"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values); // Handle form submission
      isChangePassword(false);
      formik.resetForm();
    },
  });

  return (
    <AlertDialog open={isChangePassword} onOpenChange={setIsChangePassword}>
      <AlertDialogContent className="min-w-[600px]">
        <form onSubmit={formik.handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex justify-between place-items-center border-b pb-2">
              <div>Add Service</div>
              <IoCloseSharp
                className="cursor-pointer"
                onClick={() => setIsChangePassword(false)}
              />
            </AlertDialogTitle>
            <AlertDialogDescription className="flex gap-5 pb-14 pt-5">
              <div className="flex flex-col gap-2 w-full">
                {/* Service Name Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="currentPassword"
                    className="text-black font-semibold"
                  >
                    Current Password
                  </label>
                  <Input
                    id="currentPassword"
                    name="currentPassword"
                    placeholder="Current Password"
                    value={formik.values.currentPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="password"
                  />
                  {formik.touched.currentPassword &&
                  formik.errors.currentPassword ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.currentPassword}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="newPassword"
                    className="text-black font-semibold"
                  >
                    New Password
                  </label>
                  <Input
                    id="newPassword"
                    name="newPassword"
                    placeholder="New Password"
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="password"
                  />
                  {formik.touched.newPassword && formik.errors.newPassword ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.newPassword}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="newPassword"
                    className="text-black font-semibold"
                  >
                    Confirm Password
                  </label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="password"
                  />
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => isChangePassword(false)}>
              Cancel
            </AlertDialogCancel>
            <Button type="submit">Continue</Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ChangePassword;
