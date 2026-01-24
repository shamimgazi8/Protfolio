"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const tabs = ["home", "about", "services", "projects", "contact"];

interface MobileSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const MobileSidebar = ({ activeTab, setActiveTab }: MobileSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (tab: string) => {
    setActiveTab(tab); // Update the active state
    setIsOpen(false); // Close the sidebar

    // Manual scroll fallback if CSS scroll-behavior isn't enough
    const element = document.getElementById(tab.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-3 bg-black border border-white/20 text-white rounded-full shadow-lg fixed top-4 right-4 z-[60]"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[70]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[280px] bg-black border-l border-white/10 z-[80] p-8 flex flex-col"
            >
              <button
                onClick={toggleMenu}
                className="self-end p-2 text-white/50 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>

              <nav className="mt-12 flex flex-col gap-6">
                {tabs.map((tab, index) => {
                  const isActive =
                    activeTab.toLowerCase() === tab.toLowerCase();
                  return (
                    <motion.button
                      key={tab}
                      onClick={() => handleNavClick(tab)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`text-left text-2xl font-light tracking-widest uppercase transition-colors ${
                        isActive
                          ? "text-white underline underline-offset-8 decoration-purple-500"
                          : "text-white/50"
                      }`}
                    >
                      {tab}
                    </motion.button>
                  );
                })}
              </nav>

              <div className="mt-auto opacity-20 text-[10px] tracking-[0.3em] uppercase text-white">
                © 2026 Portfolio
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileSidebar;
