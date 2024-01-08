"use client";
import { cn } from "@/lib/utils";
import { GrHomeRounded } from "react-icons/gr";
import { BsBox2 } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LuMegaphone } from "react-icons/lu";
import { BsBarChart } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { PiNavigationArrowLight } from "react-icons/pi";
import { TbDiscount2Off } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";
import { IoColorPaletteOutline } from "react-icons/io5";
import { PiLightning } from "react-icons/pi";

const links = [
  {
    name: "Home",
    href: "/",
    icon: <GrHomeRounded />,
  },
  {
    name: "Orders",
    href: "/",
    icon: <BsBox2 />,
  },
  {
    name: "Products",
    href: "/",
    icon: <CiBoxes />,
  },
  {
    name: "Delivery",
    href: "/",
    icon: <CiDeliveryTruck />,
  },
  {
    name: "Marketing",
    href: "/",
    icon: <LuMegaphone />,
  },
  {
    name: "Analytics",
    href: "/",
    icon: <BsBarChart />,
  },
  {
    name: "Payments",
    href: "/",
    icon: <MdOutlinePayments />,
  },
  {
    name: "Tools",
    href: "/",
    icon: <PiNavigationArrowLight />,
  },
  {
    name: "Discounts",
    href: "/",
    icon: <TbDiscount2Off />,
  },
  {
    name: "Audience",
    href: "/",
    icon: <IoPeopleOutline />,
  },
  {
    name: "Appiarance",
    href: "/",
    icon: <IoColorPaletteOutline />,
  },
  {
    name: "Plugins",
    href: "/",
    icon: <PiLightning />,
  },
];
const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            href={link.href}
            key={link.href}
            className={cn(
              "flex  grow items-center justify-center gap-4 p-1 text-sm text-zinc-400 font-medium  md:flex-none md:justify-start md:px-3",
              {
                " text-white": pathname === link.href,
              }
            )}
          >
            {link.icon}
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
