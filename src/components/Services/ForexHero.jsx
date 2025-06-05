import Image from "next/image";

export default function ForexHero() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text & Buttons */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Forex Account <br /> Management <br /> Service
          </h1>
          <p className="text-gray-300 mt-6 text-lg">
            Earn 10-20% monthly return on investment on your live funded
            account. Let the pros do the heavy lifting while you sit and
            withdraw just profits.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-green-400 hover:scale-105 transition-transform px-6 py-3 rounded-full text-white font-semibold shadow-lg">
              See Proofs $
            </button>
            <button className="bg-lime-500 hover:bg-lime-600 px-6 py-3 rounded-full text-black font-bold shadow-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Right: Phone UI Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/images/forex-phone.png"
            alt="Forex App Preview"
            fill
            className="object-contain"
            priority
          />
          {/* Optional: You can animate floating dollar signs with CSS/Framer Motion here */}
        </div>
      </div>

      {/* Bottom Join Telegram Section */}
      <div className="mt-16 flex flex-col sm:flex-row justify-between items-center bg-black border-t border-gray-700 pt-8">
        <p className="text-gray-300 text-center sm:text-left mb-4 sm:mb-0">
          There is more on our telegram channel
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-green-400 px-6 py-2 rounded-full text-white font-medium shadow-md">
          Join channel
        </button>
      </div>
    </section>
  );
}
