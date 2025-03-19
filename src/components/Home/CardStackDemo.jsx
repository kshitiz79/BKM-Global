"use client";
import { CardStack } from "./../../ui/card-stack";
import { cn } from "./../../lib/utils";
export function CardStackDemo() {
  return (
<div className="py-20">
    <div className="justify-center text-center text-4xl uppercase">Testimonials</div>

    <div className="h-auto flex items-center justify-center w-full gap-7 mt-10">


      <CardStack items={CARDS} flipDelay={2500} />
      <CardStack items={CARDS}  flipDelay={2000}/>
      <CardStack items={CARDS} flipDelay={30000} />
      
    </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}>
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Sophia Martinez",
    designation: "Independent Forex Investor",
    content: (
      <p>
        I can’t thank <Highlight>BKM Global</Highlight> enough for their exceptional account management. Their tailored strategies and transparent communication have driven consistent profits in my forex portfolio. I’ve tried countless services — none compare to the growth and confidence I’ve gained here.
      </p>
    ),
  },
  {
    id: 1,
    name: "Daniel Okoro",
    designation: "Entrepreneur & Trader",
    content: (
      <p>
        Since partnering with <Highlight>BKM Global</Highlight>, my trading performance has skyrocketed. Their expert team identifies market opportunities before they happen, and their risk controls keep my capital safe. I wholeheartedly recommend them to anyone serious about financial growth.
      </p>
    ),
  },
  {
    id: 2,
    name: "Emily Chen",
    designation: "Wealth Management Client",
    content: (
      <p>
        The personalized approach at <Highlight>BKM Global</Highlight> is unmatched. Their professionalism, transparency, and proven track record of profitable trades have accelerated my journey toward my financial goals. Trusting them has been the best investment decision I’ve made.
      </p>
    ),
  },
];

