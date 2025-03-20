"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./../ui/nav-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 w-full mx-auto z-50 shadow rounded-3xl  dark:bg-black dark:border-white/[0.2] bg-white ",
        className
      )}
    >
      <div className="flex items-center justify-between px-24">

      <div className="logo">
          <img src="/logo.png" alt="Logo" className="h-20 ml-8 w-auto" />
        </div>


        <div>
        <Menu setActive={setActive}>

        <Link href="/" passHref>
    <MenuItem item="Home" />
  </Link>

          
  <Link href="/about-page" passHref>
    <MenuItem item="About" />
  </Link>
          <MenuItem setActive={setActive} active={active} item="Services">
  {/* 2-column grid with gap for spacing */}
  <div className="text-sm grid grid-cols-2 gap-4 p-4">
    <ProductItem
      title="Algochurn"
      href="https://algochurn.com"
      src="https://assets.aceternity.com/demos/algochurn.webp"
      description="Prepare for tech interviews like never before."
    />
    <ProductItem
      title="Tailwind Master Kit"
      href="https://tailwindmasterkit.com"
      src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
      description="Production ready Tailwind css components for your next project"
    />
    <ProductItem
      title="Moonbeam"
      href="https://gomoonbeam.com"
      src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
      description="Never write from scratch again. Go from idea to blog in minutes."
    />
    <ProductItem
      title="Rogue"
      href="https://userogue.com"
      src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
      description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
    />
  </div>
</MenuItem>


          <MenuItem item="Blog">
           
          </MenuItem>
        </Menu>
        {/* Logo placed on the right */}
        </div>
      </div>
    </div>
  );
}
