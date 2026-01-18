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

  // Animation Variants for Content
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
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#030303] py-24 overflow-hidden"
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
        {/* LEFT COLUMN: Who Am I & Expertise */}
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
            <div className="space-y-4 text-zinc-400 font-light leading-relaxed">
              <p>
                I am a Full-Stack Architect specializing in high-performance web
                applications. I bridge the gap between complex backend logic and
                fluid user interfaces.
              </p>
              <p>
                Focused on building scalable systems using Next.js and NestJS, I
                ensure that every line of code is optimized for both speed and
                maintainability.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
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
                  <div className="flex justify-between text-xs text-white uppercase tracking-widest mb-2 font-mono">
                    <span>{item.skill}</span>
                    <span>{item.level}</span>
                  </div>
                  <div className="h-[2px] w-full bg-zinc-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.level }}
                      transition={{
                        duration: 1.5,
                        ease: "circOut",
                        delay: 0.2,
                      }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="h-full bg-indigo-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Education & Experience */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-indigo-500 font-mono text-sm tracking-[0.3em] uppercase"
            >
              Education
            </motion.h3>
            <div className="space-y-10 border-l border-zinc-800 pl-6">
              {[
                {
                  year: "2018-2022",
                  school: "NY UNIVERSITY",
                  degree: "Computer Science",
                  desc: "Specialized in Distributed Systems and Cloud Architecture.",
                },
                {
                  year: "2016-2018",
                  school: "TECH ACADEMY",
                  degree: "Web Development",
                  desc: "Intensive training in full-stack JavaScript ecosystems.",
                },
              ].map((edu, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="relative group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-indigo-500 transition-colors"
                  />
                  <span className="text-[10px] text-zinc-500 font-mono">
                    {edu.year}
                  </span>
                  <h4 className="text-white font-bold text-lg mt-1 uppercase tracking-tight">
                    {edu.school}
                  </h4>
                  <p className="text-indigo-400 text-xs uppercase mb-2">
                    {edu.degree}
                  </p>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {edu.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-indigo-500 font-mono text-sm tracking-[0.3em] uppercase"
            >
              Experience
            </motion.h3>
            <div className="space-y-10 border-l border-zinc-800 pl-6">
              {[
                {
                  year: "2022-Present",
                  company: "TECH SOLUTIONS",
                  role: "Senior Full Stack",
                  desc: "Architecting enterprise SaaS platforms using NestJS and Next.js.",
                },
                {
                  year: "2020-2022",
                  company: "WEB AGENCY",
                  role: "Frontend Lead",
                  desc: "Led development of 20+ high-performance e-commerce sites.",
                },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="relative group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-emerald-500 transition-colors"
                  />
                  <span className="text-[10px] text-zinc-500 font-mono">
                    {exp.year}
                  </span>
                  <h4 className="text-white font-bold text-lg mt-1 uppercase tracking-tight">
                    {exp.company}
                  </h4>
                  <p className="text-emerald-400 text-xs uppercase mb-2">
                    {exp.role}
                  </p>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutParallax;
