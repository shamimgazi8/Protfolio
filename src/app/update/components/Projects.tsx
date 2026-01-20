"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useSpring, useMotionValue } from "framer-motion";
import {
  ArrowUpRight,
  Gamepad2,
  Box,
  LucideIcon,
  Sparkles,
  GraduationCap,
  ShieldCheck,
  Plus,
} from "lucide-react";

// --- UPDATED CUSTOM CURSOR (LIQUID GLASS EFFECT) ---
const CustomCursor = ({ hoveredId }: { hoveredId: number | string | null }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none cursor-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        // Apple Liquid Glass is a combination of blur, contrast, and saturation
        backdropFilter: hoveredId
          ? "blur(12px) saturate(180%) contrast(90%)"
          : "none",
        WebkitBackdropFilter: hoveredId
          ? "blur(12px) saturate(180%) contrast(90%)"
          : "none",
        border: hoveredId ? "1.5px solid rgba(255, 255, 255, 0.4)" : "none",
        background: hoveredId
          ? "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 80%)"
          : "rgba(0, 122, 255, 1)", // Standard Apple Blue for the dot
      }}
      animate={{
        width: hoveredId ? 75 : 8,
        height: hoveredId ? 75 : 8,

        boxShadow: hoveredId
          ? "0 10px 30px rgba(0,0,0,0.1), inset 0 0 10px rgba(255,255,255,0.2)"
          : "0 0 0px rgba(0,0,0,0)",
      }}
    >
      {/* The Specular Highlight (The "Shine" on top of the glass) */}
      {hoveredId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 rounded-full bg-[conic-gradient(from_225deg_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0)_50%)]"
        />
      )}

      {/* The "View" Label */}
      {hoveredId && (
        <motion.span
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/70"
        >
          View
        </motion.span>
      )}
    </motion.div>
  );
};

// --- REST OF YOUR COMPONENT (UNCHANGED) ---

interface Project {
  id: number | string;
  title: string;
  category: string;
  size: string;
  description: string;
  icon: LucideIcon;
  tech?: string[];
  image?: string;
  href: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sportinerd",
    category: "Sports Analytics & Fantasy Football",
    size: "large",
    description:
      "The definitive arena for tactical football minds. Sportinerd merges real-time performance analytics with high-stakes fantasy competition, allowing you to build, manage, and dominate your own football empire.",
    icon: Gamepad2, // Assuming Lucide-react or similar icon library
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    image: "/assets/sporti.png", // Representative image from site
    href: "https://sportinerd.com",
  },
  {
    id: 2,
    title: "BRAXX USA",
    category: "E-Mobility / IoT",
    size: "medium",
    description:
      "High-performance electric motorcycles with integrated real-time field performance monitoring.",
    icon: Box, // More specific than Globe
    tech: ["Three.js", "WebGL", "React Three Fiber", "AWS"],
    image: "/assets/braxx.png", // Representative e-moto image

    href: "https://www.braxxusa.com/",
  },
  {
    id: 3, // Assuming this is your next project
    title: "ThinkWave",
    category: "AI / DevOps",
    size: "large",
    description:
      "An agentic AI ecosystem that transforms natural language prompts into fully deployed, production-ready web applications.",
    icon: Sparkles,
    tech: ["Next.js", "Vercel SDK", "OpenAI / Claude API", "Tailwind CSS"],
    image: "/assets/thinkwave.png", // Sleek, futuristic AI/Abstract image

    href: "https://thinkwave.ai/", // Replace with your actual project link
  },
  {
    id: 4, // Incremental ID
    title: "WorldUniHub",
    category: "EdTech / Consultancy",
    size: "medium",
    description:
      "A comprehensive global education hub connecting students with international universities through AI-driven matching and expert consultancy.",
    icon: GraduationCap,
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "/assets/wuh.png", // High-quality education/campus image

    href: "https://worldunihub.com/",
  },
  {
    id: 5,
    title: "ImmiLink",
    category: "LegalTech / Marketplace",
    size: "small",
    description:
      "A secure marketplace connecting global applicants with licensed Canadian immigration practitioners for verified legal advice and application management.",
    icon: ShieldCheck,
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    image: "/assets/immi.png", // Legal/Trust-oriented image

    href: "https://immilink.ca/",
  },
  {
    id: "btn-more",
    title: "View All Projects",
    category: "Discovery",
    size: "small",
    description: "Explore the full archive of experimental works.",
    icon: Plus,
    // image: "/assets/view.png",
    href: "/projects",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50, scale: 0.95 },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

export default function SmartProjectPage() {
  const [hoveredId, setHoveredId] = useState<number | string | null>(null);

  return (
    <div className="min-h-screen bg-[#F2F2F7] text-[#1D1D1F] p-4 md:p-8 lg:p-12 cursor-none">
      <CustomCursor hoveredId={hoveredId} />

      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm border border-gray-200 text-xs font-bold uppercase tracking-tighter">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for Innovation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Project Hub<span className="text-blue-600">.</span>
            </h1>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full md:h-[720px]">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className={`block h-full transition-transform active:scale-95  cursor-none
                ${project.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                ${project.size === "medium" ? "md:col-span-2 md:row-span-1" : ""}
                ${project.size === "small" ? "md:col-span-2 md:row-span-1" : ""}
              `}
            >
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative h-full overflow-hidden rounded-[2rem] border transition-all duration-500 shadow-sm hover:shadow-2xl 
                  ${
                    project.id === "btn-more"
                      ? "bg-blue-600 border-blue-500 hover:bg-blue-700"
                      : "bg-white border-gray-200 hover:border-blue-200"
                  }
                `}
              >
                {project.image && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700
                        ${hoveredId === project.id ? "scale-110" : "scale-100"}
                      `}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-black/90 via-black/20 to-transparent transition-opacity duration-500
                      ${hoveredId === project.id ? "opacity-30" : "opacity-100"}`}
                    />
                  </div>
                )}

                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div
                      className={`p-3 backdrop-blur-md rounded-2xl shadow-sm border 
                      ${project.id === "btn-more" ? "bg-white/20 border-white/30" : "bg-white/90 border-white/50"}`}
                    >
                      <project.icon
                        className={
                          project.id === "btn-more"
                            ? "text-white"
                            : "text-blue-600"
                        }
                        size={24}
                      />
                    </div>
                    <motion.div
                      animate={{ rotate: hoveredId === project.id ? 45 : 0 }}
                      className={`p-2 rounded-full shadow-lg ${project.id === "btn-more" ? "bg-white text-blue-600" : "bg-black text-white"}`}
                    >
                      <ArrowUpRight size={20} />
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <p
                      className={`text-xs font-bold uppercase tracking-widest 
                      ${project.id === "btn-more" ? "text-blue-100" : "text-blue-600"}`}
                    >
                      {project.category}
                    </p>
                    <h3
                      className={`
    /* 1. High-End Typography */
    font-extrabold tracking-tight leading-[0.9]
    
    /* 2. Sophisticated Color: Subtle vertical gradient for depth */
    bg-gradient-to-b from-white via-white to-white/40
    bg-clip-text text-transparent
    
    /* 3. Sizing (Responsive & Bold) */
    ${project.size === "large" ? "text-4xl md:text-6xl" : "text-3xl"}

    /* 4. Subtle Refinement */
    drop-shadow-sm
    transition-all duration-500 group-hover:tracking-tighter
  `}
                    >
                      {project.title}
                    </h3>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: hoveredId === project.id ? "auto" : 0,
                        opacity: hoveredId === project.id ? 1 : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <p
                        className={`text-sm mt-2 max-w-sm ${project.id === "btn-more" ? "text-blue-50" : "text-white"}`}
                      >
                        {project.description}
                      </p>
                      {project.tech && (
                        <div className="flex gap-2 mt-4">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className={`
    /* 1. Shape & Layout */
    px-2.5 py-0.5 rounded-full inline-flex items-center justify-center
    
    /* 2. Typography - Small, Bold, and Spaced out for a "Pro" look */
    text-[9px] font-black uppercase tracking-widest
    
    /* 3. Modern Glassmorphism & Border */
    backdrop-blur-sm border transition-all duration-300
    
    ${
      project.id === "btn-more"
        ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
        : "bg-blue-600/5 border-blue-600/10 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-transparent"
    }
    
    /* 4. Subtle Shadow for depth */
    shadow-[0_2px_10px_rgba(0,0,0,0.02)]
  `}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
