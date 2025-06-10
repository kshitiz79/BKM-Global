"use client";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "How BKM Global’s Uplearn Program Works",
    icon: "/up1.png",
    link: "/services-page/uplearn",
  },
  {
    title: "Why Uplearning is Crucial in Trading",
    icon: "/up2.png",
    link: "/services-page/uplearn/crucial",
  },
  {
    title: "Success Stories: Real Results from Uplearning",
    icon: "/up3.png",
    link: "/services-page/uplearn",
  },
  {
    title: "5 Common Mistakes New Forex Traders Make",
    icon: "/up4.png",
    link: "/services-page/uplearn/comman-mistakes",
  },
];

export default function Section2() {
  return (
    <section className="bg-black text-white py-14 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Master the Markets with Insights <br className="hidden md:block" />
          from BKM Global's Uplearn Program
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-[#1a1a1a] rounded-xl p-6 hover:pb-18 flex flex-col items-center justify-center hover:scale-105 transition duration-300 border border-gray-700 overflow-hidden"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
                className="mb-4"
              />
              <p className="text-center text-lg font-medium">{service.title}</p>

              {/* Hover Button */}
              <Link
                href={service.link}
                className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition duration-300 bg-white text-black text-sm px-5 py-2 rounded-full shadow-md font-medium"
              >
                Know More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
