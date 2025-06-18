"use client";
import Image from 'next/image';

const Section4 = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Benefits of Market Alerts</h1>
          <p className="mt-4 text-lg text-gray-700">
            Market Alerts offer several key benefits to investors looking to optimize their investment strategies:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1: Streamlined Decision-Making */}
          <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="w-full h-48 relative mb-4">
              <Image
                src="/t1.png"
                alt="Team Discussion"
                layout="fill"
                objectFit="cover"
                className="rounded-lg border border-gray-200"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Streamlined Decision-Making</h2>
            <p className="text-gray-700 text-justify">
              By providing clear, data-driven insights into market trends and opportunities, Market Alerts streamline decision-making processes. Investors can quickly assess market conditions and make informed decisions on when to buy, sell, or hold securities, reducing the emotional aspect of trading.
            </p>
          </div>

          {/* Card 2: Time Efficiency */}
          <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="w-full h-48 relative mb-4">
              <Image
                src="/t2.png"
                alt="Clock and Gears"
                layout="fill"
                objectFit="cover"
                className="rounded-lg border border-gray-200"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Time Efficiency</h2>
            <p className="text-gray-700 text-justify">
              Automating market analysis through Market alerts saves investors valuable time. Instead of manually analyzing vast amounts of market data, investors can rely on signals to highlight potential opportunities and risks, allowing them to focus on strategy implementation and portfolio management.
            </p>
          </div>

          {/* Card 3: Enhanced Portfolio Management */}
          <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="w-full h-48 relative mb-4">
              <Image
                src="/t3.png"
                alt="Coins and Hexagons"
                layout="fill"
                objectFit="cover"
                className="rounded-lg border border-gray-200"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Enhanced Portfolio Management</h2>
            <p className="text-gray-700 text-justify">
              Market Alerts play a crucial role in portfolio management by optimizing asset allocations and introducing new opportunities. By diversifying signal sources and aligning signals with specific investment goals and risk tolerances, investors can effectively manage portfolio performance and reduce overall investment risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;