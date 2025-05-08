"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/Motion";
const NavBar = () => {
  return (
    <div className=" relative  flex flex-col w-full h-[65px]  top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <motion.div
        initial="hidden"
        animate="visible"
        className=" nav sm:flex sm:justify-between flex justify-center m-[15px] gap-[40px] sm:m-[15px] sm:items-center  "
      >
        <motion.div
          variants={slideInFromLeft(0.5)}
          className=" flex gap-[20px] "
        >
          <div className=" flex gap-[20px]">
            <Link href={"/"}>
              <Image
                alt="home "
                height={32}
                width={35}
                src={"/home.png"}
                className=" hover:scale-125 transition-all duration-300 cursor-pointer"
              />{" "}
            </Link>
            <Link href={"https://github.com/shamimgazi8"}>
              <Image
                alt="home "
                height={32}
                width={35}
                src={"/git.png"}
                className=" hover:scale-125 transition-all duration-300 cursor-pointer"
              />
            </Link>
          </div>
        </motion.div>
        <motion.div variants={slideInFromTop}>
          <Image
            alt="logo"
            height={50}
            width={40}
            src={"/logo.png"}
            className="sm:mt-[-7px] mt-0"
          />
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.5)}
          className=" flex gap-[20px] "
        >
          <Link href={"https://www.facebook.com/shamim.g47"}>
            <Image
              alt="home "
              height={32}
              width={35}
              src={"/fb.png"}
              className=" hover:scale-125  transition-all duration-300 cursor-pointer"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/shamimgazi83/"}>
            <Image
              alt="home "
              height={32}
              width={35}
              src={"/link.webp"}
              className=" hover:scale-125 transition-all duration-300 cursor-pointer"
            />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default NavBar;
