import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  GitBranch,
  Layers,
  Smartphone,
  Fingerprint,
  PenTool,
} from "lucide-react";

const WhatIDo = () => {
  // 1. Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each card
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const titleVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: "circOut" },
    },
  };

  const services = [
    {
      title: "WEB DESIGN & UI",
      icon: <Monitor size={24} />,
      desc: "Creating high-fidelity interfaces with a focus on usability and modern aesthetics using Figma and Tailwind CSS.",
      color: "group-hover:text-blue-400",
    },
    {
      title: "USER FLOW & WIREFRAMES",
      icon: <GitBranch size={24} />,
      desc: "Architecting logical user journeys and low-fidelity blueprints to ensure seamless navigation and conversion.",
      color: "group-hover:text-indigo-400",
    },
    {
      title: "VISUAL DESIGN",
      icon: <Layers size={24} />,
      desc: "Developing consistent design systems, typography scales, and color palettes that reinforce brand identity.",
      color: "group-hover:text-purple-400",
    },
    {
      title: "MOBILE APP DESIGN",
      icon: <Smartphone size={24} />,
      desc: "Designing touch-first experiences for iOS and Android, ensuring platform-specific patterns are respected.",
      color: "group-hover:text-emerald-400",
    },
    {
      title: "BRANDING & LOGOS",
      icon: <Fingerprint size={24} />,
      desc: "Crafting unique visual identities and vector-based logos that stand out in a crowded digital marketplace.",
      color: "group-hover:text-orange-400",
    },
    {
      title: "SYSTEM ARCHITECTURE",
      icon: <PenTool size={24} />,
      desc: "Planning the bridge between design and code, ensuring assets are optimized for Next.js and high-speed delivery.",
      color: "group-hover:text-pink-400",
    },
  ];

  return (
    <section className="w-full bg-[#030303] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-indigo-500 font-mono text-xs tracking-[0.3em] uppercase mb-2"
          >
            Process
          </motion.span>

          {/* Masking container for Title */}
          <div className="overflow-hidden">
            <motion.h2
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="text-5xl md:text-6xl font-black text-white uppercase italic"
            >
              What I Do
            </motion.h2>
          </div>
        </div>

        {/* Services Grid with Staggered Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/50 border border-zinc-800/50"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
              className="group bg-[#030303] p-10 transition-all duration-500 relative overflow-hidden"
            >
              {/* Corner Accent */}
              <div
                className={`absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-500 bg-indigo-500`}
              />

              <div
                className={`mb-6 text-zinc-500 transition-colors duration-500 ${service.color}`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 tracking-tighter uppercase">
                {service.title}
              </h3>

              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-500">
                {service.desc}
              </p>

              {/* Decorative Number */}
              <span className="absolute bottom-4 right-6 text-4xl font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDo;
