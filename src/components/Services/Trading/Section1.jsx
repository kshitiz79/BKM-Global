"use client";

import Image from "next/image";

// Section Component

// Section1 Component
const fundData = [
  {
    id: 1,
    title: "What Are Market Alerts?",
    image: "/fund2.png",
    description:
      "Market Alerts are actionable triggers derived from comprehensive market analysis. They serve as indicators of when to buy or sell securities based on various methodologies. These methodologies include technical indicators, mathematical algorithms, and fundamental analysis, each contributing unique insights into market conditions.",
  },
];

export function Section1() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 space-y-10">
      {fundData.map((item, index) => (
        <section
          key={item.id}
          className="bg-white text-gray-900 rounded-2xl p-6 md:p-12 max-w-7xl mx-auto shadow-lg border border-gray-200"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image - conditionally ordered */}
            <div
              className={`rounded-xl overflow-hidden border border-gray-200 ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text - conditionally ordered */}
            <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{item.title}</h2>
              <p className="text-lg leading-relaxed text-gray-700 text-justify">{item.description}</p>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}