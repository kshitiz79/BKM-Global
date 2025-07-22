import Image from "next/image";

export default function Section() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 py-20 px-6 md:px-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Professional Trading Education
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Up
                  <span className="text-blue-600">Learn</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-600">
                  Master the Markets with Insights from BKM Global's UpLearn Program
                </h2>
              </div>
              
              <p className="text-lg leading-relaxed text-gray-700">
                In the ever-evolving world of trading and investment, the ability to adapt and grow is essential. At BKM Global, we believe in the power of uplearning outdated practices and embracing new strategies to achieve financial success. Our "UpLearn" program is designed to help traders and investors shed old habits and adopt innovative approaches that align with the current market dynamics.
              </p>
              
            
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5000+</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/uplearn.png"
                  alt="UpLearn Program"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-2xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Curriculum Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Learn
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive curriculum covers everything from basic trading principles to advanced strategies, ensuring you have the skills needed to succeed in today's markets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Learning Modules</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                    <span>How to buy and sell stocks using proven technical analysis techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                    <span>Learn many indicators that will show trend continuations and reversals that will aid in your stock markets trading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                    <span>Recognize trends and chart patterns to make successful trading decisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                    <span>Develop your own strategies combining indicators, trading rules, order placement and more</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">5</span>
                    <span>Learn from real live trading demonstrations where the instructor shares the thought process in each trade and reinforces what you have learned</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/comman.png"
                alt="Trading Education"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Trading Strategies */}
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Trading Strategies Based on Your Personality
            </h3>
            <p className="text-lg text-gray-600 mb-8 text-center">
              We teach strategies that suit your trading style and personality:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Day Trading Strategies",
                "Reversal Strategies", 
                "Support & Resistance Strategy",
                "Gap Strategy",
                "Scalping Strategy",
                "Swing Trading Strategy"
              ].map((strategy, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                    <span className="font-semibold text-gray-900">{strategy}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Algo Trading Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Algo Trading Software
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6">
              Revolutionize Your Trading with Automation
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Algo Trading, short for algorithmic trading, refers to the use of computer algorithms to execute trading orders in financial markets. Algo trading involves creating and implementing pre-defined sets of rules and instructions that automate the trading process, eliminating the need for manual intervention.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Algo trading works on engines that receive and process market data in real-time. These programs use mathematical models, technical indicators, and historical data to identify trading opportunities. Once a predefined condition is met, such as a specific price level or trend pattern, the algorithm automatically starts its work by generating and executing trade orders.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-4">Key Benefits of Our Algo Trading Software</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>This Software Will <strong>LITERALLY</strong> Change Your Trading Forever.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Trade Confidently In Any TimeFrame</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Save Time, Predict Moves, and Maximize Profits—Trade Smarter Today</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Trade In Intraday, Multiday, Positional or Investments, With Readymade Trades or Create your own trades Instantly</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/tab.webp"
                alt="Algo Trading Software"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Automated</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}