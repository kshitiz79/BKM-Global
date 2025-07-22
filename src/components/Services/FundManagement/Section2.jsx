import React from "react";
import Image from "next/image";
import { FaChartLine, FaShieldAlt, FaTint } from "react-icons/fa";

const fundData = [
  {
    id: 1,
    title: "Maximizing Returns",
    image: "/fund2.png",
    icon: <FaChartLine className="w-12 h-12 text-blue-600" />,
    description:
      "The core objective of Investment management is to achieve the highest possible returns on investments while mitigating risks. This involves careful analysis of market trends, economic conditions, and individual asset performance. By leveraging our expertise, fund managers at BKM Global make informed decisions that enhance the value of your investments.",
  },
  {
    id: 2,
    title: "Risk Mitigation",
    image: "/fund3.png",
    icon: <FaShieldAlt className="w-12 h-12 text-green-600" />,
    description:
      "In the volatile world of finance, risk management is crucial. Fund managers employ various strategies to protect investments from market fluctuations, economic downturns, and other potential threats. At BKM Global, we prioritize risk mitigation to ensure that your assets are safeguarded against unforeseen challenges.",
  },
  {
    id: 3,
    title: "Liquidity Management",
    image: "/fund4.png",
    icon: <FaTint className="w-12 h-12 text-indigo-600" />,
    description:
      "Ensuring liquidity is another vital aspect of Investment management. This involves maintaining the right balance between liquid and illiquid assets to meet short-term and long-term financial obligations. Our fund managers are adept at managing liquidity, ensuring that your funds are readily available when needed without compromising on growth opportunities.",
  },
];

export function Section2() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Importance of Investment Management
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach ensures your investments are managed with precision, expertise, and unwavering commitment to your financial success.
          </p>
        </div>

        <div className="space-y-20">
          {fundData.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`space-y-6 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center space-x-4">
                    {item.icon}
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-700">{item.description}</p>
                  
                  {/* Key Benefits */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2 text-gray-700">
                      {index === 0 && (
                        <>
                          <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Advanced market analysis</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Data-driven decision making</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Continuous performance optimization</li>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Diversified portfolio strategies</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Real-time risk monitoring</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Proactive threat mitigation</li>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>Optimal asset allocation</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>Flexible withdrawal options</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>Emergency fund accessibility</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="relative z-10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}