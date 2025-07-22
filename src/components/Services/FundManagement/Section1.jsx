import React from "react";
import Image from "next/image";
import { FaShieldAlt, FaChartLine, FaUsers, FaGlobe } from "react-icons/fa";

const services = [
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Risk Management",
    description: "Advanced risk assessment and mitigation strategies to protect your investments."
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Portfolio Optimization",
    description: "Data-driven portfolio management for maximum returns and minimal risk."
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Expert Advisory",
    description: "Dedicated team of financial experts providing personalized investment guidance."
  },
  {
    icon: <FaGlobe className="w-8 h-8" />,
    title: "Global Markets",
    description: "Access to international markets including Forex, Commodities, and Crypto."
  }
];

export default function Section1() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Services Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Investment Management Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to maximize your investment potential while minimizing risk through professional management and strategic planning.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Forex Fund Management Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We offer Professional Forex Fund Management Services customized as per investor requirements. Our services extend to corporations, private individuals, retail traders, and anyone keen to invest in Currency markets, Commodities (Gold), and Crypto.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide investors with low-risk investments that aim for absolute positive returns regardless of market conditions. Our asset management model ensures capital safety and protection while maintaining strict investment criteria.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Trading Strategy</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strategy risk is limited to 2% per trade
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fixed stop loss with 1:2 & 1:3 risk-reward profile
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Maximum drawdown capped at 20%
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Minimum investment: $10,000
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Expected annual return: up to 60%
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex items-center mb-3">
                <FaShieldAlt className="w-5 h-5 text-green-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Fee Structure</h4>
              </div>
              <p className="text-gray-700 mb-2">No management fees - 50% commission on profits only</p>
              <p className="text-red-600 font-semibold text-sm">
                Note: We do not accept cash or cheque payments from investors
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/fund1.png"
              alt="Fund Management Strategy"
              width={600}
              height={500}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
              <div className="text-2xl font-bold text-blue-600">60%</div>
              <div className="text-sm text-gray-600">Annual Returns</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}