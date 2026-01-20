"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const AboutParallax = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xTranslate = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#030303] pb-24 md:pb-32 overflow-hidden border-b border-white/5"
    >
      {/* Background Parallax Header */}
      <motion.div
        style={{ x: xTranslate }}
        className="whitespace-nowrap mb-12 select-none pointer-events-none"
      >
        <h2 className="text-8xl md:text-[20rem] font-black italic uppercase opacity-5 text-white">
          ABOUT ME • ABOUT ME • ABOUT ME
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        {/* LEFT COLUMN: Profile & Skills (Sticky on Desktop) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="lg:col-span-4 space-y-20 lg:sticky lg:top-32 h-fit"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-indigo-500 font-mono text-xs tracking-[0.4em] mb-6 uppercase">
              / Introduction
            </h3>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 uppercase italic leading-[0.9] tracking-tighter">
              Crafting <br /> <span className="text-indigo-500">Digital</span>{" "}
              <br /> Excellence
            </h2>

            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-md">
              Strategic Full Stack Developer engineering robust, end-to-end web
              applications with high-integrity systems.
            </p>
          </motion.div>

          {/* Expert In Section */}
          <motion.div variants={fadeInUp} className="space-y-10 cursor-target">
            <h3 className="text-indigo-500 font-mono text-xs tracking-[0.4em] uppercase">
              / Expert In
            </h3>

            <div className="space-y-4">
              {[
                { skill: "React / Next.js", level: "95%" },
                { skill: "Node / NestJS", level: "90%" },
                { skill: "PostgreSQL / MongoDB", level: "85%" },
                { skill: "UI/UX Design (Figma)", level: "75%" },
              ].map((item) => (
                <div key={item.skill} className="group">
                  <div className="flex justify-between text-[11px] text-zinc-500 uppercase tracking-widest mb-3 font-mono group-hover:text-white transition-colors">
                    <span>{item.skill}</span>
                    <span className="text-indigo-400">{item.level}</span>
                  </div>

                  <div className="h-[2px] w-full bg-zinc-900 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.level }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        ease: "circOut",
                        delay: 0.3,
                      }}
                      className="h-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: History & Terminal */}
        <div className="lg:col-span-8 flex flex-col space-y-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-12">
            {/* Education */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h3 className="text-indigo-500 font-mono text-xs tracking-[0.4em] uppercase">
                / Education
              </h3>

              <div className="space-y-2 border-l border-zinc-800/50">
                {[
                  {
                    year: "2020-2025",
                    school: "DIIT",
                    degree: "Computer Science",
                    logo: "https://diit.edu.bd/media/family/DIIT2x_HE7gktk.png",
                  },
                  {
                    year: "2018-2020",
                    school: "CODEWORKS",
                    degree: "Engineering",
                    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzktc7JCK6HfsLWPvRwlEQJUiPTXVDA89vg&s",
                  },
                ].map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 8 }}
                    className="group relative pl-8 py-8 hover:bg-white/[0.02] rounded-r-2xl transition-all cursor-target"
                  >
                    <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-zinc-800 border-2 border-[#030303] group-hover:bg-indigo-500 transition-colors" />

                    <div className="flex justify-between items-center gap-4">
                      <div>
                        <span className="text-[10px] text-zinc-600 font-mono uppercase mb-1 block">
                          {edu.year}
                        </span>
                        <h4 className="text-white font-bold text-lg uppercase group-hover:text-indigo-400 transition-colors">
                          {edu.school}
                        </h4>
                        <p className="text-zinc-500 text-xs uppercase tracking-tighter">
                          {edu.degree}
                        </p>
                      </div>

                      <div className="shrink-0 w-12 h-12 relative rounded-full border border-white/10 bg-zinc-900/50 overflow-hidden opacity-20 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all aspect-square">
                        <Image
                          src={edu.logo}
                          alt="logo"
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h3 className="text-indigo-500 font-mono text-xs tracking-[0.4em] uppercase">
                / Experience
              </h3>

              <div className="space-y-2 border-l border-zinc-800/50">
                {[
                  {
                    year: "2025-Present",
                    company: "EasySoft",
                    role: "Software Engineer",
                    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzDj_uBFY22AHwseaQO9UNQgM9q_IEwAVdQ&s", // Add your logo path here
                  },
                  {
                    year: "2020-2022",
                    company: "M4yours IT",
                    role: "Frontend Developer",
                    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1jXna7J6Wb-Vx7ylo66FJfUAAphW_vl3pg&s", // Add your logo path here
                  },
                ].map((exp, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 8 }}
                    className="group relative pl-8 py-8 hover:bg-white/[0.02] rounded-r-2xl transition-all cursor-target"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-zinc-800 border-2 border-[#030303] group-hover:bg-emerald-500 transition-colors" />

                    <div className="flex justify-between items-center gap-4">
                      {/* Text Content */}
                      <div>
                        <span className="text-[10px] text-zinc-600 font-mono uppercase mb-1 block">
                          {exp.year}
                        </span>
                        <h4 className="text-white font-bold text-lg uppercase group-hover:text-emerald-400 transition-colors">
                          {exp.company}
                        </h4>
                        <p className="text-zinc-500 text-xs uppercase tracking-tighter">
                          {exp.role}
                        </p>
                      </div>

                      {/* PERFECT ROUND IMAGE */}
                      <div className="shrink-0 w-12 h-12 relative rounded-full border border-white/10 bg-zinc-900/50 overflow-hidden opacity-20 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all aspect-square">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Terminal Section */}
          {/* Optimized Terminal - Placed Right */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  staggerChildren: 0.1,
                  delayChildren: 0.4,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="hidden lg:block w-full max-w-md self-center mx-auto cursor-target " // Added self-end and ml-auto
          >
            <div className="bg-[#050505] border border-white/10 rounded-xl overflow-hidden shadow-2xl scale-90 h-[95%] pt-[-20px]">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/10" />
                </div>
                <span className="text-[9px] font-mono text-zinc-600 tracking-[0.2em] uppercase">
                  system_manifest.json
                </span>
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 font-mono text-[13px] space-y-2 leading-relaxed">
                {[
                  {
                    l: "01",
                    c: <span className="text-indigo-400">{`{`}</span>,
                  },
                  {
                    l: "02",
                    c: (
                      <span>
                        <span className="text-zinc-500">
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
                        <span className="text-zinc-500">
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
                        <span className="text-zinc-500">
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
                        <span className="text-zinc-500">
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
                    className={`flex gap-6 ${idx > 0 && idx < 5 ? "pl-5" : ""}`}
                  >
                    <span className="text-zinc-800 w-4 select-none text-[11px]">
                      {line.l}
                    </span>
                    <span className="text-zinc-300">{line.c}</span>
                  </motion.div>
                ))}

                {/* Blinking Cursor */}
                <div className="flex gap-6 pl-5">
                  <span className="text-zinc-800 w-4 select-none text-[11px]">
                    07
                  </span>
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-1.5 h-4 bg-indigo-500/60"
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
