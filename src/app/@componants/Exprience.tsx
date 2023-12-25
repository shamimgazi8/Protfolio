"use client";
import Link from "next/link";

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
const Exprience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className=" h-[100%] w-full mt-[100px] relative z-50  ">
      <div className=" w-full flex items-center justify-center shadow-lg shadow-[#2A0E61]/50  ">
        <h1 className=" text-[30px] sm:text-[70px] text-white font-bold ">
          Journey in Expertise
        </h1>
      </div>

      <div
        ref={ref}
        className=" grid grid-cols-[150px,1fr] sm:grid-cols-[1fr,2fr] items-center"
      >
        <div>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className=" absolute left-[300px] top-[200px] w-[4px] h-[80%] bg-[#d8d8d8] origin-top"
          />
        </div>
        <div className=" mt-10 w-full">
          <div>
            <div className=" mt-10 sm:w-[60%] w-[100%]">
              <Image
                height={30}
                width={30}
                alt="list"
                src={"/star.gif"}
                className=" absolute top-[200px] left-[450px] rounded-full"
              />
              <h1 className=" text-[40px] font-bold text-white mb-2">
                Software Engineer{" "}
                <Link href={"https://www.google.com/"}>
                  <span className=" text-cyan-400"> @Google </span>
                </Link>
              </h1>
              <p className=" text-[15px] text-gray-400 font-semibold mb-2">
                {" "}
                2022-Present | Mountain View, CA
              </p>
              <h2 className=" text-[20px] text-white font-semibold">
                Worked on a team responsible for developing new features for
                Google search engine, including improving the accuracy and
                relevance of search results and developing new tools for data
                analysis and visualization.
              </h2>
            </div>
            <div className=" mt-10 sm:w-[60%] w-[100%]">
              <Image
                height={30}
                width={30}
                alt="list"
                src={"/star.gif"}
                className=" absolute top-[460px] left-[450px] rounded-full"
              />
              <h1 className=" text-[40px] font-bold text-white mb-2">
                Intern
                <Link href={"https://www.google.com/"}>
                  <span className=" text-cyan-400"> @Facebook </span>
                </Link>
              </h1>
              <p className=" text-[15px] text-gray-400 font-semibold mb-2">
                {" "}
                Summer 2021 | Menlo Park, CA.
              </p>
              <h2 className=" text-[20px] text-white font-semibold">
                Worked on a team responsible for developing a new mobile app
                feature that allowed users to create and share short-form video
                content, including designing and implementing a new user
                interface and developing the backend infrastructure to support
                the feature.
              </h2>
            </div>
            <div className=" mt-10 sm:w-[70%] w-[100%]">
              <Image
                height={30}
                width={30}
                alt="list"
                src={"/star.gif"}
                className=" absolute top-[750px] left-[450px] rounded-full"
              />
              <h1 className=" text-[40px] font-bold text-white mb-2">
                Software Developer
                <Link href={"https://www.google.com/"}>
                  <span className=" text-cyan-400"> @Amazon</span>
                </Link>
              </h1>
              <p className=" text-[15px] text-gray-400 font-semibold mb-2">
                {" "}
                2020-2021 | Seattle, WA.
              </p>
              <h2 className=" text-[20px] text-white font-semibold">
                Worked on a team responsible for developing Amazon's mobile app,
                including implementing new features such as product
                recommendations and user reviews, and optimizing the app's
                performance and reliability.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Exprience;
