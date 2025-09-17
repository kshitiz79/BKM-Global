"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export const MenuItem = ({ setActive, active, item, href = "#", children, isMobile = false, onMobileClick }) => {
  const pathname = usePathname();
  const isHome = href === "/";
  const isActive = isHome ? pathname === "/" : pathname.startsWith(href);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMobileClick = () => {
    if (isMobile && children) {
      setIsExpanded(!isExpanded);
    } else if (onMobileClick) {
      onMobileClick();
    }
  };

  // Desktop version
  if (!isMobile) {
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
            className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4 z-50"
          >
            <motion.div
              transition={transition}
              layoutId="active"
              className="bg-white dark:bg-black  rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.1] shadow-xl"
            >
              <motion.div layout className="w-[30rem] h-80 p-4">
                {children}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    );
  }

  // Mobile version
  return (
    <div className="w-full">
      <div 
        className={`flex items-center justify-between w-full py-3 px-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md ${
          isActive ? "font-semibold text-blue-900 bg-blue-50 dark:bg-blue-900/20" : "text-black dark:text-white"
        }`}
        onClick={handleMobileClick}
      >
        <Link href={href} className="flex-1">
          <span>{item}</span>
        </Link>
        {children && (
          <motion.svg
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </motion.svg>
        )}
      </div>
      
      <AnimatePresence>
        {isExpanded && children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-gray-50 dark:bg-gray-800/50 rounded-md ml-4 mr-2"
          >
            <div className="p-4 space-y-3">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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

export const ProductItem = ({ title, description, href, src, isMobile = false, onMobileClick }) => {
  const handleClick = () => {
    if (onMobileClick) {
      onMobileClick();
    }
  };

  return (
    <Link 
      href={href} 
      className={`flex items-start space-x-3 normal-case p-2 hover:bg-white dark:hover:bg-gray-700 rounded-md transition-colors ${
        isMobile ? "w-full" : ""
      }`}
      onClick={handleClick}
    >
      <Image
        src={src}
        width={isMobile ? 40 : 50}
        height={isMobile ? 40 : 50}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div className="flex-1">
        <h4 className={`font-bold mb-1 text-black dark:text-white ${
          isMobile ? "text-base" : "text-lg"
        }`}>
          {title}
        </h4>
        <p className={`text-neutral-700 dark:text-neutral-300 ${
          isMobile ? "text-xs" : "text-sm"
        }`}>
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link {...rest} className="text-neutral-700 dark:text-neutral-200 hover:text-black text-blue-900">
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
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu on route change or window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 w-full mx-auto z-50 shadow dark:bg-black dark:border-white/[0.2] bg-white ${className}`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-24">
        <div className="logo flex-shrink-0">
          <img src="/logo.png" alt="Logo" className="h-16 sm:h-20 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <Menu setActive={setActive}>
            <MenuItem item="Home" href="/" />
            <MenuItem item="About" href="/about-page" />
            <MenuItem item="Services" href="/services-page/fund-management" active={active} setActive={setActive}>
              <div className="text-sm grid grid-cols-1 xl:grid-cols-2 gap-4 p-4">
                <ProductItem
                  title="Investment Management"
                  href="/services-page/fund-management"
                  src="/fund-mang.png"
                  description="Comprehensive Fund Management Solutions"
                />
                <ProductItem
                  title="Market Alerts"
                  href="/services-page/trading-signals"
                  src="/trading-signals.png"
                  description="Comprehensive Market Alerts for Strategic Investment"
                />
                <ProductItem
                  title="Uplearn"
                  href="/services-page/uplearn"
                  src="/uplearn.png"
                  description="Redefining Your Approach to Trading and Investment."
                />
              </div>
            </MenuItem>
            <MenuItem item="Contact Us" href="/contact-us" />
          </Menu>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button 
            className="text-black dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <AnimatePresence mode="wait">
                <motion.path
                  key={isMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </AnimatePresence>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2 max-h-[70vh] overflow-y-auto">
              <MenuItem item="Home" href="/" isMobile onMobileClick={closeMenu} />
              <MenuItem item="About" href="/about-page" isMobile onMobileClick={closeMenu} />
              <MenuItem item="Services" href="/services-page/fund-management" isMobile>
                <div className="space-y-3">
                  <ProductItem
                    title="Investment Management"
                    href="/services-page/fund-management"
                    src="/fund-mang.png"
                    description="Comprehensive Fund Management Solutions"
                    isMobile
                    onMobileClick={closeMenu}
                  />
                  <ProductItem
                    title="Market Alerts"
                    href="/services-page/trading-signals"
                    src="/trading-signals.png"
                    description="Comprehensive Market Alerts for Strategic Investment"
                    isMobile
                    onMobileClick={closeMenu}
                  />
                  <ProductItem
                    title="Uplearn"
                    href="/services-page/uplearn"
                    src="/uplearn.png"
                    description="Redefining Your Approach to Trading and Investment."
                    isMobile
                    onMobileClick={closeMenu}
                  />
                </div>
              </MenuItem>
              <MenuItem item="Privacy Policy" href="/privacy-policy" isMobile onMobileClick={closeMenu} />
              <MenuItem item="Contact Us" href="/contact-us" isMobile onMobileClick={closeMenu} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-black/20  z-40"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </div>
  );
}