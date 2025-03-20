
"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="relative h-[60vh] w-full overflow">
      <div className="absolute inset-0">
        <Image
          src="/1.png" // Replace with your image path
          alt="About Us Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 uppercase tracking-wider">
            About Us
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Transforming Ideas into Digital Reality
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;