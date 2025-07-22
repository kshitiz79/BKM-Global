"use client";
import Image from 'next/image';

const Section5 = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How BKM Global Generates Signals</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At BKM Global, we employ a robust approach to generating Market Alerts, combining advanced technology with expert analysis to deliver superior results.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Cutting-Edge Technology */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Cutting-Edge Technology</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We leverage state-of-the-art technology, including artificial intelligence (AI) and machine learning algorithms, to process and interpret vast amounts of market data in real-time. These technologies identify patterns, trends, and anomalies that signal potential trading opportunities, ensuring our signals are accurate and timely.
              </p>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Data Processing Speed</span>
                  <span className="font-semibold text-blue-600">1M+ data points/sec</span>
                </div>
              </div>
            </div>
            <div className="w-full h-56 relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/t4.png"
                alt="Cloud Technology"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Column: Expert Analysis and Continuous Improvement */}
          <div className="space-y-8">
            {/* Expert Analysis */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 transition-all duration-300">
              <div className="w-full h-48 relative mb-6 overflow-hidden rounded-xl">
                <Image
                  src="/t5.png"
                  alt="Team Analysis"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Expert Analysis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our team of experienced analysts provides qualitative insights and context to quantitative data analysis. By integrating technical expertise with market insights, we enhance the reliability and relevance of our Market alerts. This human element ensures that our signals not only reflect market conditions but also consider broader economic factors and geopolitical events that impact market dynamics.
              </p>
              <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Expert Team Size</span>
                  <span className="font-semibold text-green-600">25+ Analysts</span>
                </div>
              </div>
            </div>

            {/* Continuous Improvement */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 transition-all duration-300">
              <div className="w-full h-48 relative mb-6 overflow-hidden rounded-xl">
                <Image
                  src="/t6.png"
                  alt="Continuous Improvement"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Continuous Improvement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to continuous improvement and innovation in signal generation. By refining our models, algorithms, and analytical techniques, we adapt to evolving market conditions and enhance the effectiveness of our Market Alerts. This proactive approach allows us to deliver consistent value to our clients and maintain our position at the forefront of the industry.
              </p>
              <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Model Updates</span>
                  <span className="font-semibold text-indigo-600">Weekly</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Experience the Power of Professional Trading Signals</h3>
          <p className="text-xl mb-8 opacity-90">
            Join our community of successful traders and start receiving high-quality market alerts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;