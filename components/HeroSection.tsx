"use client";
import React from "react";
import TypeWriter from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight-new";

export function HeroSection() {
  return (
    <div>
      <div className="h-96 relative h-screen w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
        {/* Background grid and mask */}
        <div className="absolute inset-0 w-full h-full bg-grid-white/[0.02] bg-grid-8" />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        {/* Animated spotlight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Spotlight
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .15) 0, hsla(210, 100%, 55%, .08) 50%, hsla(210, 100%, 45%, 0) 80%)"
            translateY={-350}
            width={560}
            height={1380}
          />
        </motion.div>
        
        <div className="absolute w-full h-full bg-slate-900 [mask-image:radial-gradient(transparent,white)] pointer-events-none opacity-50" />
        
        {/* Moving background bubbles with new animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-30">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/40 rounded-full mix-blend-multiply filter blur-2xl animate-float"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/40 rounded-full mix-blend-multiply filter blur-2xl animate-orbit"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/40 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"
            />
          </div>
        </div>

        {/* Content section with animations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center justify-center relative h-[15rem] max-w-4xl z-20"
        >
          <h2 className="sm:text-6xl text-4xl text-neutral-200 my-10 font-bold cursor-default">
            <TypeWriter
              text="Hello, I&apos;m Daksh Rana"
              delay={100}
              pauseTime={3000}
            />
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
            }}
            transition={{ 
              duration: 1.2, 
              delay: 1.5,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="text-center mt-1 relative z-20 my-20 sm:text-lg"
          >
            <span className="text-neutral-200">I&apos;m an aspiring </span>
            <span className="relative inline-block font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-blue-500 via-purple-500 to-pink-500 animate-text-shine">
              Web Developer and Indie Game Developer
            </span>
            <span className="text-neutral-200"> passionate about creating
            stylish, efficient, and interactive websites and games. With expertise in </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold">
              Blender, Figma, Unity, JavaScript, and C#
            </span>
            <span className="text-neutral-200">, I craft engaging digital experiences that blend design and functionality seamlessly.</span>
          </motion.p>
        </motion.div>

        {/* Buttons with hover animations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Button className="relative w-44 h-12 rounded-xl bg-black/30 backdrop-blur-sm border-0 text-white text-sm z-20 transition-all duration-500 group-hover:bg-black/50 group-hover:shadow-[0_0_2rem_-0.5rem_#8b5cf6] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Link href="/DAKSH_RANA_RESUME_2025.pdf" download target="_blank" className="flex items-center gap-2"> 
                Download CV
                <motion.span
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  ⬇️
                </motion.span>
              </Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Button className="relative w-44 h-12 rounded-xl bg-white/10 backdrop-blur-sm border-0 text-white text-sm z-20 transition-all duration-500 group-hover:bg-white/20 group-hover:shadow-[0_0_2rem_-0.5rem_#3b82f6] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Link href="https://www.linkedin.com/in/daksh-rana-dev/" target="_blank" className="flex items-center gap-2"> 
                Connect with me
                <motion.span
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  →
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
