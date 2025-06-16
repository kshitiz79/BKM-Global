"use client";
import React from "react";
import { ShootingStars } from "./../../ui/shooting-star";
import { StarsBackground } from "./../../ui/stars-background";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mx-auto py-12 flex flex-col justify-center bg-black relative w-full ">
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl max-w-7xl mx-auto tracking-tight font-light bg-clip-text text-white flex items-center gap-2 md:gap-8 text-center md:text-left">
        BKM Global: Elevating Your Investment Experience
      </h2>
      <p className="relative flex-col md:flex-row z-10 text-lg md:text-xl max-w-6xl mx-auto tracking-tight font-light  text-white flex items-center gap-2 mt-4 px-8 text-justify">
        At BKM Global, we simplify investment management with our cutting‑edge Multi‑Level Management (MLM) platform
        <br />
        delivering innovative, efficient solutions that help Fund Managers and Investors grow their assets.
      </p>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
