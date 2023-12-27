"use client";
import Link from "next/link";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

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
      <div className=" w-full flex items-center justify-center">
        <div className="content2 text-[50px] sm:text-[70px] font-bold relative">
          <h2 className=" absolute"> Journey in Expertise</h2>
          <h2>Journey in Expertise</h2>
        </div>
      </div>

      <div
        ref={ref}
        className=" grid grid-cols-[150px,1fr] sm:grid-cols-[1fr,3fr] items-center"
      >
        <div>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className=" absolute left-[300px] top-[200px] w-[4px] h-[80%] bg-cyan-400 origin-top"
          />
        </div>
        <div className=" mt-10 w-full">
          <div>
            <div className=" mt-10 sm:w-[70%] w-[100%] flex gap-5">
              <div>
                <VscDebugBreakpointLogUnverified className="text-[50px] text-cyan-400 mt-2" />
              </div>
              <div>
                <h1
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                  className=" text-[40px] font-bold text-white mb-2"
                >
                  Software Engineer{" "}
                  <Link href={"https://www.google.com/"}>
                    <span className=" text-cyan-400"> @Google </span>
                  </Link>
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1100"
                  className=" text-[15px] text-gray-400 font-semibold mb-2"
                >
                  {" "}
                  2022-Present | Mountain View, CA
                </p>
                <h2
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1600"
                  className=" text-[20px] text-white font-semibold"
                >
                  Worked on a team responsible for developing new features for
                  Google search engine, including improving the accuracy and
                  relevance of search results and developing new tools for data
                  analysis and visualization.
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
                  className=" text-[40px] font-bold text-white mb-2"
                >
                  Intern
                  <Link href={"https://www.google.com/"}>
                    <span className=" text-cyan-400"> @Facebook </span>
                  </Link>
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1100"
                  className=" text-[15px] text-gray-400 font-semibold mb-2"
                >
                  {" "}
                  Summer 2021 | Menlo Park, CA.
                </p>
                <h2
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1600"
                  className=" text-[20px] text-white font-semibold"
                >
                  Worked on a team responsible for developing a new mobile app
                  feature that allowed users to create and share short-form
                  video content, including designing and implementing a new user
                  interface and developing the backend infrastructure to support
                  the feature.
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
                  className=" text-[40px] font-bold text-white mb-2"
                >
                  Software Developer
                  <Link href={"https://www.google.com/"}>
                    <span className=" text-cyan-400"> @Amazon</span>
                  </Link>
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1100"
                  className=" text-[15px] text-gray-400 font-semibold mb-2"
                >
                  {" "}
                  2020-2021 | Seattle, WA.
                </p>
                <h2
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1600"
                  className=" text-[20px] text-white font-semibold"
                >
                  Worked on a team responsible for developing Amazon's mobile
                  app, including implementing new features such as product
                  recommendations and user reviews, and optimizing the app's
                  performance and reliability.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Exprience;
