"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="min-h-svh w-full flex flex-col justify-end relative pb-16 sm:pb-20 pt-24"
      id="top"
    >
      {/* Big editorial name — top left */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="block w-8 h-px bg-[#1A6B4A]" />
          <span className="text-[11px] text-[#1A6B4A] tracking-[0.2em] uppercase font-medium">
            Available for Projects
          </span>
        </motion.div>

        {/* Display name — huge, serif, left-aligned */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(3rem,10vw,8rem)] leading-[0.95] tracking-tight
            text-[#E8E6DF] mb-6"
        >
          Rahma
          <br />
          <span className="text-[#333]">Zaki</span>
        </motion.h1>

        {/* Divider + role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 border-t border-[#1E1E1E]"
        >
          <div className="space-y-1">
            <p className="text-[15px] text-[#555] tracking-widest uppercase">Role</p>
            <p className="text-base text-[#999] max-w-sm leading-relaxed">
              {personalInfo.role}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-[15px] text-[#555] tracking-widest uppercase">Based in</p>
            <p className="text-base text-[#999]">{personalInfo.location}</p>
          </div>

          <div className="space-y-1">
            <p className="text-[15px] text-[#555] tracking-widest uppercase">Status</p>
            <p className="text-base text-[#1A6B4A]">Open to work</p>
          </div>

          {/* CTA */}
          <div className="flex gap-3 sm:ml-auto">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5
                border border-[#E8E6DF] text-[#E8E6DF]
                text-[15px] tracking-wide
                hover:bg-[#E8E6DF] hover:text-[#0E0E0E]
                transition-all duration-200"
            >
              View Projects
              <ArrowDownRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5
                border border-[#1A6B4A] text-[#1A6B4A]
                text-[15px] tracking-wide
                hover:bg-[#1A6B4A] hover:text-white
                transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;