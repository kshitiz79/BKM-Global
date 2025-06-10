
"use client";
import { HoverEffect } from "./../../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="bg-black">
    <div className="max-w-7xl mx-auto px-4">
      <HoverEffect items={projects} />
    </div>

    </div>
  );
}
export const projects = [
  {
    title: "Investment Management",
    description:
      "Investment Management page, where we offer comprehensive asset management solutions tailored to meet the diverse needs of our clients",
    link: "",
  },
  {
    title: "Market Alerts",
    description:
      "we specialize in delivering precise trading signals that empower investors to make informed decisions and optimize their portfolios for success..",
    link: "",
  },
  {
    title: "Uplearn",
    description:
      "we believe in the power of uplearning outdated practices and embracing new strategies to achieve financial success.",
    link: "",
  },
 
];
