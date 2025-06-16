"use client";

import React from "react";
import { Meteors } from "./../../ui/meteors";

const cards = [
  {
    id: 1,
    title: "Learn",
    description: "Step By Step",
  },
  {
    id: 2,
    title: "Practice ",
    description: "On Your Setup",
  },
  {
    id: 3,
    title: "Invest",
    description: "Wisely & Making Profit",
  },
];

export function MeteorsDemo() {
  return (
    <div className="bg-white relative">
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 bg-black">
      {cards.map(card => (
        <div key={card.id} className="relative w-full">
          <div className="absolute inset-0 scale-[0.80] transform rounded-full blur-xl" />
          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-xl">
            <h2 className="relative z-10 text-xl font-bold text-center text-white uppercase">{card.title}</h2>
            <p className="relative z-10 mt-2 text-center text-white uppercase">{card.description}</p>
            <Meteors number={15} />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
