"use client";
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative bg-blue-900 md:h-[70vh] h-[40vh] flex items-center sm:px-20">
      {/* Text Content */}
      <div className="max-w-2xl bg-blue-800/50 rounded-md p-8 hidden md:block">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 hidden md:block">
          A New Way To Learn And Trade
        </h1>
        <p className="text-lg md:text-xl text-blue-100 hidden md:block">
          A brief, compelling paragraph that explains what you do or what you offer — and why visitors should care.
        </p>
      </div>

      {/* Hero Image */}
      <div className="flex-1 flex justify-end">
        <img
          src="/apple.png"
          alt="Hero graphic"
          className="max-h-[70vh] object-contain shadow-[ -10px_-10px_30px_rgba(26,58,141,0.5) ] hidden md:block"
        />
      </div>

      <div className='justify-center'>
        <img
          src="/apple.png"
          alt="Hero graphic"
          className="h-full object-contain shadow-[ -10px_-10px_30px_rgba(26,58,141,0.5) ] sm:hidden w-full"
        />
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
};

export default Banner;