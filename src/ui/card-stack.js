"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
  flipDelay = 0,
}) => {
  const [cards, setCards] = useState(items);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCards(prev => {
          const copy = [...prev];
          copy.unshift(copy.pop());
          return copy;
        });
      }, 5000);
    }, flipDelay);

    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, [flipDelay]);

  return (
    <div className="relative h-60 w-80 md:h-60 md:w-96">
      {cards.map((card, i) => (
        <motion.div
          key={card.id}
          className="absolute dark:bg-black bg-black h-80 w-80 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between "
          style={{ transformOrigin: "top center" }}
          animate={{
            top: i * -offset,
            scale: 1 - i * scaleFactor,
            zIndex: cards.length - i,
          }}
        >
          <div className="font-normal text-neutral-700 dark:text-neutral-200">
            {card.content}
          </div>
          <div>
            <p className="text-neutral-100 font-medium dark:text-white">{card.name}</p>
            <p className="text-neutral-100 dark:text-neutral-200">{card.designation}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
