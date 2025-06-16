"use client";

import React from "react";
import { FaUserCircle, FaMoneyBillWave, FaChartLine } from "react-icons/fa";

const cards = [
  {
    title: "Investment Management",
    description: "We offer comprehensive asset management solutions tailored to meet the diverse needs of our clients.",
    Icon: FaUserCircle,
  },
  {
    title: "Market Alert",
    description: "We specialize in delivering precise trading signals that empower investors to make informed decisions.",
    Icon: FaMoneyBillWave,
  },
  {
    title: "Uplearn",
    description: "We believe in the power of uplearning outdated practices and embracing new strategies for financial success.",
    Icon: FaChartLine,
  },
];

export default function WhyToChooseUs() {
  return (
    <section className="relative bg-black text-white">
    <section className=" py-12 max-w-7xl mx-auto px-8">
        <h1 className="uppercase mb-10 md:text-4xl text-2xl mx-auto text-center ">Our Services</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map(({ title, description, Icon }, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
          >
            <Icon className="text-[#02ff00] text-5xl mb-4 drop-shadow-lg" />
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
}
