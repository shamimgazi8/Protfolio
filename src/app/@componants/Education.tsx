"use client";
import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className=" h-[100%] w-full mt-[100px] relative z-50 ">
      <div className=" w-full flex items-center justify-center">
        <div className="content2 text-[50px] sm:text-[70px] font-bold relative text-center">
          <h2 className=" absolute font-mono"> Academic Milestones</h2>
          <h2 className="font-mono"> Academic Milestones</h2>
        </div>
      </div>

      <div
        ref={ref}
        className=" grid grid-cols-[150px,1fr] sm:grid-cols-[1fr,3fr] items-center "
      >
        <div>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className=" absolute sm:left-[300px] sm:top-[200px] left-[50px] top-[260px] w-[4px] h-[80%] bg-cyan-400 origin-top"
          />
        </div>
        <div className=" mt-10 w-full">
          <div>
            <div className=" mt-10 sm:w-[60%] w-[100%] flex gap-5">
              <div>
                <VscDebugBreakpointLogUnverified className="text-[50px] text-cyan-400 mt-2" />
              </div>
              <div>
                <h1
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                  className=" text-[30px] font-bold text-white mb-2"
                >
                  Bachelor Of Science In Computer Science
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1100"
                  className=" text-[15px] text-gray-400 font-semibold mb-2"
                >
                  2018-2022 | Daffodil Institute of IT (DIIT)
                </p>
                <h2
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1600"
                  className=" text-[15px] text-white font-semibold"
                >
                  Relevant courses included Data Structures and Algorithms,
                  Computer Systems Engineering, and Artificial Intelligence.
                </h2>
              </div>
            </div>
            <div className=" mt-10 sm:w-[60%] w-[100%] flex gap-5">
              <div>
                <VscDebugBreakpointLogUnverified className="text-[50px] text-cyan-400 mt-2" />
              </div>
              <div>
                <h1
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                  className=" text-[30px] font-bold text-white mb-2"
                >
                  Higher Secondary School and Certifiate
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1100"
                  className=" text-[15px] text-gray-400 font-semibold mb-2"
                >
                  {" "}
                  2016-2018 | Milestone Collage , UTTARA.
                </p>
                <h2
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1600"
                  className=" text-[15px] text-white font-semibold"
                >
                  Completed a master&apos;s project on deep learning, developing
                  a new neural network architecture for natural language
                  understanding.
                </h2>
              </div>
            </div>
            <div className=" mt-10 sm:w-[70%] w-[100%] flex gap-5">
              <div>
                <VscDebugBreakpointLogUnverified className="text-[50px] text-cyan-400 mt-2" />
              </div>
              <div>
                <h1
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                  className=" text-[30px] font-bold text-white mb-2"
                >
                  Udemy
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1100"
                  className=" text-[15px] text-gray-400 font-semibold mb-2"
                >
                  {" "}
                  2018-2020 | Frontend Development
                </p>
                <h2
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1600"
                  className=" text-[15px] text-white font-semibold"
                >
                  Completed coursework in advanced topics such as JavaScript
                  React, Computer Vision, Softaware Engineering.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
