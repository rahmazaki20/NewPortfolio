"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks, personalInfo } from "@/lib/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#0E0E0E]/95 border-b border-[#222]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-14">
        {/* Logo — name only, serif */}
        <Link
          href="#top"
          className="font-serif text-[15px] text-[#E8E6DF] tracking-wide hover:text-white transition-colors"
        >
          {personalInfo.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] text-[#666] hover:text-[#E8E6DF] tracking-widest uppercase transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={`mailto:${personalInfo.email}`}
            className="text-[13px] text-[#1A6B4A] hover:text-[#2A8A62] tracking-widest uppercase transition-colors"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#666] hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0E0E0E] border-t border-[#1E1E1E] px-6 py-8 space-y-6"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-[13px] text-[#666] hover:text-white tracking-widest uppercase transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={`mailto:${personalInfo.email}`}
              onClick={() => setIsOpen(false)}
              className="block text-[13px] text-[#1A6B4A] tracking-widest uppercase"
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;