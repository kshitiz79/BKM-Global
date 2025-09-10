"use client";
import Image from "next/image";

export default function BlockchainHero() {
  return (
    <section
      className="sticky top-25 relative bg-no-repeat bg-cover bg-center h-[88vh]"
      style={{
        backgroundImage: "url('/blockchain_hero_bg.png')",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="relative w-3/4 overflow-hidden bg-blue-900/20 rounded-br-full">
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-[100vh] object-cover z-0"
  >
    <source src="/bkm.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay (optional for better text readability) */}
  <div className="absolute top-0 left-0 w-full h-full bg-blue-900/20 z-10"></div>

  {/* Text Content */}
  <div className="relative z-20 px-6 lg:px-16 py-20 w-full text-white">
    <h1 className="text-[3rem] leading-tight mb-8 max-w-7xl uppercase font-bold">
    Unlocking the Future of Financial Trading with Next-Generation Algo Software
    </h1>
    <p className="text-[1.3rem] mb-10 leading-relaxed">
    We offer a wide variety of highly attuned trading <br /> systems and Next-Generation Algo Software , <br /> specifically curated to meet different investor <br /> needs and risk appetites
    through our <br /> numerous,time tested and proven <br /> trading strategy.
    </p>
    <div className="flex gap-6 mt-6 flex-wrap">
      <a href="/contact-us" className="btn-custom btn-started">
        GET STARTED
      </a>
    </div>
  </div>
</div>


        {/* Right Side Icons */}
        <div className="relative lg:w-5/12 mt-16 lg:mt-0 h-[500px] w-full">
  <div className="absolute top-[20%] left-[25%] flex items-center space-x-2 animate-bounce">
    <span className="text-white">Learn</span>
    <Image src="/sc1.svg" alt="icon" width={120} height={150} />
  </div>

  <div className="absolute bottom-[30%] left-[5%] flex items-center space-x-2 animate-pulse">
    <span className="text-white">Practice</span>
    <Image src="/sc1.svg" alt="icon" width={120} height={150} />
  </div>

  <div className="absolute bottom-[5%] right-[10%] flex items-center space-x-2 animate-bounce">
    <Image src="/sc1.svg" alt="icon" width={120} height={150} />
    <span className="text-white">Invest</span>
  </div>
</div>

      </div>
    </section>
  );
}