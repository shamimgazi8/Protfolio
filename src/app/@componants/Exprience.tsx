"use client";
import Link from "next/link";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

import { useScroll, motion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import ReadMore from "./Readmore";

const text1 = `       Worked as part of a team responsible for developing and
                  enhancing web applications, focusing on improving user
                  experience and interface performance. Key contributions
                  include implementing responsive UI components, optimizing the
                  speed and accessibility of web pages, and integrating new
                  features using modern frontend technologies such as React.js
                  and TypeScript. Additionally, collaborated with backend
                  developers and designers to ensure seamless API integrations
                  and developed reusable code components to streamline future
                  development efforts. Played a pivotal role in enhancing
                  cross-browser compatibility and ensuring mobile responsiveness
                  for diverse user devices.`;
const text2 = ` Worked as part of a team to develop full-stack web
                  applications using the MERN stack (MongoDB, Express.js,
                  React.js, Node.js). Focused on building scalable and efficient
                  RESTful APIs, designing responsive and dynamic user
                  interfaces, and managing backend databases. Key contributions
                  included implementing user authentication, optimizing database
                  queries for better performance, and integrating third-party
                  services. Also worked on deploying applications on cloud
                  platforms and ensuring smooth interaction between the frontend
                  and backend, leveraging technologies like Redux for state
                  management and MongoDB for handling large data sets. Played a
                  key role in ensuring the overall responsiveness, security, and
                  maintainability of the applications.`;
const text3 = `   A software engineering bootcamp is an intensive, fast-paced
                  program designed to equip students with the practical skills
                  and knowledge needed to pursue a career in software
                  development. Typically spanning several weeks to a few months,
                  these bootcamps focus on teaching core programming languages,
                  frameworks, and best practices in software engineering.
                  Participants learn full-stack development, covering both
                  frontend (HTML, CSS, JavaScript, React) and backend (Node.js,
                  Express, databases) technologies, along with version control
                  (Git/GitHub), testing, and deployment techniques. The
                  curriculum often includes hands-on projects, coding
                  challenges, and real-world scenarios to help students build a
                  portfolio. In addition to coding skills, bootcamps teach
                  software engineering principles such as Agile methodologies,
                  problem-solving, and debugging. Graduates of software
                  engineering bootcamps emerge with practical experience, ready
                  to take on junior developer roles, and often have support with
                  job placements, networking, and career guidance.`;

const Exprience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className=" h-[100%] lg:w-[70%] w-[80%] mx-auto mt-[100px] relative z-50  ">
      <div className=" w-full flex items-center justify-center">
        <div className="content2 text-[40px] sm:text-[70px] font-bold relative text-center">
          <h2 className=" absolute font-mono"> Exprience</h2>
          <h2 className=" font-mono"> Exprience</h2>
        </div>
      </div>

      <div
        ref={ref}
        className=" grid lg:grid-cols-[100px_1fr] grid-cols-[10px_1fr]  items-center"
      >
        <div>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className=" absolute  lg:left-[50px] left-[0px] lg:top-[210px] top-[220px] w-[4px] h-[80%] bg-cyan-400 origin-top"
          />
        </div>
        <div className=" mt-10 w-full">
          <div>
            <div className=" mt-10  w-[100%] flex gap-5">
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
                  Full Stack Engineer{" "}
                  <Link href={"https://www.google.com/"}>
                    <span className=" text-cyan-400"> @MotoPulse </span>
                  </Link>
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  className=" text-[15px] text-gray-400 font-semibold mb-2"
                >
                  {" "}
                  2025 (February) | Gulshan, Dhaka, BD
                </p>
                <h2
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1600"
                  className=" text-[20px] text-white font-semibold"
                >
                  <ReadMore
                    text="Developed MotoPulse, a full-stack web application designed to help users discover, review, and compare motorcycles across various brands and types. The platform features a dynamic interface for managing bikes, user-generated reviews, comment threads, and image uploads.

Key Responsibilities:

Designed and implemented a RESTful API using Express.js and Sequelize (PostgreSQL) for managing motorcycles, brands, models, types, users, reviews, and comments.

Built a responsive Next.js frontend with TypeScript and Tailwind CSS, focusing on performance, accessibility, and smooth user experience.

Integrated JWT-based authentication for secure login and user interaction.

Implemented Cloudinary integration for efficient image uploading and storage.

Created advanced features including a multi-level dynamic navigation bar, like/unlike review system, and a comment system with edit/delete capabilities.

Utilized GitHub for version control and followed agile development practices.

Tech Stack: React, Next.js, TypeScript, Tailwind CSS, Express.js, Node.js, PostgreSQL, Sequelize, Cloudinary, JWT"
                  />
                </h2>
              </div>
            </div>
            <div className=" mt-10  w-[100%] flex gap-5">
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
                  Junior Software Engineer{" "}
                  <Link href={"https://www.google.com/"}>
                    <span className=" text-cyan-400"> @M4yours IT </span>
                  </Link>
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  className=" text-[15px] text-gray-400 font-semibold mb-2"
                >
                  {" "}
                  2023-2024 (April) | Elephant Road, Dhaka, BD
                </p>
                <h2
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1600"
                  className=" text-[20px] text-white font-semibold"
                >
                  <ReadMore
                    text="Responsible for developing and implementing software applications
Designed and implemented a new software application, resulting in a 20% increase in efficiency for the department.
Led a project to integrate third-party APIs, reducing data redundancy and improving data quality.
Collaborated with the product team to understand their requirements and tailored solutions that enhanced product functionality."
                  />
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
                  MERN Stack
                  <Link href={"https://www.google.com/"}>
                    <span className=" text-cyan-400"> @Furniro </span>
                  </Link>
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  className=" text-[15px] text-gray-400 font-semibold mb-2"
                >
                  {" "}
                  2024 | Banasree, BD.
                </p>
                <h2
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1600"
                  className=" text-[20px] text-white font-semibold"
                >
                  {" "}
                  <ReadMore text={text2} />
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
                  Frontend Engineer
                  <Link href={"https://www.google.com/"}>
                    <span className=" text-cyan-400"> @24onbd</span>
                  </Link>
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  className=" text-[15px] text-gray-400 font-semibold mb-2"
                >
                  {" "}
                  2020-2021 | Gulshan, Dhaka, BD.
                </p>
                <h2
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1600"
                  className=" text-[20px] text-white font-semibold"
                >
                  <ReadMore text={text3} />
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
