import ElectricBorder from "@/component/ElectricBorder";
import React from "react";
import { ExternalLink, Github, Terminal, ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string; // New: Thumbnail URL
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  category,
  description,
  tags,
  image,
}) => {
  return (
    <div className="group relative flex justify-center items-center">
      {/* The Electric Border acts as the primary frame */}
      <ElectricBorder
        color="#6366f1"
        speed={0.8}
        chaos={0.1}
        style={{ borderRadius: "24px" }}
      >
        <div className="relative w-[340px] h-[560px] bg-[#030303] rounded-[24px] p-6 flex flex-col overflow-hidden transition-all duration-500 group-hover:bg-[#080808]">
          {/* 1. Ambient Background Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-[80px] group-hover:bg-indigo-500/20 transition-all duration-700 pointer-events-none" />

          {/* 2. Header Section */}
          <div className="relative z-10 flex justify-between items-start mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Terminal size={12} className="text-indigo-400" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
                  REF // {category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-1 uppercase italic">
                {title}
              </h3>
            </div>
            <div className="px-2 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            </div>
          </div>

          {/* 3. Visual Thumbnail Area */}
          <div className="relative w-full h-48 bg-zinc-900 rounded-xl mb-6 overflow-hidden border border-white/5 group-hover:border-indigo-500/30 transition-colors duration-500">
            {/* Project Image */}
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-out"
            />

            {/* Visual Overlays: Noise and Gradient mask */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />

            {/* Scanning line */}
            <div className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent animate-[scan_3s_ease-in-out_infinite] z-20" />

            {/* Hover Icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <ArrowUpRight size={18} className="text-white" />
              </div>
            </div>
          </div>

          {/* 4. Description */}
          <div className="relative z-10 flex-grow">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold text-indigo-400/80 uppercase tracking-widest">
                Brief
              </span>
              <div className="h-[1px] flex-grow bg-white/5"></div>
            </div>
            <p className="text-[14px] text-zinc-400 leading-relaxed font-light group-hover:text-zinc-200 transition-colors duration-300">
              {description}
            </p>
          </div>

          {/* 5. Tech Stack Tags */}
          <div className="relative z-10 mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[9px] text-zinc-500 bg-zinc-900/50 border border-white/5 rounded font-mono hover:text-indigo-300 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* 6. Footer Actions */}
          <div className="relative z-10 mt-8 flex gap-2">
            <button className=" cursor-target hover:cursor-none flex-1 flex items-center justify-center gap-2 bg-transparent border border-white/10 py-3 text-[10px] font-bold tracking-[0.2em] text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all uppercase">
              <Github size={14} />
              Code
            </button>
            <button className="cursor-target hover:cursor-none flex-1 flex items-center justify-center gap-2 bg-white py-3 g text-[10px] font-bold tracking-[0.2em] text-black hover:bg-indigo-500 hover:text-white transition-all uppercase">
              Live
              <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </ElectricBorder>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes scan {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(192px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
