"use client";
import { TbChartCandle } from "react-icons/tb";

import {  FaMoneyBillWave, FaRegSmile } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Section3() {
  return (
    <section className="bg-gradient-to-b from-[#111] to-black text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
        {/* Step 1 - CREATE */}
        <div>
          <div className="text-6xl text-[#00ff00] mx-auto mb-6 justify-center">
          {/* <TbChartCandle /> */}
          </div>
          <h2 className="text-2xl font-semibold mb-4 ">Technical Indicators</h2>
          <p className="text-lg text-gray-300">
          Popular technical indicators frequently utilized in trading strategies encompass Moving Averages (MA), Relative Strength Index (RSI), and Moving Average Convergence Divergence (MACD). These indicators serve as tools to analyze market trends and conditions, aiding traders in identifying potential entry and exit points based on historical price and volume data.
          </p>
        </div>

        {/* Step 2 - INVEST */}
        <div>
          <div className="text-6xl text-[#00ff00] mx-auto mb-6">
            {/* <FaMoneyBillWave /> */}
          </div>
          <h2 className="text-2xl font-semibold mb-4">Algorithmic Signals</h2>
          <p className="text-lg text-gray-300">
          Algorithmic signals leverage advanced mathematical models and algorithms to analyze large datasets swiftly. These models can identify complex patterns and anomalies that human analysts might overlook, providing timely trading opportunities. Machine learning algorithms continually adapt and improve based on new data, enhancing the accuracy and reliability of algorithmic signals over time.
          </p>
        </div>

        {/* Step 3 - EARN */}
        <div>
          <div className="text-6xl text-[#00ff00] mx-auto mb-6">
            {/* <FaRegSmile /> */}
          </div>
          <h2 className="text-2xl font-semibold mb-4">Fundamental Analysis Signals</h2>
          <p className="text-lg text-gray-300">
          Fundamental analysis signals are based on evaluating an asset's intrinsic value using economic and financial data. This includes analyzing company financial statements, industry trends, economic indicators, and geopolitical factors. Fundamental signals provide insights into the broader economic landscape and long-term investment potential, helping investors make informed decisions based on underlying value rather than short-term market fluctuations.
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/your-number"
        className="fixed bottom-6 right-6 bg-[#25D366] p-3 rounded-full shadow-lg hover:scale-105 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
    </section>
  );
}
