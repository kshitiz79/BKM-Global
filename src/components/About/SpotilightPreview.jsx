import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./../../ui/Spotlight";
// import { FollowerPointerCard } from "@/components/ui/following-pointer"



export function SpotlightPreview() {
  return (
    <div
      className="relative flex py-20 w-full overflow-hidden rounded-md bg-white/[0.96] antialiased md:items-center md:justify-center">
<div
    className={cn(
        "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
        "[background-image:linear-gradient(to_right,#f2f2f2_1px,transparent_1px),linear-gradient(to_bottom,#f2f2f2_1px,transparent_1px)]"
    )}
/>


      <Spotlight className="-top-10 left-0 md:-top-8 md:left-0" fill="white" />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1
          className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-black md:text-7xl">
          Our Principles
        </h1>
        <p
          className="mx-10 mt-4 text-center text-2xl font-normal text-neutral-950 ">
         We are guided by a set of core principles that define who we are and what we stand for. These principles ensure that we never lose sight of 
         our mission and remain dedicated to serving our clients. First, we adopt a client-centric approach where your goals become our goals. We represent your voice, your needs, and your investment objectives in every decision we make, prioritizing your interests above all else.

        </p>
        
      </div>
    </div>
  );
}
