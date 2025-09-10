"use client";
import React from "react";
import { motion } from "framer-motion";

const serviceData = [
  {
    title: "Uplearn",
    description: "We believe in the power of uplearning outdated practices and embracing new strategies to achieve financial success.",
    icon: "💹"
  },
  {
    title: "Investment Management",
    description: "Personalized investment strategies tailored to your risk tolerance and financial objectives, helping you achieve your long-term financial goals.",
    icon: "📊"
  },
  {
    title: "Market Alert",
    description: "Real-time signals and insights to help you make informed trading decisions and capitalize on market opportunities.",
    icon: "📈"
  }
];

const Services = () => {
  return (
    <div className="w-full py-4 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Services Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h2-blue-900 mb-4"
          >
            Our Services
          </motion.h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-blue-100 hover:border-blue-300"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold blue-900-text dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-900 dark:text-gray-900 text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Commitment Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-blue-50 shadow-md shadow-blue-50 dark:bg-blue-50 rounded-2xl border-2 border-blue-100 p-8 md:p-12 max-w-7xl mx-auto"
        >
          <h2 className="h3-blue-900 mb-6">
            Our Commitment to You
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-900 dark:text-gray-900 text-lg leading-relaxed text-justify">
              We believe our success is intrinsically linked to the success of our clients. 
              Therefore, we are dedicated to forging enduring relationships founded on trust, 
              openness, and mutual respect. We take the time to understand your unique 
              financial situation and work closely with you to develop a personalized 
              investment strategy that aligns with your goals.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;