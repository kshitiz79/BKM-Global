"use client";

import React from "react";

export default function Forex() {
  return (
    <div className="bg-black text-white">
    <section className="flex flex-col md:flex-row justify-between h-[80vh] max-w-7xl px-8 mx-auto ">
      {/* Left: Image (1/3) */}
      <div className=" md:w-1/3 relative">
        <img
          src="/abour.png"
          alt="Currency market graphic"
          className="object-cover w-full h-96 mt-32 "
        />
      </div>

      {/* Right: Text (2/3) */}
      <div className="w-full md:w-2/3 flex items-center p-8 bg-black text-white">
        <div className="space-y-6 text-justify">
          <h1 className="text-4xl md:text-4xl  ">
            Applying Strategies in the Currency Market
          </h1>
          <p className="text-lg text-gray-100 leading-relaxed">
            The Forex market is one of the world’s most dynamic and liquid financial arenas—open 24/5, it offers unparalleled trading opportunities. 
          </p>
          <p className="text-lg text-gray-100 leading-relaxed">
            <strong>Technical analysis</strong> empowers traders to spot trends, define entry/exit levels, and make data‑driven decisions. Meanwhile, staying on top of economic releases, geopolitical shifts, and policy moves ensures you adapt swiftly to changing market conditions.
          </p>
          <p className="text-lg text-gray-100 leading-relaxed">
            With high leverage comes high risk: robust risk management is non‑negotiable for sustainable success.
          </p>
          <p className="text-lg text-gray-100 leading-relaxed">
            With high leverage comes high risk: robust risk management is non‑negotiable for sustainable .
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}
