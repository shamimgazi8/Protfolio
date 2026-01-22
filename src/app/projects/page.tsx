"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Plus } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Enterprise Ecosystem (ERP)",
    type: "Proprietary Business Suite",
    desc: "A private, integrated ERP solution featuring 4 core engines: HRM, Accounting, and a POS system with automated VAT/Tax logic. Engineered a specialized Factory Production module to track real-time manufacturing cycles and resource allocation.",
    tags: [
      "System Architecture",
      "Node.js/Next.js",
      "PostgreSQL",
      "Inventory Logic",
    ],
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=1200", // A clean, professional abstract/office tech shot
  },
  {
    title: "MotoPulse",
    type: "E-Commerce",
    desc: "A premium motorcycle marketplace featuring real-time inventory updates, secure payment integration, and a custom-built CMS.",
    tags: ["React", "Stripe", "MongoDB", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1558981403-c5f91cbba527?q=80&w=1200",
  },
  {
    title: "devlop.me",
    link: "https://develop-me-vgdn.vercel.app/",
    type: "Wbsite builder",
    desc: "Trusted Partner for Your Website Develop.",
    tags: ["OpenAI", "TypeScript", "Redis", "VectorDB"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
  },
  {
    title: "FinTrack",
    type: "Fintech",
    desc: "A secure financial dashboard providing real-time data visualization and automated expense tracking for enterprises.",
    tags: ["D3.js", "Node.js", "AWS", "Docker"],
    image:
      "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=1200",
  },
];

const StandardProjects = () => {
  return (
    <section className="bg-zinc-200 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER SECTION --- */}
        <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 pb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-indigo-600 font-mono text-xs tracking-[0.4em] uppercase mb-4 block"
            >
              Case Studies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-7xl md:text-9xl font-black text-black uppercase italic leading-[0.8]"
            >
              Selected <br /> Works
            </motion.h2>
          </div>
          <div className="mt-8 md:mt-0 max-w-xs">
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">
              A curated collection of digital experiences focusing on technical
              excellence and user-centric design.
            </p>
          </div>
        </div>

        {/* --- PROJECT LIST --- */}
        <div className="space-y-48">
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => (
              <ProjectItem key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* --- LINK BUTTON --- */}
        <div className="mt-32 flex justify-center">
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-target group relative flex items-center gap-4 bg-black text-white px-10 py-6 rounded-full overflow-hidden transition-all"
            >
              <div className="absolute inset-0 bg-indigo-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 font-black uppercase italic tracking-widest text-sm">
                See All Projects
              </span>
              <div className="relative z-10 bg-white/20 rounded-full p-1 group-hover:rotate-90 transition-transform duration-300">
                <Plus size={20} />
              </div>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProjectItem = ({ project, index }: any) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-16 items-start`}
    >
      {/* 1. Project Image */}
      <div className="w-full lg:w-7/12 relative group">
        <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-200 shadow-2xl shadow-zinc-200/50 transition-shadow group-hover:shadow-indigo-500/10">
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-indigo-600/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>

        <div className="absolute -bottom-6 -right-6 md:right-10 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-zinc-100">
          <p className="text-black font-black text-xl italic uppercase">
            0{index + 1}
          </p>
        </div>
      </div>

      {/* 2. Project Details */}
      <div className="w-full lg:w-5/12 pt-4">
        <div className="flex items-center gap-3 mb-8">
          <span className="bg-black text-white text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider">
            {project.type}
          </span>
        </div>

        <h3 className="text-5xl md:text-6xl font-black text-black uppercase italic mb-8 leading-tight tracking-tighter">
          {project.title}
        </h3>

        <p className="text-zinc-600 text-lg leading-relaxed mb-10 font-medium">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          {project.tags.map((tag: any) => (
            <span
              key={tag}
              className="text-[11px] font-mono text-zinc-400 font-semibold uppercase tracking-tighter"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-8 border-t border-zinc-200 pt-8">
          <motion.button
            whileHover={{ gap: "1.5rem" }}
            className="cursor-target flex items-center gap-4 text-black font-black uppercase text-sm tracking-widest group"
          >
            Explore Project
            <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
              <ArrowUpRight size={20} />
            </div>
          </motion.button>

          <a
            href="#"
            className="cursor-target text-zinc-600 hover:text-black transition-colors"
          >
            <Github size={44} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default StandardProjects;
