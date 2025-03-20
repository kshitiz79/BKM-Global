"use client";
import Banner from "@/components/Home/Banner";
import { CardHoverEffectDemo } from "@/components/Home/CardHoverEffectDemo";
import { CardStackDemo } from "@/components/Home/CardStackDemo";
import { MeteorsDemo } from "@/components/Home/MeteorsDemo";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/Home/ShootingStarsAndStarsBackgroundDemo";
import WhyToChooseUs from "./../components/Home/WhyToChooseUs";
import Forex from "@/components/Home/Forex";
import TradingStrategyCards from "@/components/Home/TradingStrategies";
import MarqueeCards from "@/components/Home/MarqueeCards";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";


export default function Home() {
  return (
   <div>
    <Banner/>
   <MeteorsDemo/>
   <ShootingStarsAndStarsBackgroundDemo/>
<CardHoverEffectDemo/>
<Forex/>
<MarqueeCards/>
<WhyToChooseUs/>

<TradingStrategyCards/>
<CardStackDemo/>

   </div>
  );
}
