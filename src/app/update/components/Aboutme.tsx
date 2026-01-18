"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutParallax = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Background text movement (Parallax)
  const xTranslate = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  // Standard fadeInUp for section elements
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#030303] py-24 overflow-hidden border-b border-white/5"
    >
      {/* Parallax Background Heading */}
      <motion.div
        style={{ x: xTranslate }}
        className="whitespace-nowrap mb-12 select-none pointer-events-none"
      >
        <h2 className="text-8xl md:text-[20rem] font-black italic uppercase opacity-5 text-white">
          ABOUT ME • ABOUT ME • ABOUT ME
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 relative z-10">
        {/* LEFT COLUMN: Bio & Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:col-span-5 space-y-16"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-indigo-500 font-mono text-sm tracking-[0.3em] mb-4 uppercase">
              Who Am I?
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase italic leading-tight">
              Crafting Digital <br /> Excellence
            </h2>
            <div className="space-y-4 text-zinc-400 font-light leading-relaxed max-w-md">
              <p>
                I am a Full-Stack Architect specializing in high-performance web
                applications. I bridge the gap between complex backend logic and
                fluid user interfaces.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            // amount: 0.1 ensures it triggers as soon as it enters 10% of the screen
            // margin: "0px 0px -50px 0px" adds a small buffer at the bottom
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-5 space-y-16"
          >
            <div>
              <h3 className="text-indigo-500 font-mono text-sm tracking-[0.3em] mb-8 uppercase">
                Expert In
              </h3>
              <div className="space-y-6">
                {[
                  { skill: "React / Next.js", level: "95%" },
                  { skill: "Node / NestJS", level: "90%" },
                  { skill: "PostgreSQL / MongoDB", level: "85%" },
                  { skill: "UI/UX Design (Figma)", level: "75%" },
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between text-[10px] text-zinc-500 uppercase tracking-widest mb-2 font-mono">
                      <span>{item.skill}</span>
                      <span className="text-white">{item.level}</span>
                    </div>
                    <div className="h-[1px] w-full bg-zinc-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: item.level }}
                        // viewport={{ once: true }} is the key here.
                        // It prevents the bar from resetting to 0 when you scroll away.
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          ease: "circOut",
                          delay: 0.2,
                        }}
                        className="h-full bg-indigo-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Timeline & Terminal */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            {/* Education */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <h3 className="text-indigo-500 font-mono text-sm tracking-[0.3em] uppercase">
                Education
              </h3>
              <div className="space-y-10 border-l border-zinc-900 pl-6">
                {[
                  {
                    year: "2018-2022",
                    school: "NY UNIVERSITY",
                    degree: "Computer Science",
                  },
                  {
                    year: "2016-2018",
                    school: "TECH ACADEMY",
                    degree: "Web Development",
                  },
                ].map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="relative group cursor-default transition-all duration-300"
                  >
                    <div className="absolute -left-[29px] top-1.5 w-1.5 h-1.5 rounded-full bg-indigo-900 group-hover:bg-indigo-500 group-hover:shadow-[0_0_8px_#6366f1] transition-all" />
                    <span className="text-[10px] text-zinc-600 font-mono group-hover:text-indigo-400 transition-colors">
                      {edu.year}
                    </span>
                    <h4 className="text-white font-bold text-base mt-1 uppercase group-hover:text-indigo-50 group-transition-colors">
                      {edu.school}
                    </h4>
                    <p className="text-zinc-500 text-xs uppercase">
                      {edu.degree}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <h3 className="text-indigo-500 font-mono text-sm tracking-[0.3em] uppercase">
                Experience
              </h3>
              <div className="space-y-10 border-l border-zinc-900 pl-6">
                {[
                  {
                    year: "2022-Present",
                    company: "TECH SOLUTIONS",
                    role: "Senior Full Stack",
                  },
                  {
                    year: "2020-2022",
                    company: "WEB AGENCY",
                    role: "Frontend Lead",
                  },
                ].map((exp, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="relative group cursor-default transition-all duration-300"
                  >
                    <div className="absolute -left-[29px] top-1.5 w-1.5 h-1.5 rounded-full bg-emerald-900 group-hover:bg-emerald-500 group-hover:shadow-[0_0_8px_#10b981] transition-all" />
                    <span className="text-[10px] text-zinc-600 font-mono group-hover:text-emerald-400 transition-colors">
                      {exp.year}
                    </span>
                    <h4 className="text-white font-bold text-base mt-1 uppercase group-hover:text-emerald-50 group-transition-colors">
                      {exp.company}
                    </h4>
                    <p className="text-zinc-500 text-xs uppercase">
                      {exp.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- SLOW REVEAL TERMINAL --- */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60, scaleY: 0.01 },
              visible: {
                opacity: 1,
                y: 0,
                scaleY: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 1.8, // Slow, high-end reveal
                  ease: [0.16, 1, 0.3, 1],
                  staggerChildren: 0.15, // Smooth line typing
                  delayChildren: 0.6,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="hidden lg:block self-center mt-28 w-full max-w-lg origin-bottom "
          >
            <div className="bg-[#050505] border border-white/10 rounded-lg overflow-hidden scale-75">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase">
                  system_manifest.json
                </span>
              </div>

              {/* Content Area */}
              <div className="p-8 font-mono text-xs md:text-sm space-y-3 leading-relaxed">
                {[
                  {
                    l: "01",
                    c: <span className="text-indigo-400">{`{`}</span>,
                  },
                  {
                    l: "02",
                    c: (
                      <span>
                        <span className="text-zinc-400">
                          &quot;status&quot;
                        </span>
                        :{" "}
                        <span className="text-emerald-400">
                          &quot;Active&quot;
                        </span>
                        ,
                      </span>
                    ),
                  },
                  {
                    l: "03",
                    c: (
                      <span>
                        <span className="text-zinc-400">
                          &quot;location&quot;
                        </span>
                        :{" "}
                        <span className="text-zinc-300">
                          &quot;New York, NY&quot;
                        </span>
                        ,
                      </span>
                    ),
                  },
                  {
                    l: "04",
                    c: (
                      <span>
                        <span className="text-zinc-400">
                          &quot;specialization&quot;
                        </span>
                        : [
                        <span className="text-indigo-400">
                          &quot;Architecture&quot;
                        </span>
                        ],
                      </span>
                    ),
                  },
                  {
                    l: "05",
                    c: (
                      <span>
                        <span className="text-zinc-400">
                          &quot;availability&quot;
                        </span>
                        : <span className="text-emerald-500">true</span>
                      </span>
                    ),
                  },
                  {
                    l: "06",
                    c: <span className="text-indigo-400">{`}`}</span>,
                  },
                ].map((line, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className={`flex gap-6 ${idx > 0 && idx < 5 ? "pl-4" : ""}`}
                  >
                    <span className="text-zinc-800 w-4">{line.l}</span>
                    <span className="text-zinc-300">{line.c}</span>
                  </motion.div>
                ))}

                {/* Blinking Cursor */}
                <div className="flex gap-6 pl-4">
                  <span className="text-zinc-800 w-4">07</span>
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 h-4 bg-indigo-500/80"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutParallax;
