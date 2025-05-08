"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../utils/Motion";

const Hireme = () => {
  return (
    <motion.div className="left-[10px] bottom-[10px] flex items-center justify-start overflow-hidden fixed">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromBottom}
        className="sm:w-[100px] sm:h-auto sm:items-center sm:justify-center sm:relative w-[70px]"
      >
        <Image
          alt="hire me"
          height={100}
          width={100}
          src={"/spiner1.svg"}
          className="animate-[spin_8s_linear_infinite]"
        />
        <Link
          href={"mailto:shamim.g47@gmail.com"}
          className="sm:h-[60px] sm:w-[60px] h-[50px] w-[50px] sm:opacity-100 opacity-0 bg-white text-black font-[800] text-center sm:rounded-full rounded-full text-[13px] flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        >
          Hire Me
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Hireme;
