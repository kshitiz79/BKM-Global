"use client";
import Image from "next/image";

export default function OlympTradeFeatures() {
  return (
    <section className="relative bg-white text-black pb-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-6xl md:text-6xl mb-12">
          <span className="text-blue-900">Why</span> traders prefer BKM GLOBALS
        </h2>

        {/* Row 1 - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-white">
          <div
            className="relative rounded-xl p-6 text-center flex flex-col items-center justify-center bg-black/80 bg-blend-overlay bg-cover bg-center"
            style={{ backgroundImage: `url('/5.png')` }} // <-- Add your image path
          >
            {/* <Image src="/1.png" alt="High Potential Returns" width={120} height={120} className="mb-4" /> */}
            <p className="text-lg font-medium mb-2">High Potential Returns</p>
            <p>
              At BKM Global, we prioritize strategies that offer high-potential returns.
              Our platform allows Fund Managers to optimize their trading strategies,
              aiming for maximum profitability while managing risk effectively.
            </p>
          </div>

          <div
            className="relative rounded-xl p-6 text-center flex flex-col items-center justify-center text-white bg-black/80 bg-blend-overlay bg-cover bg-center"
            style={{ backgroundImage: `url('/7.png')` }}
          >
            {/* <Image src="/2.png" alt="Transparency" width={120} height={120} className="mb-4" /> */}
            <p className="text-lg font-medium mb-2">Transparency</p>
            <p>
              We are committed to maintaining full transparency in everything we do.
              Investors can monitor their accounts in real-time, ensuring they are
              always informed about their investments' performance.
            </p>
          </div>
        </div>

        {/* Row 2 - Full Width */}
        <div className="mb-6 text-white">
          <div
            className="relative rounded-xl p-6 text-center flex flex-col items-center justify-center bg-black/80 bg-blend-overlay bg-cover bg-center"
            style={{ backgroundImage: `url('/8.png')` }}
          >
            <p className="text-2xl font-semibold mb-2">Power of Referral</p>
            <p>
              Our referral system empowers users to grow their networks and increase
              their earnings. By referring new investors or Fund Managers to our
              platform, you can benefit from additional rewards.
            </p>
          </div>
        </div>

        {/* Row 3 - Full Width */}
        <div className="mb-6 text-white">
          <div
            className="relative rounded-xl p-6 text-center flex flex-col items-center justify-center bg-black/80 bg-blend-overlay bg-cover bg-center"
            style={{ backgroundImage: `url('/9.png')` }}
          >
            {/* <Image src="/3.png" alt="Hassle-Free Environment" width={120} height={120} className="mb-4" /> */}
            <p className="text-lg font-medium mb-2">Hassle-Free Environment</p>
            <p className="text-sm">
              We strive to provide a user-friendly and hassle-free environment.
              Our platform is designed to be intuitive, making it easy for both
              novice and experienced investors to navigate and manage their investments.
            </p>
          </div>
        </div>

        {/* Row 4 - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          <div
            className="relative rounded-xl p-6 text-center flex flex-col items-center justify-center bg-black/60 bg-blend-overlay bg-cover bg-center"
            style={{ backgroundImage: `url('/6.png')` }}
          >
            {/* <Image src="/4.png" alt="Consistency" width={120} height={120} className="mb-4" /> */}
            <p className="text-lg font-medium">Consistency</p>
          </div>

            <div
            className="relative rounded-xl p-6 text-center flex flex-col items-center justify-center bg-black/60 bg-blend-overlay bg-cover bg-center"
            style={{ backgroundImage: `url('/6.png')` }}
          >
            Consistency is key to successful investing. Our platform supports
            Fund Managers in maintaining consistent performance, ensuring steady
            growth and reliable returns for investors.
          </div>
        </div>
      </div>
    </section>
  );
}
