"use client";
import React from "react";
import { motion } from "framer-motion";

const serviceData = [
  {
    title: "Crypto Trading",
    description: "Expert guidance and strategies for trading in the cryptocurrency market. Our team of experienced traders helps you navigate the complexities of the crypto world to maximize your returns.",
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
    <div className="w-full py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Services Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-100 dark:text-white mb-4"
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
              className="bg-black dark:bg-neutral-800 p-8 rounded-xl shadow-md shadow-white hover:shadow-md transition-all duration-300"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-100 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-50 dark:text-gray-20 text-lg leading-relaxed">
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
          className="bg-gray-950 shadow-md shadow-white dark:bg-neutral-800 rounded-2xl p-8 md:p-12 max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-50 dark:text-white mb-6">
            Our Commitment to You
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-50 dark:text-gray-300 text-lg leading-relaxed">
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