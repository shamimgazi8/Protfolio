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
      <div className="w-[90%] mx-auto relative z-50 lg:h-[100dvh] flex flex-col justify-center items-start ">
        <div className=" profile mt-10 flex lg:flex-row flex-col justify-around w-full lg:p-0 ">
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
            <h3 className="sm:text-[45px] text-[30px] m-5 text-gray-300 font-[600] text-center">
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
              className="lg:ml-0 ml-[100px]"
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
