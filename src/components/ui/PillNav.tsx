"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";

const tabs = ["Home", "Projects", "About", "Contact"];

// 1. Define the shape of the props
interface PillNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

// 2. Apply the interface to the component
const PillNav = ({ activeTab, setActiveTab }: PillNavProps) => {
  return (
    <nav className="flex items-center space-x-1 bg-black/40 backdrop-blur-xl p-1.5 rounded-full border border-white/10 shadow-2xl">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-6 py-2 text-sm font-medium transition-colors duration-300 focus:outline-none ${
              isActive ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="pill-active"
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default PillNav;
