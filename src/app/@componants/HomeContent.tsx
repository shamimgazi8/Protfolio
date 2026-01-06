"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import TypeWritting from "./TypeWritting";

const caveat = Poppins({ subsets: ["latin"], weight: ["600"] });

const HomeContent = () => {
  return (
    <div className="w-full relative z-50 flex flex-col justify-center items-center py-10">
      <div className="profile flex lg:flex-row flex-col justify-around items-center w-full max-w-6xl px-4">
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center items-center text-center"
        >
          {/* PROFILE IMAGE */}
          <div className="cursor-target rounded-full mb-4 overflow-hidden border-[2px] border-purple-400 shadow-lg">
            <Image
              height={220}
              width={220}
              alt="profile"
              src={"/pic1.png"}
              className="pointer-events-none"
            />
          </div>

          <h1
            className={`text-[32px] md:text-[40px] text-[#f4fdff] ${caveat.className}`}
          >
            Hi, I&apos;m Shamim <span className="text-[#f4fdff]">― A </span>
          </h1>

          <div className="scale-90 origin-center">
            <TypeWritting />
          </div>

          <h3 className="text-[18px] md:text-[24px] mt-3 mb-6 text-gray-400 font-medium">
            I build things for the web<span className="text-[#f4fdff]">.</span>
          </h3>

          <div className="flex flex-row gap-4 items-center">
            {/* Contact Button */}
            <div className="cursor-target">
              <button
                onClick={() =>
                  (window.location.href = "mailto:shamim.g47@gmail.com")
                }
                className="group relative px-6 py-2.5 text-xs md:text-sm font-medium text-white transition-all duration-300"
              >
                <span className="absolute inset-0 border border-blue-500 rounded-md group-hover:bg-blue-500/10 pointer-events-none"></span>
                <span className="absolute inset-0 bg-blue-600 rounded-md blur-[2px] opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none"></span>
                <span className="relative flex items-center gap-1.5 pointer-events-none">
                  Get In Touch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Resume Button */}
            <div className="cursor-target">
              <a
                href="/resume.pdf"
                className="group flex items-center gap-2 px-6 py-2.5 border border-blue-300/20 text-white text-xs md:text-sm font-medium rounded-md hover:border-blue-500 hover:bg-white/5 transition-all"
              >
                <span className="pointer-events-none">CV/Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-400 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* SKILLS SVG */}
        <div
          data-aos="fade-left"
          className="flex flex-col items-center justify-center mt-12 lg:mt-0 lg:ml-10"
        >
          <div className="cursor-target p-4">
            <Image
              height={80}
              width={450}
              alt="skills"
              src={"/mainIconsdark.svg"}
              className="opacity-70 hover:opacity-100 transition-opacity pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
