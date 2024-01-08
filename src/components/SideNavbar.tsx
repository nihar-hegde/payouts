import { ArrowBigDown, Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const SideNavbar = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2  rounded-tr-lg rounded-br-lg">
      <div className="flex flex-row gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-white">
          <h1>Nihar</h1>
          <p>view store</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <ArrowBigDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>LogOut</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex grow flex-row justify-between space-x-1 md:flex-col md:space-x-0  ">
        <NavLinks />
      </div>
    </div>
  );
};
