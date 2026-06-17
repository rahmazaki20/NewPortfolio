"use client";

import { Card } from "@/app/components/ui/Card";
import { motion } from "framer-motion";
import { SectionHeader } from "./shared/SectionHeader";
import { currentlyLearning } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Currently Learning"
          subtitle="I'm currently learning about the following technologies and frameworks"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative"
        >
          {/* Decorative line */}
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0" />

          <div className="space-y-6">
            {currentlyLearning.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="relative ml-16 group p-4 md:p-6 xl:p-8">
                  {/* Connection line */}
                  <div className="absolute -left-[3.25rem] top-1/2 w-8 h-[1px] bg-blue-500/20 group-hover:bg-blue-500/40 transition-colors" />

                  {/* Icon circle */}
                  <div className="absolute -left-[4.25rem] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                    <item.icon className="w-4 h-4 text-blue-500" />
                  </div>

                  <div className="p-0 md:p-4 xl:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-zinc-200 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 md:line-clamp-none">
                          {item.description}
                        </p>
                      </div>

                      <div className="sm:w-48">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-zinc-400">
                              Progress
                            </span>
                            <span className="text-zinc-200 tabular-nums font-medium">
                              {item.progress}%
                            </span>
                          </div>
                          <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${item.progress}%` }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                              className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                            />
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            Started {item.startedDate}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
