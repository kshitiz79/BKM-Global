"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const testimonials = [
  // {
  //   image: "/fund1.png",
  //   title: "Understanding the Basics",
  //   quote:
  //     "Investment management, also known as asset management, involves a structured approach to managing both intangible and tangible assets to maximize their value. This encompasses a wide range of assets, from intellectual property and goodwill to equipment and real estate. The primary goal of investment management is to operate, deploy, maintain, dispose of, and upgrade assets in the most cost-efficient and profit-yielding manner possible.",
  //   name: "Anjali S.",
  //   role: "Bangalore",
  //   avatar: "/fund1.png",
  // },
  {
    image: "/fund1.png",
    title: "The Role of an Investment Manager",
    quote:
      "A fund manager plays a critical role in this process. They must meticulously balance cost and risk to capitalize on cash flow opportunities. In financial institutions, the ability to offer credit to customers hinges on the proper liquidity of funds, making the fund manager's role indispensable. Effective investment management ensures that financial resources are available when needed, facilitating smooth operations and growth.",
    name: "Rajesh K.",
    role: "Bengaluru",
    avatar: "/fund1.png",
  },
];

export default function Section1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-16 px-16 md:px-24 lg:px-32 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 transition-all duration-500">
        {/* Left Image */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <div className="relative w-full h-[400px] md:h-[450px] rounded-3xl overflow-hidden">
            <Image
              src={testimonial.image}
              alt="Testimonial"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <span className="inline-block bg-gray-200 text-sm text-[#07372B] font-medium px-4 py-1 rounded-full mb-4">
            What is Investment Management?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#07372B] mb-4">
            {testimonial.title}
          </h2>

          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-[#07372B]" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-gray-700 text-lg mb-6 text-justify">“{testimonial.quote}”</p>

          {/* Profile */}
          <div className="flex items-center gap-4">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h4 className="font-semibold text-[#07372B]">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-gray-800 text-black flex items-center justify-center hover:bg-[#07372B] hover:text-white transition"
            >
              <FiArrowLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-gray-800 text-black flex items-center justify-center hover:bg-[#07372B] hover:text-white transition"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/9740633154"
        className="fixed bottom-6 right-6 bg-[#25D366] p-3 rounded-full shadow-lg hover:scale-105 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
    </section>
  );
}