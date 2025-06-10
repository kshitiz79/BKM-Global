'use client';
import React from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

export default function page() {
    const mistakes =[
        
            {
              title: "1. Lack of a Trading Plan",
              content:
                "Many new traders enter the market without a strategy. A detailed plan with entry/exit points and risk rules helps avoid emotional decisions and provides discipline.",
                bg: "bg-white",
                textColor: "text-[#342c74]",
            },
            {
              title: "2. Ignoring Risk Management",
              content:
                "Risking large amounts or over-leveraging can destroy capital. Follow the 1-2% rule, use stop-losses, and diversify to manage exposure.",
                bg: "bg-[#342c74]",
                textColor: "text-white",
            },
            {
              title: "3. Overtrading",
              content:
                "Driven by greed or FOMO, overtrading increases costs and emotional stress. Focus on quality over quantity and wait for ideal setups.",
                bg:"bg-[#342c74]",
        textColor: "text-white",
            },
            {
              title: "4. Failing to Learn and Adapt",
              content:
                "Markets evolve. Keep learning and adjusting your strategies to stay effective. Study technical and fundamental factors regularly.",
                bgImage: "/comman.png",
                textColor: "text-[#342c74]",
            },
            {
              title: "5. Letting Emotions Drive Decisions",
              content:
                "Fear and greed lead to poor choices. Stick to your plan, take breaks, and practice with demo accounts to control emotions.",
                bg: "bg-white",
                textColor: "text-[#342c74]",
            },
            {
              title: "Bonus Tip: Not Choosing the Right Broker",
              content:
                "Select a regulated broker with good reviews, competitive spreads, and reliable support. Test their platform before committing funds.",
                bg: "bg-[#342c74]",
                textColor: "text-white",
            },
        ]
        const faqs = [
            {
              question: "What are the benefits of using forex trading services in Bengaluru?",
              answer: "They offer expert guidance, strategies, tools, and help avoid common pitfalls.",
            },
            {
              question: "How can a forex trading company help with risk management?",
              answer: "They advise on diversification, stop-loss use, and help maintain risk discipline.",
            },
            {
              question: "Why is a trading plan important?",
              answer: "It outlines strategy, risk limits, and profit goals—helping avoid impulsive actions.",
            },
            {
              question: "What should I look for in a forex broker?",
              answer: "Regulation, low fees, good support, and reliable platforms. Demo test first.",
            },
            {
              question: "How can I avoid overtrading?",
              answer: "Stick to your plan, prioritize quality trades, and seek professional guidance.",
            },
          ];
    
  return (
    <section className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 py-16 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
       
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">5 Common Mistakes New Forex Traders Make</h1>
        <div className="flex items-center space-x-6 mb-8 text-sm text-gray-500 dark:text-gray-400">

        </div>

        <p className="mb-6 text-lg leading-relaxed">
          Forex trading offers immense opportunities for financial growth, but it’s not without challenges, especially for beginners.
          New traders often dive into the market with high hopes but end up making avoidable mistakes. Let’s explore five of the most
          common errors and how to avoid them.
        </p>

        {/* Mistake Sections */}
       
        <section className="grid md:grid-cols-2 gap-0 max-w-7xl mx-auto">
      {mistakes.map((item, index) => (
        <div
          key={index}
          className={`relative min-h-[320px] p-10 flex flex-col justify-center ${item.bg || ""} ${item.bg ? "bg-cover bg-center" : ""}`}
        >
          <div className={`max-w-lg ${item.textColor}`}>
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
            <p className="mb-4 leading-relaxed">{item.content}</p>
            
          </div>
        </div>
      ))}
    </section>

        <div className="mt-12 border-t pt-6">
          <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
          <p className="text-lg leading-relaxed mb-4">
            Forex trading requires patience, discipline, and continuous learning. Avoiding these common mistakes can strengthen your
            foundation. Remember, trading is a skill developed over time.
          </p>
          <p className="text-lg leading-relaxed">
            If you're looking for expert guidance, the best forex trading services in Bengaluru can support your journey to success.
            Happy trading!
          </p>
        </div>

        <div className="mt-16 border-t pt-10 max-w-8xl mx-auto px-4">
      <h3 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Frequently Asked Questions
      </h3>
      <div className="grid gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
          >
            <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              {faq.question}
            </h4>
            <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
      </div>
    </section>
  );
}
