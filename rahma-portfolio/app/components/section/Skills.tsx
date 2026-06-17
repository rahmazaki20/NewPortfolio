"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const Skills = () => {
  return (
    <section className="py-28 sm:py-36" id="skills">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[15px] text-[#1A6B4A] tracking-[0.2em] uppercase">02</span>
          <span className="block flex-1 h-px bg-[#1E1E1E]" />
          <span className="text-[15px] text-[#444] tracking-[0.2em] uppercase">Technical Arsenal</span>
        </div>

        {/* Skills — two-column label + tags layout */}
        <div className="space-y-0 divide-y divide-[#1A1A1A]">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 py-7 group"
            >
              {/* Label */}
              <div className="flex items-center gap-3">
                <skill.icon
                  className="w-4 h-4 text-[#333] group-hover:text-[#1A6B4A] transition-colors shrink-0"
                />
                <span className="text-[16px] text-[#888] tracking-wide">
                  {skill.name}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-[15px] text-[#666]
                      border border-[#222]
                      hover:border-[#1A6B4A] hover:text-[#1A6B4A]
                      transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;