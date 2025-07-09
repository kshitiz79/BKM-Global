"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TradingStrategyCards() {
  const strategies = [
  
    {
      title: "Scalping",
      description:
        "Scalping involves making numerous small trades throughout the day to profit from minor price changes with disciplined focus.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 text-black py-20">
      <h1 className="md:text-5xl text-4xl text-center font-bold text-gray-900 mb-12 tracking-tight">
        Explore Trading Strategies
      </h1>
      <div className="grid grid-cols-1 max-w-7xl px-8 mx-auto gap-8 p-4">
        {strategies.map((strategy, i) => (
          <motion.div
            key={strategy.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-xl shadow-xl p-6 flex flex-col border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {strategy.title}
            </h2>
            <p className="text-gray-700 text-base mb-4 leading-relaxed">
              {strategy.description}
            </p>
            <div className="relative h-[60vh] mb-4">
              <iframe
                src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_abcde&symbol=NASDAQ%3AAAPL&interval=15&studies=your_indicator_name"
                width="100%"
                height="100%"
                frameBorder="0"
                allowTransparency={true}
                scrolling="no"
                title={`TradingView ${strategy.title}`}
              ></iframe>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
