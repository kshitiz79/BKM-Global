"use client"

import { Header } from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";


import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Optional if using CSS variables
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
   
    
          <main>{children}</main>
          <Footer />
          <a
href="https://api.whatsapp.com/send/?phone=919740633154&text&type=phone_number&app_absent=0"
className="fixed bottom-6 right-6 bg-[#25D366] p-3 rounded-full shadow-lg hover:scale-105 transition"
target="_blank"
rel="noopener noreferrer"
>
<FaWhatsapp className="text-white text-2xl" />
</a>

  
      </body>
    </html>
  );
}
