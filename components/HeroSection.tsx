"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import TypeWriter from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/button"
import Link from "next/link";




export function HeroSection() {

  return (
    <div>
      <div className="h-96 relative h-screen w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <div className="flex flex-col items-center justify-center relative h-[15rem] max-w-4xl z-20">
          <h2 className="sm:text-6xl text-4xl text-neutral-200 my-10 font-bold cursor-default">
            <TypeWriter
              text="Hello, I&apos;m Daksh Rana"
              delay={100}
              pauseTime={3000}
            />
          </h2>
          <p className="text-center mt-1 text-neutral-200 relative z-20 my-20 sm:text-lg">
            I&apos;m an aspiring full-stack web developer passionate about creating
            stylish, efficient, and interactive websites. With expertise in Blender, Figma, JavaScript,
            and C#, I craft engaging digital experiences that blend design and functionality seamlessly.
          </p>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <Button className="w-40 h-15 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm z-20">
            <Link href="/Daksh-Rana-Resume.pdf" download target="_blank"> 
              Download CV
            </Link>
          </Button>
          <Button className="w-40 h-15 rounded-xl bg-white text-black border border-black  text-sm z-20">
          <Link href="https://www.linkedin.com/in/daksh-rana-dev/" target="_blank"> 
            Connect with me
            </Link>
          </Button>
        </div>
      </div>


    </div>
  );
}
