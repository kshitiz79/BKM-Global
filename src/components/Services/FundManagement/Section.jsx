import React from "react";
import Image from "next/image";

// Hero Section Component
export function Section() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 py-20 px-6 md:px-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#1A3A8D] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-[#1A3A8D] rounded-full mr-2"></span>
                Professional Fund Management
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Investment
                <span className="text-blue-600 block">Management</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-600">
                Comprehensive Fund Management Solutions
              </h2>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Welcome to BKM Global's Investment Management, where we offer comprehensive fund management solutions tailored to meet the diverse needs of our clients. We understand that managing funds effectively requires strategic planning, diligent monitoring, and proactive adjustments.
            </p>
            
           
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10M+</div>
                <div className="text-sm text-gray-600">Assets managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">16+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1000+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/fund7.png"
                alt="Fund Management"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-2xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}