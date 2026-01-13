"use client";

import React from "react";
import { motion } from "framer-motion";

const tabs = ["Home", "Projects", "About", "Contact"];

interface PillNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const PillNav = ({ activeTab, setActiveTab }: PillNavProps) => {
  return (
    <nav className="flex items-center bg-black border border-white/20 p-1.5  shadow-[0_0_0_1px_rgba(255,255,255,0.05)] relative">
      {tabs.map((tab) => {
        const isActive = activeTab.toLowerCase() === tab.toLowerCase();

        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={` cursor-target hover:cursor-none relative px-6 py-2 text-[11px] font-medium tracking-[0.15em] uppercase transition-all duration-300  focus:outline-none ${
              isActive ? "text-black" : "text-white/50 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white  border-2 border-black"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            {/* The Text */}
            <span className="relative z-10">{tab}</span>

            {/* Pixel-style accent: Only visible on hover or active if you want */}
            {!isActive && (
              <div className="absolute inset-0  border border-transparent hover:border-white/10 transition-colors" />
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default PillNav;
