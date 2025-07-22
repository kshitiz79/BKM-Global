"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const testimonials = [
  // {
  //   image: "/fund1.png",
  //   title: "Understanding the Basics",
  //   quote:
  //     "Investment management, also known as asset management, involves a structured approach to managing both intangible and tangible assets to maximize their value. This encompasses a wide range of assets, from intellectual property and goodwill to equipment and real estate. The primary goal of investment management is to operate, deploy, maintain, dispose of, and upgrade assets in the most cost-efficient and profit-yielding manner possible.",
  //   name: "Anjali S.",
  //   role: "Bangalore",
  //   avatar: "/fund1.png",
  // },
  {
    image: "/fund1.png",
    title: "The Role of an Investment Manager",
    quote:
      "A fund manager plays a critical role in this process. They must meticulously balance cost and risk to capitalize on cash flow opportunities. In financial institutions, the ability to offer credit to customers hinges on the proper liquidity of funds, making the fund manager's role indispensable. Effective investment management ensures that financial resources are available when needed, facilitating smooth operations and growth.",
    name: "Rajesh K.",
    role: "Bengaluru",
    avatar: "/fund1.png",
  },
];

export default function Section1() {
  return (
    <section className="py-16 px-6 md:px-24 lg:px-32 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[#07372B] mb-4 text-center">Professional Forex Fund Management Services</h2>
          <p className="text-gray-700 text-lg mb-6 text-justify">
            We offer you Professional Forex Fund Management Services customised as per the Investor Requirement. We also help in Recovery of Loss in your trading Account for corporations, private individuals, Retail traders and others who is keen to invest in Currency markets or Commodities (Gold) and Crypto also. We guide and advise our clients to the best solutions which will suit their personal needs. Our products deliver superior performance in today’s markets, and we continually develop new solutions to meet your investment needs in the future.<br/><br/>
            We provide investors with a low risk investment, which aims absolute positive returns regardless of market conditions. Our asset management model offers access to client’s capital, safety of their investment and capital protection. Risk management is a priority and managed Forex Trading accounts are administered with very strict investment criteria.
          </p>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-[#07372B] mb-2">How we trade :</h3>
          <ul className="list-decimal list-inside text-lg text-gray-800 space-y-2 mb-4">
            <li>Strategy risk is 2% in the market on any one trade.</li>
            <li>This strategy has a fixed stop loss and aims for a 1:2 & 1:3 risk reward profile.</li>
            <li>The maximum draw-down is 20% only.</li>
            <li>Risk management can also be tailored to each individual's needs.</li>
            <li>The Minimum investment amount for this strategy is $10,000 and above.</li>
            <li>The expected annual compounded return ranges between 60% a year.</li>
          </ul>
          <p className="text-lg text-gray-800 mb-2">There are no management fees, however there will be a 50% commission on the profits.</p>
          <p className="text-lg text-red-600 font-semibold">Note : We do not take any Money Cash/Cheque from Investors.</p>
        </div>
      </div>
    </section>
  );
}