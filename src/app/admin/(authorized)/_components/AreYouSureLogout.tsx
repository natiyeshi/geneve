"use client";
import React, { useState } from "react";
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
import { MdDelete } from "react-icons/md";
import { signOut } from "next-auth/react";
export interface Props {
  title: string;
  desc: string;
  action: Function;
  cancel: Function;
}

const AreYouSureLogout = ({ setIsLogout, isLogout }: any) => {
  const handleLogout = () => {
    signOut({ callbackUrl: "/" }); // Redirect to homepage after logout
  };
  return (
    <AlertDialog open={isLogout} onOpenChange={setIsLogout}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to Logout ?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button onClick={handleLogout}>Logout</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AreYouSureLogout;
