"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";

const ClientSessionProvider = ({ children }: any) => {
  useEffect(() => {
    function a() {
      if (typeof document !== "undefined") {
        AOS.init();
      }
    }
    a();
  }, []);
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <Toaster />
    </>
  );
};

export default ClientSessionProvider;
