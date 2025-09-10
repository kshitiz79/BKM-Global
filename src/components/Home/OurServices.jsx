"use client";
import { motion } from "framer-motion";

const features = [
  {
    image: '/5.png',
    title: 'High Potential Returns',
    description: 'At BKM Global, we prioritize strategies that offer high-potential returns. Our platform allows Fund Managers to optimize their trading strategies, aiming for maximum profitability while managing risk effectively.',
  },
  {
    image: '/7.png',
    title: 'Transparency',
    description: `We are committed to maintaining full transparency in everything we do. Investors can monitor their accounts in real-time, ensuring they are always informed about their investments' performance.`,
  },
  {
    image: '/8.png',
    title: 'Power of Referral',
    description: `Our referral system empowers users to grow their networks and increase their earnings. By referring new investors or Fund Managers to our platform, you can benefit from additional rewards.`,
    span: 'md:col-span-2',
  },
  {
    image: '/9.png',
    title: 'Hassle-Free Environment',
    description: `We strive to provide a user-friendly and hassle-free environment. Our platform is designed to be intuitive, making it easy for both novice and experienced investors to navigate and manage their investments.`,
    span: 'md:col-span-2',
  },
  {
    image: '/6.png',
    title: 'Consistency',
    description: 'Consistency is key to successful investing. Our platform supports Fund Managers in maintaining consistent performance, ensuring steady growth and reliable returns for investors.',
    span: 'md:col-span-2',
  },
];

export default function OlympTradeFeatures() {
  return (
    <section className="relative bg-white text-black pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-16 leading-tight">
          <span className="blue-900-text">Why</span> Traders Prefer BKM GLOBALS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8 justify-items-center">
          {features.map(({ image, title, description, span }, idx) => (
            <motion.div
              key={idx}
              className={`relative w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 ${span || ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="absolute inset-0 bg-blend-overlay bg-black/60"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="relative z-10 p-6 sm:p-7 md:p-8 flex flex-col items-center text-center">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">{title}</h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-200">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}