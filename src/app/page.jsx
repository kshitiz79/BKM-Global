"use client";

import { ShootingStarsAndStarsBackgroundDemo } from "@/components/Home/ShootingStarsAndStarsBackgroundDemo";
import Forex from "@/components/Home/Forex";
import TradingStrategyCards from "@/components/Home/TradingStrategies";

import BlockchainHero from "@/components/Home/BlockchainHero";
import OurServices from "@/components/Home/OurServices";

import ScrollImageStack from "@/components/Home/ScrollImageStack";
import ContactSection from "@/components/Home/ContactUs";



export default function Home() {
  return (
   <div>
    <BlockchainHero/>
   <ShootingStarsAndStarsBackgroundDemo/>
   <Forex/>
   <ScrollImageStack/>
   <OurServices/>
   <TradingStrategyCards/>
   <ContactSection/>
   </div>
  );
}
