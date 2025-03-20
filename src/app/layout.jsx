"use client"

import { Header } from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
   
    
          <main>{children}</main>
          <Footer />
  
      </body>
    </html>
  );
}
