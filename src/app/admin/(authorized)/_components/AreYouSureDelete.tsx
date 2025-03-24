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
import { useToast } from "@/hooks/use-toast";

const AreYouSureDelete = ({ onDelete }: { onDelete: Function }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  async function deleteData() {
    try {
      setLoading(true);
      const res = await onDelete();
      if (res) {
        toast({
          description: "Item Deleted Succesfully!",
        });
      }
      setIsOpen(res);
    } catch (error) {
      setIsOpen(false);
    }
    setLoading(false);
  }
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger>
        <div className="py-1 duration-200 hover:bg-orange-600/20 px-3 rounded flex gap-2 justify-center place-items-center text-orange-600 flex-gap-1 cursor-pointer">
          <MdDelete />
          <div>Delete</div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to Delete this item ?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button onClick={deleteData} disabled={loading}>
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AreYouSureDelete;
