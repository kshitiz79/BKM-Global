

import { Header } from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollLayout from "@/components/ScrollLayout";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ScrollLayout>
          <main>{children}</main>
          <Footer />
        </ScrollLayout>
      </body>
    </html>
  );
}

