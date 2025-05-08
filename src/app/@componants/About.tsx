"use client";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [showFullBio, setShowFullBio] = useState(false);

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
    <div className="discription min-h-screen lg:pt-5 pt-[100px] z-50 relative">
      <div className="w-full flex items-center justify-center">
        <div className="content2 text-[50px] sm:text-[70px] font-bold relative text-center">
          <h2 className="absolute font-mono">Unveiling My Journey!</h2>
          <h2 className="font-mono">Unveiling My Journey!</h2>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 m-10 items-center justify-center">
        {/* Biography Text */}
        <div className="h-full p-8 text-[#f4fdff] pr-8">
          <h1
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="font-bold text-[30px] mb-5"
          >
            BIOGRAPHY
          </h1>

          <p
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="mb-6 font-semibold"
          >
            Hi, I&rsquo;m Shamim — a developer driven by curiosity and a love
            for building things that make people&rsquo;s lives better. My
            journey into full-stack development wasn&rsquo;t a straight line,
            but it&rsquo;s been a rewarding one. What started as a fascination
            with how websites work quickly evolved into a deep commitment to
            crafting meaningful digital experiences.
          </p>

          <p
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="mb-6 font-semibold"
          >
            From my early days experimenting with side projects to leading
            features on full-scale platforms, I&rsquo;ve always been drawn to
            the challenge of turning ideas into reality. Whether it&rsquo;s
            brainstorming with a product team, refining a user interface, or
            architecting a backend system, I find energy in solving problems and
            shipping things that matter.
            <br /> I&rsquo;ve had the opportunity to contribute to everything
            from early-stage startup MVPs to full-scale production platforms. I
            thrive in collaborative environments—working closely with designers,
            product managers, and fellow engineers to ship features that are
            both useful and delightful. Problem-solving is at the heart of what
            I do, and I&rsquo;m always excited to learn something new or explore
            an emerging technology.
          </p>

          {showFullBio && (
            <>
              <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="mb-6 font-semibold"
              >
                🧰 <strong>Tech Stack & Skills:</strong>
                <br />
                - Front-End: React, Next.js, TypeScript, JavaScript, HTML5,
                CSS3, Tailwind CSS
                <br />
                - Back-End: Node.js, Express.js, RESTful APIs, JWT
                Authentication
                <br />
                - Databases: PostgreSQL, MongoDB, Firebase
                <br />
                - UI Libraries & Animations: Ant Design, ShadCN UI, Framer
                Motion, AOS
                <br />
                - DevOps & Tools: Git, GitHub, CI/CD pipelines
                <br />
                - Cloud & Integrations: Cloudinary, Vercel, Netlify
                <br />- Testing & Quality: Jest, Postman, ESLint
              </p>

              <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1200"
                className="mb-6 font-semibold"
              >
                Over the years, I&rsquo;ve had the chance to work with teams of
                all sizes — from nimble startups to growing tech platforms —
                learning not just about code, but about people, process, and the
                importance of thoughtful collaboration. I believe the best
                products come from teams that listen well, iterate quickly, and
                care deeply about the user.
              </p>

              <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1400"
                className="mb-6 font-semibold"
              >
                Today, I continue to grow through hands-on work, constant
                learning, and an ever-evolving toolkit. But no matter how much
                technology changes, my core motivation stays the same: to build
                with purpose, collaborate with empathy, and keep creating things
                that move the web forward.
                <br />
                💻 GitHub: shamimgazi8 <br />
                📬 Email: shamim.g47@gmail.com
              </p>
            </>
          )}

          <button
            className="mt-2 text-blue-400 underline cursor-pointer"
            onClick={() => setShowFullBio(!showFullBio)}
          >
            {showFullBio ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Avatar */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1600"
          className="h-full w-full flex justify-center items-center p-10"
        >
          <Image
            height={500}
            width={500}
            alt="avatar photo"
            src={"/pic3.png"}
            className="border-[4px] border-white mt-[-50px] flex rounded-lg sm:mr-0 mr-20"
          />
        </div>

        {/* Stats */}
        <div
          data-aos="zoom-in-left"
          className="h-full flex justify-center items-center flex-col gap-10 sm:pr-0 pr-10"
        >
          <div className="flex sm:items-end items-center justify-center flex-col">
            <p className="text-[#f4fdff] font-bold text-[60px]">
              <AnimationNumbers value={10} />+
            </p>
            <p className="text-[#f4fdff] font-bold text-[20px]">
              Satisfied Clients
            </p>
          </div>
          <div className="flex sm:items-end items-center justify-center flex-col">
            <p className="text-[#f4fdff] font-bold text-[60px]">
              <AnimationNumbers value={20} />+
            </p>
            <p className="text-[#f4fdff] font-bold text-[20px]">
              Projects Completed
            </p>
          </div>
          <div className="flex sm:items-end items-center justify-center flex-col">
            <p className="text-[#f4fdff] font-bold text-[60px]">
              <AnimationNumbers value={2} />+
            </p>
            <p className="text-[#f4fdff] font-bold text-[20px]">
              Years Of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
