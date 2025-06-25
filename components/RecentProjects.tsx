"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-900/60 py-24">
      {/* Background grid and mask */}
      <div className="absolute inset-0 w-full h-full bg-grid-white/[0.02] bg-grid-8" />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute w-full h-full bg-slate-900 [mask-image:radial-gradient(transparent,white)] pointer-events-none opacity-50" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 max-w-7xl mx-auto">
        <h1 className="heading text-zinc-200 mb-20 text-center text-4xl md:text-5xl font-bold">
          A small section of{' '}
          <span className="text-purple">Recent Projects</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 max-w-7xl mx-auto">
          {/* Zeniski Project */}
          <CardContainer className="inter-var h-[650px]">
            <CardBody className="bg-gradient-to-br from-gray-900/60 via-teal-800/5 to-black/80 relative group/card dark:hover:shadow-2xl dark:hover:shadow-teal-500/40 dark:border-white/[0.1] border-teal-500/30 w-full h-full rounded-2xl p-10 md:p-14 border backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-teal-500/60">
              <div className="flex items-center mb-5">
          <div className="w-3 h-3 rounded-full bg-teal-400 mr-2 animate-pulse"></div>
          <CardItem
            translateZ="60"
            className="text-3xl font-bold text-teal-50"
          >
            Zeniski
          </CardItem>
              </div>
              <CardItem
          as="p"
          translateZ="70"
          className="text-teal-50 text-base max-w-sm mt-3 leading-relaxed"
              >
          An advance website that improves efficiency and productivity
              </CardItem>
              <CardItem translateZ="120" className="w-full mt-8">
          <div className="overflow-hidden rounded-xl border border-teal-500/30 group-hover/card:border-teal-500/60 transition-colors duration-500">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600/30 to-teal-400/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 blur-md"></div>
              <Image
                src="/zeniski.png"
                height={1000}
                width={1000}
                className="h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl transform transition-transform duration-500 group-hover/card:scale-105"
                alt="Zeniski project thumbnail"
              />
            </div>
          </div>
              </CardItem>
              <div className="flex justify-between items-center mt-16">
          <CardItem
            translateZ={30}
            as={Link}
            href="https://github.com/Demigod1410/zeniski"
            target="_blank"
            className="px-6 py-2.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/40 text-teal-50 text-sm transition-all duration-300 hover:border-teal-500/60 flex items-center gap-2 backdrop-blur-sm hover:scale-105"
          >
            <span>View Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* ElixirPotion Project */}
          <CardContainer className="inter-var h-[650px]">
            <CardBody className="bg-gradient-to-br from-gray-900/60 via-blue-900/10 to-black/80 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/40 dark:border-white/[0.1] border-blue-500/30 w-full h-full rounded-2xl p-10 md:p-14 border backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/60">
              <div className="flex items-center mb-5">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
                <CardItem
                  translateZ="60"
                  className="text-3xl font-bold text-blue-50"
                >
                  ElixirPotion
                </CardItem>
              </div>
              <CardItem
                as="p"
                translateZ="70"
                className="text-blue-50 text-base max-w-sm mt-3 leading-relaxed"
              >
                Premium cocktail website
              </CardItem>
              <CardItem translateZ="120" className="w-full mt-8">
                <div className="overflow-hidden rounded-xl border border-blue-500/30 group-hover/card:border-blue-500/60 transition-colors duration-500">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-blue-400/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 blur-md"></div>
                    <Image
                      src="/hero.png"
                      height={1000}
                      width={1000}
                      className="h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl transform transition-transform duration-500 group-hover/card:scale-105"
                      alt="ElixirPotion project thumbnail"
                    />
                  </div>
                </div>
              </CardItem>
              <div className="flex justify-between items-center mt-16">
                <CardItem
                  translateZ={30}
                  as={Link}
                  href="https://github.com/Demigod1410/ElixirPotion"
                  target="_blank"
                  className="px-6 py-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/40 text-blue-50 text-sm transition-all duration-300 hover:border-blue-500/60 flex items-center gap-2 backdrop-blur-sm hover:scale-105"
                >
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </CardItem>
                <CardItem
                  translateZ={30}
                  as={Link}
                  href="https://elixir-potion-lac.vercel.app/"
                  target="_blank"
                  className="px-6 py-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/40 text-blue-50 text-sm transition-all duration-300 hover:border-blue-500/60 flex items-center gap-2 backdrop-blur-sm hover:scale-105"
                >
                  <span>View Live</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* SpaceLord Project */}
          <CardContainer className="inter-var h-[650px]">
            <CardBody className="bg-gradient-to-br from-gray-900/60 via-pink-900/10 to-black/80 relative group/card dark:hover:shadow-2xl dark:hover:shadow-pink-500/40 dark:border-white/[0.1] border-pink-500/30 w-full h-full rounded-2xl p-10 md:p-14 border backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/60">
              <div className="flex items-center mb-5">
                <div className="w-3 h-3 rounded-full bg-pink-500 mr-2 animate-pulse"></div>
                <CardItem
                  translateZ="60"
                  className="text-3xl font-bold text-pink-50"
                >
                  SpaceLord
                </CardItem>
              </div>
              <CardItem
                as="p"
                translateZ="70"
                className="text-pink-50 text-base max-w-sm mt-3 leading-relaxed"
              >
                A game that takes you to the space and beyond
              </CardItem>
              <CardItem translateZ="120" className="w-full mt-8">
                <div className="overflow-hidden rounded-xl border border-pink-500/30 group-hover/card:border-pink-500/60 transition-colors duration-500">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600/30 to-pink-400/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 blur-md"></div>
                    <video 
                      src="/SpaceLord.webm" 
                      autoPlay 
                      muted 
                      loop 
                      className="h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl transform transition-transform duration-500 group-hover/card:scale-105"
                    />
                  </div>
                </div>
              </CardItem>
              <div className="flex justify-between items-center mt-16">
                <CardItem
                  translateZ={30}
                  as={Link}
                  href="https://github.com/Demigod1410/SpaceLord"
                  target="_blank"
                  className="px-6 py-2.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/40 text-pink-50 text-sm transition-all duration-300 hover:border-pink-500/60 flex items-center gap-2 backdrop-blur-sm hover:scale-105"
                >
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          
          {/* SoftSell Project */}
          <CardContainer className="inter-var h-[650px]">
            <CardBody className="bg-gradient-to-br from-gray-900/60 via-cyan-900/10 to-black/80 relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/40 dark:border-white/[0.1] border-cyan-500/30 w-full h-full rounded-2xl p-10 md:p-14 border backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/60">
              <div className="flex items-center mb-5">
                <div className="w-3 h-3 rounded-full bg-cyan-500 mr-2 animate-pulse"></div>
                <CardItem
                  translateZ="60"
                  className="text-3xl font-bold text-cyan-50"
                >
                  SoftSell
                </CardItem>
              </div>
              <CardItem
                as="p"
                translateZ="70"
                className="text-cyan-50 text-base max-w-sm mt-3 leading-relaxed"
              >
                Job application tracking platform with AI insights
              </CardItem>
              <CardItem translateZ="120" className="w-full mt-8">
                <div className="overflow-hidden rounded-xl border border-cyan-500/30 group-hover/card:border-cyan-500/60 transition-colors duration-500">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/30 to-cyan-400/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 blur-md"></div>
                    <Image
                      src="/dark.png"
                      height={1000}
                      width={1000}
                      className="h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl transform transition-transform duration-500 group-hover/card:scale-105"
                      alt="SoftSell project thumbnail"
                    />
                  </div>
                </div>
              </CardItem>
              <div className="flex justify-between items-center mt-16">
                <CardItem
                  translateZ={30}
                  as={Link}
                  href="https://github.com/Demigod1410/SoftSell"
                  target="_blank"
                  className="px-6 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-50 text-sm transition-all duration-300 hover:border-cyan-500/60 flex items-center gap-2 backdrop-blur-sm hover:scale-105"
                >
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </CardItem>
                <CardItem
                  translateZ={30}
                  as={Link}
                  href="https://soft-sell-jet-kappa.vercel.app/"
                  target="_blank"
                  className="px-6 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-50 text-sm transition-all duration-300 hover:border-cyan-500/60 flex items-center gap-2 backdrop-blur-sm hover:scale-105"
                >
                  <span>View Live</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
