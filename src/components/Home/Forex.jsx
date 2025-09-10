"use client";

import React from "react";

export default function Forex() {
  return (
    <div className="relative bg-white text-black py-12 bg-cover bg-center min-h-screen rounded-t-3xl">
      {/* Optional dark overlay */}
     

      <section className="relative z-10 md:max-w-7xl px-8 mx-auto py-16 flex flex-col md:flex-row gap-10">
        {/* Left: Video (1/2) */}
        <div className="md:w-1/2 h-[600px] flex items-center">
          <div className="w-full h-full">
            <video
              src="/hand-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full cover rounded-xl"
            />
          </div>
        </div>

        {/* Right: Text (1/2) */}
        <div className="md:w-1/2 h-[600px] flex items-center text-black ">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl  ">
              Applying Strategies in the Currency Market
            </h1>
            <p className="text-[1.2rem] md:text-[1.4rem] text-justify text-black">
              The Forex market is one of the world’s most dynamic and liquid financial arenas—open 24/5, it offers unparalleled trading opportunities.
            </p>
            <p className="text-[1.2rem] md:text-[1.4rem] text-justify">
              <strong>Technical analysis</strong> empowers traders to spot trends, define entry/exit levels, and make data‑driven decisions. Meanwhile, staying on top of economic releases, geopolitical shifts, and policy moves ensures you adapt swiftly to changing market conditions.
            </p>
            <p className="text-[1.2rem] md:text-[1.4rem] text-justify">
              With high leverage comes high risk: robust risk management is non‑negotiable for sustainable success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
