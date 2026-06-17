"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Folder, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "./shared/SectionHeader";
import { projects } from "@/lib/data";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (projectTitle: string) => {
    setImageError(prev => ({
      ...prev,
      [projectTitle]: true
    }));
  };

  return (
    <section className="py-32" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-20">
          <SectionHeader
            title="Featured Projects"
            subtitle="A curated collection of my most impactful and innovative work"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-32"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="w-full md:w-3/5 relative aspect-[16/10] rounded-xl overflow-hidden group border border-zinc-700/50">
                  <div className="absolute inset-0 bg-zinc-950/50 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-500" />
                  
                  {imageError[project.title] ? (
                    // Placeholder when image fails to load
                    <div className="absolute inset-0 bg-zinc-800/50 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <ImageIcon className="w-12 h-12 mx-auto text-zinc-400" />
                        <p className="text-sm text-zinc-400">
                          Project Preview
                        </p>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      onError={() => handleImageError(project.title)}
                      priority={index < 2} // Prioritize loading first two images
                    />
                  )}

                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-4">
                    <div className="flex gap-2">
                      <motion.a
                        whileHover={{ y: -2 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 transition-colors"
                      >
                        <Github className="w-6 h-6 text-zinc-200" />
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -2 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 transition-colors"
                      >
                        <ExternalLink className="w-6 h-6 text-zinc-200" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/5 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-zinc-800/50">
                        <Folder className="w-5 h-5 text-zinc-400" />
                      </div>
                      <span className="text-sm text-zinc-400 font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-zinc-100">
                      {project.title}
                    </h3>
                  </div>

                  <div className="relative">
                    <div className="p-6 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50">
                      <p className="text-zinc-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 text-sm rounded-full
                                 bg-zinc-800/30
                                 text-zinc-300
                                 hover:bg-zinc-700/50
                                 hover:text-zinc-100
                                 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;