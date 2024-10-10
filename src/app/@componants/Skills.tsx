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
    <div className="h-[100%] relative z-50">
      <div className="w-full flex items-center justify-center">
        <div className="content2 text-[50px] sm:text-[70px] font-bold relative text-center">
          <h2 className="absolute font-mono">Expertise Showcase</h2>
          <h2 className="font-mono">Expertise Showcase</h2>
        </div>
      </div>

      <div className="w-[80%] m-auto flex flex-wrap gap-[30px] justify-center items-center mt-[25px]">
        {skillsData.map((skill: any, index: any) => (
          <div
            key={index}
            data-aos={index % 3 === 0 ? "zoom-out-right" : "zoom-out-left"}
            // data-aos="zoom-fade"
            className="cursor-pointer lg:h-[340px] lg:w-[160px] w-[80px] h-[120px] border-[2px] border-white rounded grid grid-rows-[1fr,2fr]"
          >
            <div
              className={`lg:w-[156px] lg:h-[150px] h-[75px]  ${skill.color}  flex justify-center items-center overflow-hidden`}
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
              <p className="font-bold text-center mt-2 lg:text-[20px] text-[10px]">
                {skill.title}
              </p>
              <div className=" lg:flex hidden">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="font-semibold lg:text-[15px] text-[8px] text-center mt-4">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
