"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Layers, Code2, Globe } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

// --- REALISTIC PROJECT DATA ---
const projects = [
  {
    id: "nexus-ai",
    title: "Nexus AI Analytics",
    category: "Data Intelligence",
    description:
      "An enterprise-grade analytics dashboard leveraging machine learning to provide predictive business insights. Features real-time data visualization, anomaly detection, and automated reporting pipelines processing terabytes of data daily.",
    techStack: ["React", "Python", "TensorFlow", "D3.js", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    links: {
      live: "https://example.com/nexus",
      github: "https://github.com/example/nexus-ai",
    },
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: "luxe-aether",
    title: "Luxe Aether",
    category: "E-Commerce Experience",
    description:
      "A high-end fashion e-commerce platform integrating WebGL and AR for virtual try-ons. Designed for immersion, it delivers a seamless blend of storytelling and commerce with sub-second page loads and fluid transitions.",
    techStack: ["Next.js", "WebGL", "Three.js", "Shopify Headless", "Tailwind"],
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop",
    links: {
      live: "https://example.com/luxe",
      github: "https://github.com/example/luxe-aether",
    },
    color: "from-purple-600 to-pink-600",
  },
  {
    id: "nova-social",
    title: "Nova Social",
    category: "Real-time Platform",
    description:
      "A next-generation social networking application focused on ephemeral video content and real-time interaction. Built on a distributed architecture to handle millions of concurrent websocket connections with minimal latency.",
    techStack: ["Flutter", "Go", "WebRTC", "Redis", "Cassandra"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
    links: {
      live: "https://example.com/nova",
      github: null, // Private repo example
    },
    color: "from-orange-500 to-red-600",
  },
  {
    id: "orbit-crm",
    title: "Orbit CRM",
    category: "Enterprise Solutions",
    description:
      "A comprehensive Customer Relationship Management system designed for scalability. Modularizes sales pipelines, automated marketing campaigns, and customer support ticketing into a unified, intuitive interface.",
    techStack: ["Vue.js", "Django", "PostgreSQL", "Docker", "GraphQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    links: {
      live: "https://example.com/orbit",
      github: "https://github.com/example/orbit-crm",
    },
    color: "from-emerald-500 to-teal-600",
  },
];

const ProjectsPage = () => {
  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-zinc-50 to-zinc-50 -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold tracking-widest uppercase mb-6">
              Portfolio 2024
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-zinc-900 tracking-tight leading-[0.9]">
              SELECTED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                WORKS
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl mt-12 pl-6 border-l-2 border-indigo-600"
          >
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-medium">
              A curation of digital experiences engineering for performance, scalability, and visual impact. 
              Bridging the gap between complex backend logic and fluid frontend design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PROJECTS LIST --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 px-6 flex justify-center bg-white">
        <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to build something amazing?</h2>
             <Link href="/contact" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Start a Conversation
            </Link>
        </div>
      </section>
    </main>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-12 lg:gap-24 items-center`}
    >
      {/* IMAGE SIDE */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-3/5 group"
      >
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-zinc-900 aspect-[16/10]">
            {/* Overlay Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500 z-10 mix-blend-overlay`} />
          
          <motion.img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
          />

          {/* Floating Index */}
          <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
             <span className="font-mono text-xl font-bold tracking-tighter">0{index + 1}.</span>
          </div>
        </div>
      </motion.div>

      {/* CONTENT SIDE */}
      <motion.div 
         initial={{ opacity: 0, x: isEven ? 50 : -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.8 }}
         className="w-full lg:w-2/5"
      >
        <div className="flex items-center gap-3 mb-6">
            <span className={`h-px w-8 bg-gradient-to-r ${project.color}`} />
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">{project.category}</span>
        </div>

        <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
          {project.title}
        </h3>

        <p className="text-zinc-600 text-lg leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.techStack.map((tech: string) => (
            <span
              key={tech}
              className="px-4 py-2 bg-zinc-100 border border-zinc-200 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link href={project.links.live} target="_blank">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-zinc-800 transition-colors"
            >
              Live Demo <ExternalLink size={14} />
            </motion.button>
          </Link>
          
          {project.links.github && (
            <Link href={project.links.github} target="_blank" className="flex items-center gap-2 text-zinc-500 font-bold uppercase text-xs tracking-widest hover:text-indigo-600 transition-colors">
              <Github size={18} /> Source Code
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
