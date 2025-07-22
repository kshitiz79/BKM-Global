"use client";
import { TbChartCandle } from "react-icons/tb";
import { FaMoneyBillWave, FaRegSmile, FaWhatsapp } from "react-icons/fa";

export default function Section3() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white text-gray-900 py-20 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Signal Generation Methodology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We employ a comprehensive three-pillar approach to generate highly accurate and profitable trading signals for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Technical Indicators */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-2">
            <div className="text-6xl text-blue-600 mx-auto mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
              <TbChartCandle />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">Technical Indicators</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Technical indicators like Moving Averages, RSI, and MACD analyze market trends using historical price and volume data. These tools help traders identify optimal entry and exit points, enhancing decision-making in dynamic market conditions.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Accuracy Rate</span>
                <span className="font-semibold text-blue-600">92%</span>
              </div>
            </div>
          </div>

          {/* Algorithmic Signals */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-2">
            <div className="text-6xl text-blue-600 mx-auto mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
              <FaMoneyBillWave />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">Algorithmic Signals</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Algorithmic signals use advanced models to analyze vast datasets, detecting patterns and anomalies. Machine learning enhances accuracy, providing timely trading opportunities and adapting to new data for reliable market insights.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Processing Speed</span>
                <span className="font-semibold text-blue-600">Real-time</span>
              </div>
            </div>
          </div>

          {/* Fundamental Analysis */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-2">
            <div className="text-6xl text-blue-600 mx-auto mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
              <FaRegSmile />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">Fundamental Analysis</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fundamental analysis signals evaluate an asset's intrinsic value using financial statements, industry trends, and economic data. This approach provides insights into long-term investment potential, guiding strategic decisions.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Market Coverage</span>
                <span className="font-semibold text-blue-600">Global</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Receive Professional Trading Signals?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful traders who trust our signals for consistent profits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Pricing Plans
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/9740633154"
        className="fixed bottom-6 right-6 bg-blue-600 p-3 rounded-full shadow-lg hover:scale-105 transition z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
    </section>
  );
}