"use client";

import { motion } from "framer-motion";

const tabs = ["home", "about", "services", "projects", "contact"];

interface PillNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  theme?: "default" | "inverted";
}

const PillNav = ({
  activeTab,
  setActiveTab,
  theme = "default",
}: PillNavProps) => {
  const isInverted = theme === "inverted";

  return (
    <nav
      className={`flex items-center border p-1.5 transition-all duration-500 relative ${
        isInverted
          ? "bg-black/50 backdrop-blur-md  shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          : "bg-black border-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
      }`}
    >
      {tabs.map((tab) => {
        const isActive = activeTab.toLowerCase() === tab.toLowerCase();

        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-target hover:cursor-none relative px-6 py-2 text-[11px] font-medium tracking-[0.15em] uppercase transition-all duration-300 focus:outline-none ${
              isActive
                ? isInverted
                  ? "text-white"
                  : "text-black"
                : isInverted
                  ? "text-white/70 hover:text-white"
                  : "text-white/50 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className={`absolute inset-0 border-2 ${
                  isInverted ? "bg-black border-black" : "bg-white border-black"
                }`}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            <span className="relative z-10">{tab}</span>

            {!isActive && (
              <div
                className={`absolute inset-0 border border-transparent transition-colors ${
                  isInverted
                    ? "hover:border-purple-500/30"
                    : "hover:border-white/10"
                }`}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default PillNav;
