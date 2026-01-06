import ElectricBorder from "@/component/ElectricBorder";
import React from "react";
import { ExternalLink, Github, Cpu } from "lucide-react"; // Optional: install lucide-react

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  category,
  description,
  tags,
}) => {
  return (
    <div className="group flex justify-center items-center transition-transform duration-500 hover:scale-[1.02]">
      <ElectricBorder
        color="#7df9ff"
        speed={2}
        chaos={0.09}
        style={{ borderRadius: 16 }}
      >
        {/* Inner Container: Glassmorphism Effect */}
        <div className="relative w-[320px] h-[500px] bg-slate-950/90 backdrop-blur-md rounded-[14px] p-5 flex flex-col overflow-hidden border border-white/5">
          {/* 1. Header: Meta Data */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                ID // {category.slice(0, 3)}_09X
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight mt-1 group-hover:text-cyan-300 transition-colors">
                {title}
              </h3>
            </div>
            <Cpu className="w-5 h-5 text-cyan-500/50 animate-pulse" />
          </div>

          {/* 2. Visual Area: Holographic Preview */}
          <div className="relative w-full h-44 bg-black rounded-lg mb-4 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all overflow-hidden bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
            {/* Scanned Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
              <span className="absolute text-[10px] font-mono text-cyan-400/40 uppercase">
                System_Preview.exe
              </span>
            </div>

            {/* Animated Scanning Line */}
            <div className="absolute inset-0 w-full h-[2px] bg-cyan-400/30 shadow-[0_0_15px_rgba(125,249,255,0.8)] animate-[scan_2.5s_linear_infinite]" />
          </div>

          {/* 3. Description: Tactical Text */}
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-[1px] w-4 bg-cyan-500/50"></div>
              <span className="text-[10px] font-mono text-slate-500 uppercase">
                Description
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-sans opacity-90">
              {description}
            </p>
          </div>

          {/* 4. Tech Stack: Tags */}
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] px-2 py-1 rounded-sm bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Footer: Action Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className=" cursor-target flex items-center justify-center gap-2 py-2 text-[11px] font-mono border border-slate-700 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white transition-all rounded-md">
              <Github className="w-3 h-3" /> SOURCE
            </button>
            <button className=" cursor-target relative group/btn overflow-hidden py-2 text-[11px] font-mono bg-cyan-500 text-black font-bold rounded-md transition-all hover:shadow-[0_0_15px_rgba(125,249,255,0.6)]">
              <span className=" relative z-10 flex items-center justify-center gap-1">
                DEPLOY <ExternalLink className="w-3 h-3" />
              </span>
            </button>
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/20 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/20 rounded-bl-xl pointer-events-none" />
        </div>
      </ElectricBorder>

      {/* Tailwind Animation for the scanning line */}
      <style jsx global>{`
        @keyframes scan {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(176px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
