
"use client";
import React from 'react';

const Banner = () => {
  return (
    <section className="relative bg-black md:h-[70vh] h-[40vh] flex items-center sm:px-20 ">
      {/* Text Content */}
      <div className="max-w-2xl bg-black/50 rounded-md p-8  hidden md:block">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 hidden md:block">
          A New Way To Learn And Trade
        </h1>
        <p className="text-lg md:text-xl text-gray-200 hidden md:block">
          A brief, compelling paragraph that explains what you do or what you offer — and why visitors should care.
        </p>
      </div>

      {/* Hero Image */}
    {/* Hero Image */}
{/* Hero Image */}
<div className="flex-1 flex  justify-end">
  <img
    src="/apple.png"
    alt="Hero graphic"
    className="max-h-[70vh] object-contain shadow-[ -10px_-10px_30px_rgba(0,0,0,1) ] hidden md:block"
  />
</div>

<div className='  justify-center'>

<img
    src="/apple.png"
    alt="Hero graphic"
    className="h-full object-contain shadow-[ -10px_-10px_30px_rgba(0,0,0,1) ] sm:hidden w-full "
  />
</div>
    </section>
  );
};

export default Banner;
