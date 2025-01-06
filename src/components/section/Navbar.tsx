"use client";
import React from "react";
import Image from "next/image";
import GradualSpacing from "../ui/gradual-spacing";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuList } from "@/constant";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { VisuallyHidden } from "../ui/visually-hidden";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header
      className={`sticky z-20 top-0 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border`}
    >
      <div className="sm:container px-3">
        <div className="flex justify-between items-center w-full py-2 font-poppins ">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-1">
              <Image
                src="/img/logo.png"
                width={300}
                height={300}
                alt="Picture of the author"
                loading="lazy"
                className="h-fit w-8"
              />
              <GradualSpacing
                className="text-sm -tracking-[0.25em] md:text-lg lg:text-[22px] font-bold md:-tracking-[0.2em] lg:-tracking-[0.19em]  text-primary "
                text="Sickstem informasi'24"
              />
            </div>
          </div>
          <nav
            className={`items-center md:flex  font-poppins md:gap-2 lg:gap-4 transition-all duration-200 hidden`}
          >
            {menuList.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className={`md:text-sm font-medium cursor-pointer hover:text-primary ${
                  pathname === item.href
                    ? "underline-offset-4 underline"
                    : "text-primary"
                }`}
              >
                {item.text}
              </Link>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                  <VisuallyHidden />
                </SheetTitle>
                <SheetDescription>
                  <VisuallyHidden />
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-2 py-6">
                {menuList.map((item, _) => (
                  <SheetTrigger asChild key={_}>
                    <Link
                      href={item.href}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                      prefetch={false}
                    >
                      {item.text}
                    </Link>
                  </SheetTrigger>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
