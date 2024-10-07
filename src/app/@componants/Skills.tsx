"use client";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiVite } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import skillsData from "./../../../data/skillsData";

const Skills = () => {
  const icons = {
    FaHtml5: <FaHtml5 className="text-[100px] w-full" />,
    FaCss3Alt: <FaCss3Alt className="text-[100px] w-full" />,
    SiJavascript: <SiJavascript className="text-[100px] w-full p-2" />,
    RiReactjsFill: <RiReactjsFill className="text-[100px] w-full" />,
    SiVite: (
      <svg
        className="p-2 w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100px"
        height="100px"
        viewBox="0 0 256 257"
        version="1.1"
        preserveAspectRatio="xMidYMid"
      >
        {/* SVG content for Vite */}
      </svg>
    ),
    TbBrandNextjs: <TbBrandNextjs className="text-[100px] w-full" />,
    // Add more icon mappings as needed
  };

  return (
    <div className="h-[100%] relative z-50">
      <div className="w-full flex items-center justify-center">
        <div className="content2 text-[50px] sm:text-[70px] font-bold relative text-center">
          <h2 className="absolute font-mono">Expertise Showcase</h2>
          <h2 className="font-mono">Expertise Showcase</h2>
        </div>
      </div>

      <div className="sm:w-full w-[100%] mt-10 flex sm:flex-col justify-center flex-row gap-8 ">
        <div className="flex sm:flex-row flex-col ml-5 sm:mr-0 sm:justify-center justify-start sm:items-center items-start gap-8 flex-wrap">
          {skillsData.map((skill: any, index: any) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "zoom-out-right" : "zoom-out-left"}
              className="cursor-pointer h-[340px] w-[160px] border-[2px] border-white rounded grid grid-rows-[1fr,2fr]"
            >
              <div
                className={`w-[156px] h-[150px] ${skill.color}  flex justify-center items-center overflow-hidden`}
              >
                <Image
                  src={`/${skill?.icon}`}
                  height={150}
                  width={156}
                  className=" object-cover"
                  alt="logo"
                />
              </div>
              <div className="bg-white text-black overflow-hidden p-1">
                <p className="font-bold text-center mt-2">{skill.title}</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="font-semibold text-[15px] text-center mt-4">
                        {skill.description}
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="  w-[160px] p-2">{skill.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
