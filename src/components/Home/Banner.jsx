import React from 'react';

const Banner = () => {
  return (
    <section className="relative bg-black h-[70vh] flex items-center px-20 ">
      {/* Text Content */}
      <div className="max-w-2xl bg-black/50 rounded-md p-8 ">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          A New Way To Learn And Trade
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          A brief, compelling paragraph that explains what you do or what you offer — and why visitors should care.
        </p>
      </div>

      {/* Hero Image */}
    {/* Hero Image */}
{/* Hero Image */}
<div className="flex-1 flex justify-end">
  <img
    src="/apple.png"
    alt="Hero graphic"
    className="max-h-[70vh] object-contain shadow-[ -10px_-10px_30px_rgba(0,0,0,1) ]"
  />
</div>


    </section>
  );
};

export default Banner;
