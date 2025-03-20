"use client";
import React from "react";
import { ShootingStars } from "./../../ui/shooting-star";
import { StarsBackground } from "./../../ui/stars-background";
export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div
      className="h-[20rem] mx-auto rounded-md  flex flex-col justify-center bg-black  relative w-full">
      <h2
        className="py-6  relative flex-col md:flex-row z-10 text-3xl md:text-4xl  max-w-7xl mx-auto  tracking-tight font-medium bg-clip-text  text-white  flex items-center gap-2 md:gap-8">
        BKM Global: Elevating Your Investment Experience

        
      </h2>
      <p className=" relative  flex-col md:flex-row z-10 text-xl md:text-lg max-w-5xl  mx-auto  tracking-tight font-medium text-center  text-white flex items-center gap-2 ">At BKM Global, we simplify investment management with our cutting‑edge Multi‑Level Management (MLM) platform<br/>delivering innovative, efficient solutions that help Fund Managers and Investors grow their assets.</p>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
