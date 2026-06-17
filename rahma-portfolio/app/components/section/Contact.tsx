"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Download } from "lucide-react";
import { socialLinks, personalInfo } from "@/lib/data";

const Contact = () => {
  return (
    <section className="py-28 sm:py-36" id="contact">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] text-[#1A6B4A] tracking-[0.2em] uppercase">03</span>
          <span className="block flex-1 h-px bg-[#1E1E1E]" />
          <span className="text-[11px] text-[#444] tracking-[0.2em] uppercase">Let's Connect</span>
        </div>

        {/* Big CTA headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20"
        >
          <h2 className="font-serif text-[clamp(2rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-[#E8E6DF] max-w-2xl">
            Have a project in mind?
            <br />
            <span className="text-[#333]">Let's talk.</span>
          </h2>
        </motion.div>

        {/* Links — row list */}
        <div className="divide-y divide-[#1A1A1A]">

          {/* Email */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group flex items-center justify-between py-7 cursor-pointer"
          >
            <div className="flex items-center gap-5">
              <Mail className="w-4 h-4 text-[#333] group-hover:text-[#1A6B4A] transition-colors shrink-0" />
              <div>
                <p className="text-[11px] text-[#444] tracking-widest uppercase mb-1">Email</p>
                <p className="text-base text-[#888] group-hover:text-[#E8E6DF] transition-colors">
                  {personalInfo.email}
                </p>
              </div>
            </div>
            <ArrowUpRight
              className="w-4 h-4 text-[#333] group-hover:text-[#1A6B4A]
                transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>

          {/* Social links */}
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.06, duration: 0.4 }}
              className="group flex items-center justify-between py-7 cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <link.icon className="w-4 h-4 text-[#333] group-hover:text-[#1A6B4A] transition-colors shrink-0" />
                <div>
                  <p className="text-[11px] text-[#444] tracking-widest uppercase mb-1">{link.name}</p>
                  <p className="text-base text-[#888] group-hover:text-[#E8E6DF] transition-colors">
                    {link.description}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                className="w-4 h-4 text-[#333] group-hover:text-[#1A6B4A]
                  transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          ))}

          {/* Resume */}
          <motion.a
            href={personalInfo.resumeUrl}
            download
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (socialLinks.length + 1) * 0.06, duration: 0.4 }}
            className="group flex items-center justify-between py-7 cursor-pointer"
          >
            <div className="flex items-center gap-5">
              <Download className="w-4 h-4 text-[#333] group-hover:text-[#1A6B4A] transition-colors shrink-0" />
              <div>
                <p className="text-[11px] text-[#444] tracking-widest uppercase mb-1">Resume</p>
                <p className="text-base text-[#888] group-hover:text-[#E8E6DF] transition-colors">
                  Download PDF
                </p>
              </div>
            </div>
            <ArrowUpRight
              className="w-4 h-4 text-[#333] group-hover:text-[#1A6B4A]
                transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-20 text-[11px] text-[#333] tracking-widest uppercase"
        >
          {personalInfo.location} — {new Date().getFullYear()}
        </motion.p>

      </div>
    </section>
  );
};

export default Contact;