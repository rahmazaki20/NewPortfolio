'use client'

import { Suspense } from "react";
import Navbar from "./components/section/Navbar" 
import Hero from "./components/section/Hero"
import Skills from "./components/section/Skills"
import Projects from "./components/section/Projects"
import Experience from "./components/section/Experience"
import Contact from "./components/section/Contact"
import LoadingSpinner from "@/app/components/ui/LoadingSpinner";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 transition-colors duration-300 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-50">
        <div className="absolute inset-0 bg-grid-futuristic" />
        <div className="absolute inset-0 bg-matrix-effect" />
        <div className="absolute inset-0 bg-circuit" />
        <div className="absolute inset-0 bg-glow" />
      </div>
      <Navbar />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>
        <div className="space-y-32">
          <Suspense fallback={<LoadingSpinner />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Experience />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
