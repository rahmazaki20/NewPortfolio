"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Briefcase } from "lucide-react";
import { SectionHeader } from "./shared/SectionHeader";
import { Card } from "../ui/Card";
import { experiences } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const experienceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      // ease: "easeOut",
    },
  },
};

const Experience = () => {
  return (
    <section className="py-32 relative" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-20">
          <SectionHeader
            title="Professional Journey"
            subtitle="A timeline of my professional growth and achievements"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative space-y-12"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-4 bottom-4 w-px bg-linear-to-b from-zinc-800 via-zinc-700 to-zinc-800 hidden lg:block" />

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={experienceVariants}
                className="relative"
              >
                <Card
                  gradient
                  className={`p-0.5 rounded-xl bg-linear-to-r ${experience.color}`}
                >
                  <div className="relative p-8 rounded-xl bg-zinc-900/90 backdrop-blur-xl">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Timeline dot */}
                      <div className="hidden lg:block absolute -left-8 top-10 w-4 h-4 rounded-full border-2 border-zinc-700 bg-zinc-800" />

                      <div className="flex-1 space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-zinc-800/50">
                                <Briefcase className="w-5 h-5 text-zinc-400" />
                              </div>
                              <h3 className="text-2xl font-bold text-zinc-100">
                                {experience.title}
                              </h3>
                            </div>
                            <motion.a
                              href={experience.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zinc-400 hover:text-zinc-200 transition-colors inline-flex items-center gap-1.5 group"
                              whileHover={{ x: 2 }}
                            >
                              {experience.company}
                              <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </motion.a>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                            {/* <span className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              {experience.period}
                            </span> */}
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4" />
                              {experience.location}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="relative">
                            <div className="space-y-2">
                              {experience.description.map((item, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.2 + i * 0.1 }}
                                  className="flex items-start gap-3 text-zinc-300"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2.5" />
                                  <span className="flex-1 line-clamp-1 xl:line-clamp-none">
                                    {item}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 pt-2">
                            {experience.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 text-sm rounded-full
                                         bg-zinc-800/30
                                         text-zinc-300
                                         hover:bg-zinc-700/50
                                         hover:text-zinc-100
                                         transition-colors cursor-default"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
