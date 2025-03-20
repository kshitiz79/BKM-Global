"use client";

import React from "react";
import { InfiniteMovingCards } from "./../../ui/infinite-moving-cards";

export function MarqueeCards() {
  return (
    <div className="bg-black text-white py-20">
      <h1 className="md:text-4xl text-2xl text-center  text-white uppercase mb-10">WHY TO CHOOSE US</h1>
    <div
      className=" rounded-md flex flex-col antialiased   dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "At BKM Global, we prioritize strategies that offer high-potential returns. Our platform allows Fund Managers to optimize their trading strategies, aiming for maximum profitability while managing risk effectively.",

    title: "High Potential Returns",
  },
  {
    quote:
      "We are committed to maintaining full transparency in everything we do. Investors can monitor their accounts in real-time, ensuring they are always informed about their investments' performance.",
    
    title: "Transparency",
  },
  {
    quote: "Our referral system empowers users to grow their networks and increase their earnings. By referring new investors or Fund Managers to our platform, you can benefit from additional rewards.",
  
    title: "Power of Referral",
  },
  {
    quote:
      "Consistency is key to successful investing. Our platform supports Fund Managers in maintaining consistent performance, ensuring steady growth and reliable returns for investors.",

    title: "Consistency",
  },
  {
    quote:
      "We strive to provide a user-friendly and hassle-free environment. Our platform is designed to be intuitive, making it easy for both novice and experienced investors to navigate and manage their investments.",

    title: "Hassle-Free Environment",
  },
];

export default MarqueeCards;
