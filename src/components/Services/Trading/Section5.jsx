"use client";
import Image from 'next/image';

const Section5 = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">How BKM Global Generates Signals</h1>
          <p className="mt-4 text-lg text-gray-700">
            At BKM Global, we employ a robust approach to generating Market Alerts, combining advanced technology with expert analysis:
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Cutting-Edge Technology */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cutting-Edge Technology</h2>
              <p className="text-gray-700 text-justify">
                We leverage state-of-the-art technology, including artificial intelligence (AI) and machine learning algorithms, to process and interpret vast amounts of market data in real-time. These technologies identify patterns, trends, and anomalies that signal potential trading opportunities, ensuring our signals are accurate and timely.
              </p>
            </div>
            <div className="w-full h-56 relative">
              <Image
                src="/t4.png"
                alt="Cloud Technology"
                layout="fill"
                objectFit="cover"
                className="rounded-lg border border-gray-200"
              />
            </div>
          </div>

          {/* Right Column: Expert Analysis and Continuous Improvement */}
          <div className="space-y-8">
            {/* Expert Analysis */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="w-full h-48 relative mb-4">
                <Image
                  src="/t5.png"
                  alt="Team Analysis"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg border border-gray-200"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Expert Analysis</h2>
              <p className="text-gray-700 text-justify">
                Our team of experienced analysts provides qualitative insights and context to quantitative data analysis. By integrating technical expertise with market insights, we enhance the reliability and relevance of our Market alerts. This human element ensures that our signals not only reflect market conditions but also consider broader economic factors and geopolitical events that impact market dynamics.
              </p>
            </div>

            {/* Continuous Improvement */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="w-full h-48 relative mb-4">
                <Image
                  src="/t6.png"
                  alt="Continuous Improvement"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg border border-gray-200"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Continuous Improvement</h2>
              <p className="text-gray-700 text-justify">
                We are committed to continuous improvement and innovation in signal generation. By refining our models, algorithms, and analytical techniques, we adapt to evolving market conditions and enhance the effectiveness of our Market Alerts. This proactive approach allows us to deliver consistent value to our clients and maintain our position at the forefront of the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;