"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShootingStars } from "./../../ui/shooting-star";
import { StarsBackground } from "./../../ui/stars-background";
import { HoverEffect } from "./../../ui/card-hover-effect";

export function ShootingStarsAndStarsBackgroundDemo() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, y: 0 });
    } else {
      controls.start({ opacity: 0, x: -100, y: 100 });
    }
  }, [controls, inView]);

  const projects = [
    {
      title: "Investment Management",
      description:
        "Investment Management page, where we offer comprehensive asset management solutions tailored to meet the diverse needs of our clients",
      link: "",
    },
    {
      title: "Market Alerts",
      description:
        "We specialize in delivering precise trading signals that empower investors to make informed decisions and optimize their portfolios for success.",
      link: "",
    },
    {
      title: "Uplearn",
      description:
        "We believe in the power of uplearning outdated practices and embracing new strategies to achieve financial success.",
      link: "",
    },
  ];

  return (



    <div
  ref={ref}
  animate={controls}

  className="app-container top-0 sticky relative w-full mx-auto overflow-hidden rounded-t-4xl bg-white shadow-2xl py-12 px-4 sm:px-6 md:px-12 "
>

      {/* Heading and description */}
      <div className="relative z-10 flex flex-col justify-center max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-black text-left max-w-6xl mx-auto">
          <span className="text-blue-900 font-bold">BKM Global</span>: Elevating Your Investment Experience
        </h2>
        <p className="text-base sm:text-lg md:text-xl mt-4 text-black text-left max-w-6xl mx-auto">
          At BKM Global, we simplify investment management with our cutting‑edge Multi‑Level Management (MLM) platform, delivering innovative, efficient solutions that help Fund Managers and Investors grow their assets.
        </p>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ShootingStars />
        <StarsBackground />
      </div>

      {/* Hover Cards */}
      <div className="relative z-10 max-w-6xl mx-auto mt-4 text-lg">
        <HoverEffect items={projects} />
      </div>
    </div>

  );
}
