"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="relative bg-white text-gray-900">
      {/* Top section: Social networks */}
      <div className="relative border-b border-gray-200 py-4 flex flex-col md:flex-row justify-between items-center lg:px-16 z-10 text-center">
        <div className="mb-2 md:mb-0">Get connected with us on social networks:</div>
        <div className="flex space-x-4">
          <Link href="https://www.facebook.com/people/BKM-Global/61561378508716/" aria-label="Facebook">
            <FaFacebookF className="text-xl hover:text-gray-900 transition-colors" />
          </Link>
          <Link href="https://www.instagram.com/bkmglobal24/" aria-label="Instagram">
            <FaInstagram className="text-xl hover:text-gray-900 transition-colors" />
          </Link>
        </div>
      </div>

      {/* Main footer section */}
      <div className="relative mx-auto py-10 px-6 md:px-12 lg:px-16 border-b border-gray-100 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {/* Company Logo */}
          <div className="text-center lg:text-left">
            <img src="/logo.png" alt="logo" className="w-48 mx-auto lg:mx-0" />
          </div>

          {/* Pages */}
          <div className="text-center lg:text-left">
            <h6 className="uppercase font-semibold mb-4">Pages</h6>
            <p className="mb-4 text-black hover:text-gray-800 transition-colors">
              <Link href="/">Home</Link>
            </p>
            <p className="mb-4 text-black hover:text-gray-800 transition-colors">
              <Link href="/services">Service</Link>
            </p>
            <p className="mb-4 text-black hover:text-gray-800 transition-colors">
              <Link href="/blog">Blog</Link>
            </p>
            <p className="mb-4 text-black hover:text-gray-800 transition-colors">
              <Link href="/contact">Contact</Link>
            </p>
          </div>

          {/* Services */}
          <div className="text-center lg:text-left">
            <h6 className="uppercase font-semibold mb-4">Services</h6>
            <p className="mb-4">
              <Link href="#" className="text-gray-900 hover:text-gray-100 transition-colors">
                Day Trading
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#" className="text-gray-900 hover:text-gray-100 transition-colors">
                Swing Trading
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#" className="text-gray-900 hover:text-gray-100 transition-colors">
                Position Trading
              </Link>
            </p>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left text-black">
            <h6 className="uppercase font-semibold mb-4">Contact</h6>
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex mb-4">
                <Link
                  href="https://www.google.com/maps/place/Electronic+City+Phase+1,+Bengaluru,+Karnataka+560100,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiMapPin className="mr-2" size={18} />
                </Link>
                <p className="hover:underline">
                  <Link
                    href="https://www.google.com/maps/place/Electronic+City+Phase+1,+Bengaluru,+Karnataka+560100,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Electronic City Phase 1, Bengaluru, Karnataka 560100, India
                  </Link>
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FiMail className="mr-2" size={18} />
                <p>
                  <a href="mailto:info@bkmglobal.in" className="hover:underline">
                    info@bkmglobal.in
                  </a>
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FiPhone className="mr-2" size={18} />
                <p>
                  <a href="tel:+919740633154" className="hover:underline">
                    +919740633154
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative bg-gray-950 text-center py-4 z-10 flex flex-col md:flex-row justify-between items-center px-6 text-xs md:text-sm">
        <p className="text-gray-300 mb-2 md:mb-0">
          Powered by{" "}
          <Link href="https://rbshstudio.com" className="text-gray-400 font-semibold">
            RBSH Studio
          </Link>
        </p>
        <p className="text-gray-300">
          © 2025 Copyright:{" "}
          <Link href="/" className="text-gray-400 font-semibold ml-1">
            BKM GLOBAL
          </Link>
        </p>
      </div>
    </footer>
  );
}