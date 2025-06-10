"use client"

import { Header } from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
   
    
          <main>{children}</main>
          <Footer />
          <a
href="https://wa.me/9740633154"
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
