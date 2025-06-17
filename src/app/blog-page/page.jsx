"use client";

import React from "react";

const services = [
  {
    number: "01",
    title: "Why Gold Still Glitters: A Beginner’s Guide to Gold Trading",
    description:
      "Gold has remained a trusted financial asset for centuries, and today it serves not only as a store of value but also as a popular trading commodity. Unlike purchasing jewelry or coins for personal use, gold trading involves profiting from its price movements through instruments like ETFs, futures, and spot markets. Investors are drawn to gold because it offers protection against inflation, a hedge during economic crises, and diversification for their portfolios.",
  },
  {
    number: "02",
    title: "From Bullion to Bits: Exploring Types of Gold Investments",
    description:
      "There are many ways to invest in gold today—ranging from traditional options like coins and bars to modern alternatives such as ETFs, digital gold, and futures. Physical gold offers tangible security but requires safe storage, while financial products like ETFs allow easy access to gold’s market value without physical ownership. Digital platforms make investing seamless, and for advanced traders, leveraged instruments like futures and options offer high-reward opportunities.",
  },
  {
    number: "03",
    title: " What Drives Gold Prices? Understanding the Market Forces",
    description:
      "Gold prices are shaped by a combination of global economic trends and market psychology. Inflation, interest rates, currency strength (especially the U.S. dollar), and geopolitical uncertainty all impact gold’s value. Central bank policies and investor sentiment also play a major role. Traders who understand these factors are better equipped to anticipate price movements and make informed decisions rather than react impulsively.",
  },
  {
    number: "04",
    title: "Getting Started with Gold Trading: Platforms, Tools, and Strategies",
    description:
      "To begin gold trading, one needs to choose a reliable platform, understand the trading instruments available, and develop a clear strategy. Options include spot trading, gold ETFs, and leveraged instruments like futures and CFDs. Common strategies include trend-following and breakout trading, supported by tools such as technical charts and economic calendars. Starting small and staying consistent is key for beginners stepping into this space.",
  },
  {
    number: "05",
    title: "Golden Risks: What Every Trader Must Know",
    description:
      "While gold is considered stable, trading it carries significant risks including market volatility, emotional decision-making, and leverage-related losses. Futures and options can magnify both gains and losses, while fake platforms and illiquid gold assets add to potential pitfalls. Successful gold traders use clear strategies, stop-loss mechanisms, and verified platforms to manage these risks effectively.",
  },
  {
    number: "06",
    title: "Is Gold Trading Right for You?",
    description:
      "Gold can be a valuable part of any investment strategy, whether you’re seeking long-term stability or short-term trading gains. For conservative investors, allocating a portion of the portfolio to gold offers protection during economic downturns. Those interested in trading should be ready to engage actively with the market, while passive investors can consider ETFs or digital gold for a more hands-off approach.",
  },

];

export default function ServicesGrid() {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-10">Blog Series Title</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          The Golden Guide — Mastering Gold Trading
        </h2>
      </div>
      <div
        className="grid md:grid-cols-3 gap-x-10 gap-y-16 opacity-90 p-8"
        style={{
          backgroundImage: "url('/blog-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
        }}
      >
        {services.map((service, index) => (
          <div key={index} className="relative border-t border-gray-400 pt-6">
            {/* Top black squares */}
            {index === 0 && (
              <div className="absolute -top-4 left-0 flex gap-1">
                <div className="w-4 h-4 bg-black" />
                <div className="w-2 h-2 bg-black" />
              </div>
            )}
            <span className="absolute top-0 right-0 text-sm text-gray-300 mt-2">
              ({service.number})
            </span>
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-[15px] text-gray-200 leading-relaxed text-justify">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
