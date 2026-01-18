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
    <div className="group relative w-full">
      <ElectricBorder
        color="#6366f1"
        speed={0.8}
        chaos={0.1}
        style={{ borderRadius: "24px" }}
      >
        {/* Changed to flex-col for mobile, flex-row for desktop */}
        <div className="relative w-full min-h-[400px] md:h-[380px] bg-[#030303] rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row gap-8 overflow-hidden transition-all duration-500 group-hover:bg-[#080808]">
          {/* Left Side: Visual Thumbnail (Wider) */}
          <div className="relative w-full md:w-1/2 h-48 md:h-full bg-zinc-900 rounded-xl overflow-hidden border border-white/5 group-hover:border-indigo-500/30 transition-colors duration-500">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-transparent opacity-60" />

            {/* Hover Icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <ArrowUpRight size={24} className="text-white" />
              </div>
            </div>
          </div>

          {/* Right Side: Content Area */}
          <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Terminal size={14} className="text-indigo-400" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
                  REF // {category}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic mb-4">
                {title}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold text-indigo-400/80 uppercase tracking-widest">
                  Brief
                </span>
                <div className="h-[1px] flex-grow bg-white/5"></div>
              </div>
              <p className="text-base text-zinc-400 leading-relaxed font-light group-hover:text-zinc-200 transition-colors duration-300 line-clamp-3">
                {description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] text-zinc-500 bg-zinc-900 border border-white/5 rounded font-mono hover:text-indigo-300 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-8 flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-white/10 py-4 text-[10px] font-bold tracking-[0.2em] text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all uppercase">
                <Github size={16} /> Code
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-white py-4 text-[10px] font-bold tracking-[0.2em] text-black hover:bg-indigo-500 hover:text-white transition-all uppercase">
                Live <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>
      </ElectricBorder>
    </div>
  );
};
export default ProjectCard;
