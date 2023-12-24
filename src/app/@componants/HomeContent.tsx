"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/Motion";
import TypeWritting from "./TypeWritting";
import NavBar from "./NavBar";

const caveat = Poppins({ subsets: ["latin"], weight: ["600"] });
const HomeContent = () => {
  return (
    <>
      <div className=" relative flex flex-col  w-full z-50 ">
        <motion.div
          initial="hidden"
          animate="visible"
          className=" profile mt-10 sm:flex sm:justify-around sm:m-[15px] sm:items-center  "
        >
          <motion.div
            variants={slideInFromLeft(1)}
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
              className={`text-[50px] text-white  ${caveat.className} text-center`}
            >
              HI! I AM SHAMIM <span className="text-[#C70039] "> GAZI</span>
            </h1>
            <TypeWritting />
            <h3 className="sm:text-[45px] text-[30px] m-5 text-gray-300 font-[600]">
              I build things for the web
              <span className="text-[#C70039]">.</span>
            </h3>
          </motion.div>
          <motion.div
            variants={slideInFromRight(0.8)}
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
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
export default HomeContent;
