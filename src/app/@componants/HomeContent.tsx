"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";

import BlackWhole from "./BlackWhole";
import Hireme from "./Hireme";
import TypeWritting from "./TypeWritting";

const caveat = Poppins({ subsets: ["latin"], weight: ["600"] });
const HomeContent = () => {
  return (
    <>
      <BlackWhole />
      <div className=" relative flex flex-col  w-full z-50  h-auto">
        <div className=" profile mt-10 sm:flex sm:justify-around sm:m-[15px] sm:items-center  ">
          <div
            data-aos="fade-right"
            className="flex flex-col justify-center items-center "
          >
            <Image
              height={200}
              width={200}
              alt="avater photo"
              src={"/avater2.jpg"}
              className="border-[2px] border-purple-400 rounded-full flex "
            />
            <h1
              className={`text-[50px] text-[#f4fdff]  ${caveat.className} text-center`}
            >
              HI! I AM SHAMIM <span className=" text-cyan-500 "> GAZI</span>
            </h1>
            <TypeWritting />
            <h3 className="sm:text-[45px] text-[30px] m-5 text-gray-300 font-[600]">
              I build things for the web
              <span className="text-[#f4fdff]">.</span>
            </h3>
          </div>
          <div
            data-aos="fade-left"
            className=" flex gap-[20px] flex-col items-center justify-center mt-[20px]"
          >
            <Image
              height={80}
              width={500}
              alt="skills"
              src={"/mainIconsdark.svg"}
              className=" pr-[-10px] sm:pr-[0px]"
            />
            {/* <p className="text-white m-2">
            I design and code beautifully simple things, and I love what I do
          </p> */}
          </div>
        </div>
        <Hireme />
      </div>
    </>
  );
};
export default HomeContent;
