"use client";

import React from "react";

const services = [
  {
    number: "01",
    title: "Why Gold Still Glitters: A Beginner’s Guide to Gold Trading",
    description:
      "Gold has remained a trusted financial asset for centuries, serving as a store of value and a popular trading commodity. Unlike jewelry or coins, gold trading profits from price movements via ETFs, futures, and spot markets, offering protection against inflation and portfolio diversification.",
  },
  {
    number: "02",
    title: "From Bullion to Bits: Exploring Types of Gold Investments",
    description:
      "Invest in gold through coins, bars, ETFs, digital gold, or futures. Physical gold provides security but requires storage, while ETFs offer easy access. Digital platforms simplify investing, and leveraged futures provide high-reward opportunities for advanced traders.",
  },
  {
    number: "03",
    title: "What Drives Gold Prices? Understanding Market Forces",
    description:
      "Gold prices are influenced by inflation, interest rates, U.S. dollar strength, and geopolitical uncertainty. Central bank policies and investor sentiment also shape trends, enabling traders to anticipate movements with informed strategies.",
  },
  {
    number: "04",
    title: "Getting Started with Gold Trading: Platforms and Strategies",
    description:
      "Start with a reliable platform, exploring spot trading, ETFs, or CFDs. Use trend-following or breakout strategies with technical charts and economic calendars. Begin small and stay consistent for success in gold trading.",
  },
  {
    number: "05",
    title: "Golden Risks: What Every Trader Must Know",
    description:
      "Gold trading involves volatility, emotional decisions, and leverage risks. Futures and options can amplify losses, while fake platforms and illiquid assets pose pitfalls. Use strategies and verified tools to manage risks effectively.",
  },
  {
    number: "06",
    title: "Is Gold Trading Right for You?",
    description:
      "Gold suits long-term stability or short-term gains. Conservative investors can use it for downturn protection, while active traders engage with the market. Passive investors may prefer ETFs or digital gold for a hands-off approach.",
  },
];

export default function ServicesGrid() {
  return (
    <div className="bg-white text-gray-900 py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-5xl font-md mb-6 ">
          Blog Series Title
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-gray-700">
          The Golden Guide — Mastering Gold Trading
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-200"
          >
            {/* Number Badge */}
            <div className="absolute -top-4 left-6 bg-blue-900 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
              {service.number}
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              {service.description}
            </p>
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}