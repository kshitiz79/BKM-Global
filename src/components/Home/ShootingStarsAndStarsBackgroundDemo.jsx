"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShootingStars } from "./../../ui/shooting-star";
import { StarsBackground } from "./../../ui/stars-background";
import { HoverEffect } from "./../../ui/card-hover-effect";

export function ShootingStarsAndStarsBackgroundDemo() {
 

  const projects = [
    {
      title: "Investment Management",
      description:
        "Investment Management page, where we offer comprehensive asset management solutions tailored to meet the diverse needs of our clients",
      link: "/services-page/fund-management",
    },
    {
      title: "Market Alerts",
      description:
        "We specialize in delivering precise trading signals that empower investors to make informed decisions and optimize their portfolios for success.",
      link: "/services-page/trading-signals",
    },
    {
      title: "Uplearn",
      description:
        "We believe in the power of uplearning outdated practices and embracing new strategies to achieve financial success.",
      link: "/services-page/uplearn",
    },
    {
      title: "Algo Trading Software",
      description:
        "Algo trading involves creating and implementing a predefined set of rules and instructions that automate the trading process, eliminating the need for manual intervention.",
      link: "/services-page/uplearn#algo-trading",
    },
  ];

  return (
    <div className="app-container top-0 sticky relative w-full mx-auto overflow-hidden rounded-t-4xl bg-white shadow-2xl py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Heading and description */}
      <div className="relative z-10 px-3 flex flex-col justify-center max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black text-left max-w-6xl mx-auto">
          <span className="text-blue-900 font-md">BKM Global</span>: Comprehensive global trading solutions
        </h2>
        <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 text-black text-left max-w-6xl mx-auto">
        At BKM Global, We live and breathe the markets. Since 2009, we've educated traders to help them learn about the markets.
We provide solutions to different types of worldwide trading problems in best way possible.Our Algo trading offers precision, speed,
and automation, enhancing trading efficiency and reducing human error
        </p>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ShootingStars />
        <StarsBackground />
      </div>

      {/* Hover Cards */}
      <div className="relative z-10 max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-10 text-base">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}