"use client";

import Image from "next/image";

// Section Component

import { FaChartLine, FaRobot, FaNewspaper } from "react-icons/fa";

export function Section1() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Are Market Alerts?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Market Alerts are actionable triggers derived from comprehensive market analysis. They serve as indicators of when to buy or sell securities based on various methodologies. These methodologies include technical indicators, mathematical algorithms, and fundamental analysis, each contributing unique insights into market conditions.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Alert System Features</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Real-time market monitoring and analysis
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Multi-timeframe signal generation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Risk-reward ratio optimization
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Instant notifications via multiple channels
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/fund2.png"
              alt="Market Analysis"
              width={600}
              height={500}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
              <div className="text-2xl font-bold text-blue-600">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Alert Types */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-blue-600 mb-4">
              <FaChartLine className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Analysis</h3>
            <p className="text-gray-600">Advanced chart patterns, indicators, and price action analysis to identify optimal entry and exit points.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-blue-600 mb-4">
              <FaRobot className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Algorithmic Signals</h3>
            <p className="text-gray-600">AI-powered algorithms that process vast amounts of data to detect trading opportunities with high precision.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-blue-600 mb-4">
              <FaNewspaper className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fundamental Analysis</h3>
            <p className="text-gray-600">Economic indicators, earnings reports, and market sentiment analysis for long-term investment decisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}