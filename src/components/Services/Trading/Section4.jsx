"use client";
import Image from 'next/image';

const Section4 = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of Market Alerts</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Market Alerts offer several key benefits to investors looking to optimize their investment strategies and achieve consistent profitability.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Streamlined Decision-Making */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-2">
            <div className="w-full h-48 relative mb-6 overflow-hidden rounded-xl">
              <Image
                src="/t1.png"
                alt="Team Discussion"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Streamlined Decision-Making</h2>
            <p className="text-gray-700 leading-relaxed">
              By providing clear, data-driven insights into market trends and opportunities, Market Alerts streamline decision-making processes. Investors can quickly assess market conditions and make informed decisions on when to buy, sell, or hold securities, reducing the emotional aspect of trading.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center text-sm text-[#1A3A8D] font-semibold">
                <span>Reduce emotional trading by 80%</span>
              </div>
            </div>
          </div>

          {/* Card 2: Time Efficiency */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-2">
            <div className="w-full h-48 relative mb-6 overflow-hidden rounded-xl">
              <Image
                src="/t2.png"
                alt="Clock and Gears"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Time Efficiency</h2>
            <p className="text-gray-700 leading-relaxed">
              Automating market analysis through Market alerts saves investors valuable time. Instead of manually analyzing vast amounts of market data, investors can rely on signals to highlight potential opportunities and risks, allowing them to focus on strategy implementation and portfolio management.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center text-sm text-[#1A3A8D] font-semibold">
                <span>Save 5+ hours daily on analysis</span>
              </div>
            </div>
          </div>

          {/* Card 3: Enhanced Portfolio Management */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-2">
            <div className="w-full h-48 relative mb-6 overflow-hidden rounded-xl">
              <Image
                src="/t3.png"
                alt="Coins and Hexagons"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Enhanced Portfolio Management</h2>
            <p className="text-gray-700 leading-relaxed">
              Market Alerts play a crucial role in portfolio management by optimizing asset allocations and introducing new opportunities. By diversifying signal sources and aligning signals with specific investment goals and risk tolerances, investors can effectively manage portfolio performance and reduce overall investment risk.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center text-sm text-[#1A3A8D] font-semibold">
                <span>Optimize portfolio performance by 40%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;