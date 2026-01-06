"use client";

import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { MdExplore } from "react-icons/md";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    slug: string;
    live: string;
    github: string;
    description: string;
    image: string;
    buttonText: string;
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div
      className="borderCurved relative z-50 p-6 border-r-[15px] border-b-[15px] border-t-[2px] border-l-[2px] border-white rounded-2xl shadow-gray-600 grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-6"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="800"
    >
      {/* Image Section */}
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center gap-4 pl-2 md:pl-5">
        <h2 className="text-white text-2xl md:text-4xl font-bold">
          {project.title}
        </h2>
        <p className="text-white text-sm md:text-base">{project.description}</p>
        <div className="flex items-center gap-4 flex-wrap relative z-50">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-[30px] hover:text-gray-300 cursor-pointer" />
          </a>

          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <button className="flex gap-2 items-center justify-center bg-white text-black font-bold px-5 py-2 rounded hover:text-white hover:bg-[#3B3C36] duration-300">
              Explore
              <MdExplore />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
