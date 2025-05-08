"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import skillsData from "./../../../data/skillsData";

const Skills = () => {
  return (
    <div className="h-full md:w-[80%] md:m-auto relative z-50">
      {/* Title */}
      <div className="w-full flex items-center justify-center">
        <div className="content2 text-[36px] sm:text-[50px] md:text-[70px] font-bold relative text-center">
          <h2 className="absolute font-mono">Expertise Showcase</h2>
          <h2 className="font-mono">Expertise Showcase</h2>
        </div>
      </div>

      {/* Skill cards */}
      <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-[30px] mt-6 px-4">
        {skillsData.map((skill: any, index: number) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
            className="cursor-pointer w-[40vw] sm:w-[120px] lg:w-[160px] aspect-[2/3] border-2 border-white rounded overflow-hidden grid grid-rows-[1fr,1.2fr] shadow-md"
          >
            {/* Icon section */}
            <div
              className={`w-full h-full ${skill.color} flex justify-center items-center`}
            >
              <Image
                src={`/${skill?.icon}`}
                height={100}
                width={100}
                className="object-contain w-[60%] h-[60%]"
                alt="logo"
              />
            </div>

            {/* Description section */}
            <div className="bg-white text-black p-2 flex flex-col justify-center">
              <p className="font-bold text-center text-[10px] sm:text-[14px] lg:text-[20px]">
                {skill.title}
              </p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="text-center mt-2 text-[8px] sm:text-[12px] lg:text-[15px] line-clamp-2">
                      {skill.description}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[160px] text-[12px]">
                    <p>{skill.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
