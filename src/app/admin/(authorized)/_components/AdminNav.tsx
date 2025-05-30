"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Menu from "./Menu";
const AdminNav = () => {
  const pathname = usePathname();
  const routes = pathname.split("/");
  return (
    <div className="w-full pt-2 flex justify-between sticky top-0 bg-white bg-opacity-60 backdrop-blur-sm rounded-xl  place-items-start  px-2 py-2">
      <div className="flex gap-2 capitalize text-sm text-adminText my-auto">
        {routes.map((d: string, ind: number) => {
          return (
            <div key={ind}>
              {d} {ind !== 0 && ind !== routes.length - 1 && "/"}
            </div>
          );
        })}
      </div>
      <div className="flex gap-5  place-items-center ">
        <Menu />
      </div>
    </div>
  );
};

export default AdminNav;
