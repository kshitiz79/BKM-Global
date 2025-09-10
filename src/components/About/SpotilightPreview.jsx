import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./../../ui/Spotlight";
import { FaChartLine, FaUsers, FaGlobe, FaShieldAlt, FaLightbulb, FaHandshake } from "react-icons/fa";

export function SpotlightPreview() {
  const features = [
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Expert Analysis",
      description: "Deep market insights backed by 15+ years of trading experience"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Personalized Service",
      description: "Tailored investment strategies designed for your unique goals"
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Access to international markets and diverse investment opportunities"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Risk Management",
      description: "Advanced strategies to protect and grow your wealth"
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Cutting-edge technology and algorithmic trading solutions"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Trust & Transparency",
      description: "Unbiased advice with complete transparency in all our dealings"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Clients Served" },
    { number: "$2B+", label: "Assets Managed" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="relative flex py-20 w-full overflow-hidden rounded-md bg-gradient-to-br from-slate-50 via-white to-blue-50 antialiased">
      {/* Background Pattern */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none opacity-30",
          "[background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight Effect */}
      <Spotlight className="-top-10 left-0 md:-top-8 md:left-0" fill="rgba(59, 130, 246, 0.1)" />
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#1A3A8D] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full">
        {/* Main Content Section */}
        <div className="mx-auto w-full  px-6 md:px-20 pt-20 md:pt-0">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
              Our Approach
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              How We <span className="text-blue-900">Work</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We help you diversify your portfolio with expert guidance and innovative solutions. Our team of specialists delivers exceptional service across all market conditions, ensuring your financial success through every phase of your investment journey.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div className="text-blue-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-white/60 backdrop-blur-sm py-20 px-6 md:px-20">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our <span className="text-blue-900">Vision</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    As an independent Investment management firm, BKM Global is dedicated to providing unbiased financial advice to our clients. Our goal is to create guidance that will enhance your financial future through comprehensive wealth management services.
                  </p>
                  <p>
                    We offer portfolio management, financial planning, and accounting services tailored to each client's unique needs. Since there is no one-size-fits-all solution, our team creates personalized management objectives for every client we serve.
                  </p>
                </div>
                
                {/* Key Points */}
                <div className="mt-8 space-y-4">
                  {[
                    "Unbiased, independent financial advice",
                    "Comprehensive wealth management solutions",
                    "Personalized strategies for each client",
                    "Long-term wealth creation focus"
                  ].map((point, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-[#1A3A8D]  to-[#1A3A8D] rounded-3xl p-12 text-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FaShieldAlt className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Security First</h4>
                        <p className="text-blue-100">Your investments are protected with institutional-grade security measures.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaUsers className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Client-Centric</h4>
                        <p className="text-blue-100">Every decision we make is focused on your financial success and peace of mind.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaLightbulb className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Innovation</h4>
                        <p className="text-blue-100">We leverage cutting-edge technology to deliver superior investment outcomes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#1A3A8D]  rounded-2xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#1A3A8D] rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        
      </div>
    </div>
  );
}