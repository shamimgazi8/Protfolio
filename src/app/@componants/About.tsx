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
            <h2 className=" absolute font-mono">
              Unveiling the Tapestry of My Journey!
            </h2>
            <h2 className=" font-mono">
              Unveiling the Tapestry of My Journey!
            </h2>
          </div>
        </div>
      </div>

      <div className=" w-full h-[100%] grid md:grid-cols-3 sm:grid-cols-3 m-10 ">
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
            Hi, Im <span className=" font-bold px-2">Shamim Gazi,</span> a web
            developer and Graphics designer with a passion for creating
            beautiful, functional, and user-centered digital experiences. With 2
            years of experience in the field. I am always looking for new and
            innovative ways to bring my clients visions to life.
          </p>
          <p
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className=" mb-6 font font-semibold text-[#f4fdff] pr-8"
          >
            I believe that design is about more than just making things look
            pretty – it&apos;s about solving problems and creating intuitive,
            enjoyable experiences for users.
          </p>
          <p
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1400"
            className=" mb-6 font-semibold text-[#f4fdff] pr-8"
          >
            Whether I&apos;m working on a website, mobile app, or other digital
            product, I bring my commitment to design excellence and
            user-centered thinking to every project I work on. I look forward to
            the opportunity to bring my skills and passion to your next project.
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
