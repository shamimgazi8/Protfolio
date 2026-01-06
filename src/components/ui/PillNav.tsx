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
    <div className="flex items-center space-x-1 bg-neutral-900/80 backdrop-blur-xl p-1.5 rounded-full border border-white/10 shadow-2xl relative">
      {tabs.map((tab) => {
        // Compare case-insensitively to be safe
        const isActive = activeTab.toLowerCase() === tab.toLowerCase();

        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-6 py-2 text-sm font-medium focus:outline-none transition-colors duration-500 ${
              isActive ? "text-white" : "text-white/50 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        );
      })}
    </div>
  );
};

export default PillNav;
