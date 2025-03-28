"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdSettingsSuggest } from "react-icons/md";
import AreYouSureLogout from "./AreYouSureLogout";
import ChangePassword from "./ChangePassword";
import { useState } from "react";

const Menu = () => {
  const [isLogout, setIsLogout] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);

  return (
    <>
      <AreYouSureLogout setIsLogout={setIsLogout} isLogout={isLogout} />
      <ChangePassword
        setIsChangePassword={setIsChangePassword}
        isChangePassword={isChangePassword}
      />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <MdSettingsSuggest className="text-3xl cursor-pointer " />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setIsLogout(true)}>
            <div>Logout</div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsChangePassword(true)}>
            <div>Change Password</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Menu;
