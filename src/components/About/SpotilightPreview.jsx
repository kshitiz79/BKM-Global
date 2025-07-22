import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./../../ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="relative flex py-20 w-full overflow-hidden rounded-md bg-white/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#f2f2f2_1px,transparent_1px),linear-gradient(to_bottom,#f2f2f2_1px,transparent_1px)]"
        )}
      />

      <Spotlight className="-top-10  left-0 md:-top-8 md:left-0" fill="white" />
      <div>
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-500 to-neutral-900 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          How we work
        </h1>
        <p className="mx-6 mt-6 text-center text-lg font-normal text-neutral-950 md:text-xl lg:mx-10">
        We help you diversify your portfolio.Our team is filled with experts in their fields.We deliver one of a kind service to clients from every market conditions .
Whether you are looking to enhance your portfolio or just trying to plan for the future ,we are ready to guide you.
Our thorough knowledge of international investment options will create and maintain wealth for generations to come
        </p>
      </div>
      {/* Our Vision Section */}
      <div className="relative z-10 mx-auto w-full  p-4 pt-10">
        <h2 className="text-center text-3xl font-bold text-neutral-900 mb-4">Our Vision</h2>
        <p className="mx-6 text-center text-lg font-normal text-neutral-950 md:text-xl lg:mx-10   justify-center">
          As an independent Investment management firm, BKM GLOBAL is dedicated to providing unbiased financial advice to our clients. Our goal is to create guidance that will enhance your financial future through a range of wealth management services, portfolio management, financial planning, and accounting services Since there is no plan which will work for everyone, our team creates unique management objectives for each of our clients.
        </p>
      </div>
      </div>
    
    </div>
  );
}