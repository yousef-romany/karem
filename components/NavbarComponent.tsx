"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import logo from "@/public/mainLogo.png";
import { LanguageSwitch } from "./LanguageSwitch";
import RevalHorezontail from "./animation/RevalHorezontail";
import { memo } from "react";

const NavbarComponent = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="bg-success">
      <NavbarContent className="basis-1/5 mobile:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              loading="lazy"
              alt={"logo"}
              className="max-w-[50px] h-auto"
              src={logo}
            />
          </NextLink>
        </NavbarBrand>
        <ul className="labtop:flex tablet:flex mobile:hidden gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <RevalHorezontail>
                <NextLink href={item.href}>
                  <h1 className="text-primary">{item.label}</h1>
                </NextLink>
              </RevalHorezontail>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        <NavbarItem className="labtop:flex tablet:flex mobile:flex gap-2">
          <LanguageSwitch />
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="labtop:hidden tablet:hidden mobile:flex basis-1 pl-4">
          <NavbarMenuToggle className="!text-white" />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig?.navMenuItems?.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <RevalHorezontail>
                <Link color={"primary"} href={item?.href} size="lg">
                  {item?.label}
                </Link>
              </RevalHorezontail>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
export default memo(NavbarComponent);
