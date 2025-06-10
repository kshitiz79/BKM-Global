"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, href = "#", children }) => {
  const pathname = usePathname();
  const isHome = href === "/";
  const isActive = isHome ? pathname === "/" : pathname.startsWith(href);

  return (
    <div onMouseEnter={() => setActive?.(item)} className="relative">
      <Link href={href}>
        <motion.p
          transition={{ duration: 0.3 }}
          className={`cursor-pointer px-2 py-1 rounded-md text-black dark:text-white hover:opacity-[0.9] ${
            isActive ? "font-semibold underline text-blue-900" : ""
          }`}
        >
          {item}
        </motion.p>
      </Link>

      {active === item && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.1] shadow-xl"
          >
            <motion.div layout className="w-[30rem] h-80 p-4">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative uppercase rounded-full border border-transparent dark:bg-black bg-white shadow-input flex justify-center space-x-8 px-8 py-8"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link href={href} className="flex items-start space-x-3 normal-case">
      <Image
        src={src}
        width={50}
        height={50}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-lg font-bold mb-1 text-black dark:text-white">{title}</h4>
        <p className="text-neutral-700 text-sm dark:text-neutral-300">{description}</p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link {...rest} className="text-neutral-700 dark:text-neutral-200 hover:text-black">
      {children}
    </Link>
  );
};

export function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className={`fixed inset-x-0 w-full mx-auto z-50 shadow dark:bg-black dark:border-white/[0.2] bg-white ${className}`}
    >
      <div className="flex items-center justify-between px-6 sm:px-8 lg:px-24">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="h-20 ml-8 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <Menu setActive={setActive}>
            <MenuItem item="Home" href="/" />
            <MenuItem item="About" href="/about-page" />
            <MenuItem item="Services" href="/services-page/fund-management" active={active} setActive={setActive}>
              <div className="text-sm grid grid-cols-2 gap-4 p-4">
                <ProductItem
                  title="Investment Management"
                  href="/services-page/fund-management"
                  src="/fund-mang.png"
                  description="Comprehensive Asset Management Solutions"
                />
                <ProductItem
                  title="Market Alerts"
                  href="/services-page/trading-signals"
                  src="/trading-signals.png"
                  description="Comprehensive Trading Signals for Strategic Investment"
                />
                <ProductItem
                  title="Uplearn"
                  href="/services-page/uplearn"
                  src="/uplearn.png"
                  description="Redefining Your Approach to Trading and Investment."
                />
              </div>
            </MenuItem>
            <MenuItem item="Blog" href="/blog-page" />
            <MenuItem item="Privacy Policy" href="/privacy-policy" />
            <MenuItem item="Contact Us" href="/contact-us" />
          </Menu>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button className="text-black dark:text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-black p-6 space-y-4">
          <MenuItem item="Home" href="/" />
          <MenuItem item="About" href="/about-page" />
          <MenuItem item="Services" href="/services-page">
            <div className="text-sm space-y-4">
              <ProductItem
                title="Fund Management"
                href="/services-page/fund-management"
                src="/fund-mang.png"
                description="Comprehensive Asset Management Solutions"
              />
              <ProductItem
                title="Market Alerts"
                href="/services-page/trading-signals"
                src="/trading-signals.png"
                description="Comprehensive Trading Signals for Strategic Investment"
              />
              <ProductItem
                title="Uplearn"
                href="/services-page/uplearn"
                src="/uplearn.png"
                description="Redefining Your Approach to Trading and Investment."
              />
            </div>
          </MenuItem>
          <MenuItem item="Blog" href="/blog-page" />
          <MenuItem item="Privacy Policy" href="/privacy-policy" />
          <MenuItem item="Contact Us" href="/contact-us" />
        </div>
      )}
    </div>
  );
}
