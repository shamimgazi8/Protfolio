"use client";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
const About = () => {
  const AnimationNumbers = ({ value }: any) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInview = useInView(ref);
    useEffect(() => {
      if (isInview) {
        motionValue.set(value);
      }
    }, [isInview, value, motionValue]);

    useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          // @ts-ignore
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springValue, value]);
    return <span ref={ref}> </span>;
  };
  return (
    <div className="discription h-[100%] pt-5">
      <div>
        <div className=" w-full flex items-center justify-center">
          <div className="content2 text-[50px] sm:text-[70px] font-bold relative text-center">
            <h2 className=" absolute font-mono">Unveiling My Journey!</h2>
            <h2 className=" font-mono">Unveiling My Journey!</h2>
          </div>
        </div>
      </div>

      <div className=" w-full h-[100%] grid md:grid-cols-[2fr_1fr_1fr] sm:grid-cols-3 m-10 items-center ">
        <div className=" h-full p-8 ">
          <h1
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
            className=" font-bold text-[30px] text-[#f4fdff] mb-5"
          >
            BIOGRAPHY
          </h1>
          <p
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className=" mb-6 font-semibold text-[#f4fdff] pr-8 "
          >
            As a seasoned front-end web developer with a passion for
            user-centric design, I specialize in leveraging modern technologies
            to create seamless web experiences and creating dynamic and
            intuitive web applications that prioritize both functionality and
            user experience. With a strong foundation in HTML, CSS, and
            JavaScript, I excel in leveraging advanced technologies and
            frameworks such as React, Next.js, and TypeScript to build scalable
            and responsive interfaces.
          </p>
          <p
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className=" mb-6 font font-semibold text-[#f4fdff] pr-8"
          >
            I integrate Redux Toolkit for efficient state management, ensuring
            seamless data flow and application stability. My proficiency extends
            to server-side development using Express.js and Node.js, enabling me
            to build robust APIs and backend systems that complement front-end
            functionalities.
          </p>

          <p
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1400"
            className=" mb-6 font-semibold text-[#f4fdff] pr-8"
          >
            I am dedicated to staying ahead in the field, continually exploring
            new tools and methodologies to enhance performance and optimize user
            interactions. My goal is to deliver high-quality, accessible web
            solutions that meet both user needs and business objectives, while
            adhering to best practices in web development.{" "}
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1600"
          className=" h-full w-full flex justify-center items-center p-10"
        >
          <Image
            height={500}
            width={500}
            alt="avater photo"
            src={"/avater11.jpg"}
            className="border-[4px] border-white mt-[-50px]  flex rounded-lg sm:mr-0 mr-20 "
          />
        </div>
        <div
          data-aos="zoom-in-left"
          className=" h-full flex justify-center items-center flex-col gap-10 sm:pr-0 pr-10"
        >
          <div className=" flex sm:items-end items-center justify-center flex-col">
            <p className=" text-[#f4fdff] font-bold text-[60px]">
              <AnimationNumbers value={10} />+
            </p>
            <p className=" text-[#f4fdff] font-bold text-[20px]">
              Satisfied Clients
            </p>
          </div>
          <div className=" flex sm:items-end items-center justify-center flex-col">
            <p className=" text-[#f4fdff] font-bold text-[60px]">
              {" "}
              <AnimationNumbers value={20} />+
            </p>
            <p className=" text-[#f4fdff] font-bold text-[20px]">
              Projects Completed
            </p>
          </div>
          <div className=" flex sm:items-end items-center justify-center flex-col">
            <p className=" text-[#f4fdff] font-bold text-[60px]">
              <AnimationNumbers value={2} />+
            </p>
            <p className=" text-[#f4fdff] font-bold text-[20px]">
              Years Of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
