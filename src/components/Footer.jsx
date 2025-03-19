import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding + About */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">BKM Global</h2>
          <p className="text-sm">
            Empowering traders worldwide with cutting‑edge strategies, transparent management, and a community built for growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Connect</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" aria-label="Twitter"><FaTwitter className="hover:text-white"/></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin className="hover:text-white"/></a>
            <a href="#" aria-label="GitHub"><FaGithub className="hover:text-white"/></a>
          </div>
          <p className="text-sm">
            Email us: <a href="mailto:support@bkmglobal.com" className="hover:text-white">support@bkmglobal.com</a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} BKM Global. All rights reserved.
      </div>
    </footer>
  );
}
