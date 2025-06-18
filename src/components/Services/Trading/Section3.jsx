"use client";
import { TbChartCandle } from "react-icons/tb";
import { FaMoneyBillWave, FaRegSmile, FaWhatsapp } from "react-icons/fa";

export default function Section3() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 text-gray-900 py-16 relative">
      <div className="max-w-7xl mx-auto  grid md:grid-cols-3 gap-10 text-center">
        {/* Step 1 - Technical Indicators */}
        <div className="bg-white rounded-lg shadow-lg p-6 px-9 border border-gray-200">
          <div className="text-6xl text-blue-600 mx-auto mb-6 flex justify-center">
            <TbChartCandle />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Technical Indicators</h2>
          <p className="text-lg text-gray-700 text-justify">
            Technical indicators like Moving Averages, RSI, and MACD analyze market trends using historical price and volume data. These tools help traders identify optimal entry and exit points, enhancing decision-making in dynamic market conditions.
          </p>
        </div>

        {/* Step 2 - Algorithmic Signals */}
        <div className="bg-white rounded-lg shadow-lg px-9 p-6 border border-gray-200">
          <div className="text-6xl text-blue-600 mx-auto mb-6 flex justify-center">
            <FaMoneyBillWave />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Algorithmic Signals</h2>
          <p className="text-lg text-gray-700 text-justify">
            Algorithmic signals use advanced models to analyze vast datasets, detecting patterns and anomalies. Machine learning enhances accuracy, providing timely trading opportunities and adapting to new data for reliable market insights.
          </p>
        </div>

        {/* Step 3 - Fundamental Analysis Signals */}
        <div className="bg-white rounded-lg shadow-lg p-6 px-9 border border-gray-200">
          <div className="text-6xl text-blue-600 mx-auto mb-6 flex justify-center">
            <FaRegSmile />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Fundamental Analysis </h2>
          <p className="text-lg text-gray-700 text-justify">
            Fundamental analysis signals evaluate an asset’s intrinsic value using financial statements, industry trends, and economic data. This approach provides insights into long-term investment potential, guiding decisions beyond.
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/9740633154"
        className="fixed bottom-6 right-6 bg-blue-600 p-3 rounded-full shadow-lg hover:scale-105 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
    </section>
  );
}