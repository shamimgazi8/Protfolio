"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft } from "../utils/Motion";
const Hireme = () => {
  return (
    <motion.div className=" fixed left-1 bottom-2 flex items-center justify-center overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromBottom}
        className="sm:w-[125px] sm:h-auto sm:items-center sm:justify-center sm:relative w-[75px]"
      >
        <Image
          alt="hire me "
          height={125}
          width={125}
          src={"/spiner.png"}
          className=" animate-[spin_8s_linear_infinite]"
        />
        <Link
          href={"mailto:shamim.g47@gmail.com"}
          className="sm:mt[-1px] sm:h-[70px] sm:w-[70px] bg-white text-black font-[800] text-center sm:rounded-full rounded-full text-[12px] flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-150"
        >
          Hire Me
        </Link>
      </motion.div>
    </motion.div>
  );
};
export default Hireme;