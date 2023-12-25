"use client";
import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className=" h-[100%] w-full mt-[100px] relative z-50 ">
      <div className=" w-full flex items-center justify-center">
        <h1 className=" text-[30px] sm:text-[70px] text-white font-bold  shadow-lg shadow-[#2A0E61]/50">
          Academic Milestones
        </h1>
      </div>

      <div
        ref={ref}
        className=" grid grid-cols-[150px,1fr] sm:grid-cols-[1fr,2fr] items-center "
      >
        <div>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className=" absolute left-[300px] top-[200px] w-[4px] h-[80%] bg-[#e7e7e7] origin-top"
          />
          <Image
            height={30}
            width={30}
            alt="list"
            src={"/star.gif"}
            className=" absolute top-[198px] left-[450px] rounded-full"
          />
        </div>
        <div className=" mt-10 w-full">
          <div>
            <div className=" mt-10 sm:w-[60%] w-[100%]">
              <h1 className=" text-[30px] font-bold text-white mb-2">
                Bachelor Of Science In Computer Science
              </h1>
              <p className=" text-[15px] text-gray-400 font-semibold mb-2">
                {" "}
                2018-2022 | Daffodil Institute of IT (DIIT)
              </p>
              <h2 className=" text-[15px] text-white font-semibold">
                Relevant courses included Data Structures and Algorithms,
                Computer Systems Engineering, and Artificial Intelligence.
              </h2>
            </div>
            <div className=" mt-10 sm:w-[60%] w-[100%]">
              <Image
                height={30}
                width={30}
                alt="list"
                src={"/star.gif"}
                className=" absolute top-[410px] left-[450px] rounded-full"
              />
              <h1 className=" text-[30px] font-bold text-white mb-2">
                Higher Secondary School and Certifiate
              </h1>
              <p className=" text-[15px] text-gray-400 font-semibold mb-2">
                {" "}
                2016-2018 | Milestone Collage , UTTARA.
              </p>
              <h2 className=" text-[15px] text-white font-semibold">
                Completed a master's project on deep learning, developing a new
                neural network architecture for natural language understanding.
              </h2>
            </div>
            <div className=" mt-10 sm:w-[70%] w-[100%]">
              <Image
                height={30}
                width={30}
                alt="list"
                src={"/star.gif"}
                className=" absolute top-[628px] left-[450px] rounded-full"
              />
              <h1 className=" text-[30px] font-bold text-white mb-2">
                Online Coursework
              </h1>
              <p className=" text-[15px] text-gray-400 font-semibold mb-2">
                {" "}
                2016-2020 | Coursera And EdX
              </p>
              <h2 className=" text-[15px] text-white font-semibold">
                Completed coursework in advanced topics such as Reinforcement
                Learning, Computer Vision, and Machine Learning Engineering.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
