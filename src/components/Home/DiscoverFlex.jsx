"use client";

import Image from "next/image";

export default function DiscoverFlex() {
  return (
    <section className="relative bg-black text-white py-20 app-container ">
      {/* Background SVG bars */}
      <div className="absolute inset-0 flex justify-end items-center">
        <Image
          src="/bars-bg.svg"
          alt="Background bars"
          width={600}
          height={600}
          className="opacity-10 mr-10 hidden md:block"
        />
      </div>

      <div className="app-container relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Discover <span className="text-green-500">Flex</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-md mb-4">
            Take control of your trades with flexible trading mechanics
          </p>
          <a
            href="#"
            className="text-green-500 font-medium hover:underline inline-flex items-center gap-2"
          >
            About Flex <span className="text-xl">›</span>
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/hand.webp"
            alt="Hand holding phone"
            width={400}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
