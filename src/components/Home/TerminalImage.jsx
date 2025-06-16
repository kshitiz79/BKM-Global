"use client";

import Image from "next/image";

export default function TerminalImage() {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4 md:px-0">
      {/* Navbar (optional based on screenshot) */}
      <div className="absolute top-4 left-6">
        <Image src="/tab.webp" alt="Olymptrade Logo" width={140} height={40} />
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl md:text-5xl font-semibold mb-6">
        Olymptrade — Your <br className="hidden md:block" /> trading platform
      </h1>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
        <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 font-medium rounded-full transition">
          Open live account
        </button>
        <button className="text-green-400 hover:underline">
          Open demo account &gt;
        </button>
      </div>

      {/* Chart Image */}
      <div className="relative w-full max-w-6xl px-4">
        <Image
          src="/images/trading-chart.png" // Replace with actual image path
          alt="Trading Chart"
          width={1200}
          height={600}
          className="rounded-xl shadow-2xl"
        />
        <div className="absolute bottom-6 right-6 text-right max-w-sm text-sm md:text-base">
          <p className="text-white font-semibold">
            Master the markets with a caring broker that supports your financial ambitions.
          </p>
        </div>
      </div>
    </section>
  );
}
