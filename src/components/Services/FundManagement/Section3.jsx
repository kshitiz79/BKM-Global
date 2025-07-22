import React from "react";
import Image from "next/image";
import { FaUser, FaChartPie, FaEye, FaFileAlt } from "react-icons/fa";

const services = [
  {
    title: "Personalized Investment Strategies",
    image: "/fund5.png",
    icon: <FaUser className="w-8 h-8" />,
    description:
      "At BKM Global, we recognize that each client has unique financial goals and risk tolerance levels. Our Investment management services are tailored to meet your specific needs. We develop personalized investment strategies that align with your objectives, ensuring that your assets are managed effectively.",
    features: ["Custom portfolio design", "Risk assessment", "Goal-based planning"]
  },
  {
    title: "Diverse Asset Management",
    image: "/fund6.png",
    icon: <FaChartPie className="w-8 h-8" />,
    description:
      "Our expertise spans a wide range of asset classes, including equities, bonds, real estate, and alternative investments. This approach aids in distributing risk and maximizing potential returns. Whether you are looking to grow your wealth, secure your retirement, or achieve other financial goals, our fund managers will create a balanced portfolio that meets your requirements.",
    features: ["Multi-asset portfolios", "Global diversification", "Alternative investments"]
  },
  {
    title: "Ongoing Performance Monitoring",
    image: "/fund7.png",
    icon: <FaEye className="w-8 h-8" />,
    description:
      "Effective Investment management requires continuous monitoring and adjustments. At BKM Global, we use advanced analytical tools and technologies to track the performance of your assets. Our fund managers regularly review and rebalance portfolios to adapt to changing market conditions and capitalize on new opportunities.",
    features: ["Real-time tracking", "Regular rebalancing", "Market adaptation"]
  },
  {
    title: "Transparent Reporting",
    image: "/fund8.png",
    icon: <FaFileAlt className="w-8 h-8" />,
    description:
      "We believe in maintaining transparency with our clients. You will receive regular, detailed reports on the performance of your investments, providing you with a clear understanding of how your assets are being managed. Our team is always available to discuss your portfolio and answer any questions you may have.",
    features: ["Detailed reports", "Performance analytics", "24/7 support"]
  },
];

export function Section3() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Investment Management Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to optimize your investment portfolio through expert management, strategic planning, and transparent communication.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let our expert team help you achieve your financial goals with personalized investment management solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Portfolio Examples
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}