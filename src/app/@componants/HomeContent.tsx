"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import TypeWritting from "./TypeWritting";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Download } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const caveat = Poppins({ subsets: ["latin"], weight: ["600"] });

const HomeContent = () => {
  const socials = [
    {
      icon: <Github size={28} />,
      href: "https://github.com/shamimgazi8",
      label: "GitHub",
      color: "hover:text-white",
    },
    {
      icon: <Linkedin size={28} />,
      href: "https://www.linkedin.com/in/shamimgazi83/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaXTwitter size={28} />,
      href: "#",
      label: "Twitter",
      color: "hover:text-sky-400",
    },
    {
      icon: <Instagram size={28} />,
      href: "https://www.instagram.com/shamim__gazi__/",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full relative z-50 flex flex-col justify-center items-center py-10 overflow-hidden">
      {/* Animated Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]  -z-10"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="profile flex lg:flex-row flex-col justify-around items-center w-full max-w-6xl px-4"
      >
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
          {/* Floating Profile Image */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-target rounded-full mb-8 overflow-hidden border-[2px] border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.4)]"
          >
            <Image
              height={220}
              width={220}
              alt="profile"
              src={"/pic1.png"}
              className="pointer-events-none hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className={`text-[32px] md:text-[45px] text-[#f4fdff] ${caveat.className} mb-2`}
          >
            Hi, I&apos;m Shamim <span className="text-[#f4fdff]">― A </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="scale-90 origin-center lg:origin-left mb-4"
          >
            <TypeWritting />
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-[18px] md:text-[24px] mb-8 text-white/80 font-medium"
          >
            I build things for the web.
          </motion.h3>

          {/* LARGER SOCIAL ICONS WITH DYNAMIC HOVER */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row gap-8 mb-10 items-center justify-center lg:justify-start w-full"
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.2,
                  filter: "drop-shadow(0 0 8px rgba(168,85,247,0.6))",
                }}
                href={social.href}
                className={` cursor-target  cursor-none text-white/40 transition-colors duration-300 ${social.color}`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 items-center"
          >
            <button
              onClick={() =>
                (window.location.href = "mailto:shamim.g47@gmail.com")
              }
              className="cursor-target group relative px-10 py-4 text-[12px] font-bold tracking-[0.2em] text-black border-white border overflow-hidden uppercase transition-all duration-300 "
            >
              <span className="absolute inset-0 bg-white group-hover:bg-black transition-colors duration-300"></span>
              <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Get In Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.span>
              </span>
            </button>

            <a
              href="/CV-ShamimGazi.pdf"
              download
              className="cursor-target group flex items-center gap-3 px-10 py-4 border border-white/10 text-white text-[12px] font-bold tracking-[0.2em] hover:bg-white/5 hover:border-white/40 transition-all uppercase "
            >
              <span>Download CV</span>
              <Download
                size={18}
                className="transition-transform group-hover:translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Skills SVG with Optimized Visibility */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center mt-16 lg:mt-0 lg:ml-10"
        >
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="p-4"
          >
            <Image
              height={100}
              width={500}
              alt="skills"
              src={"/mainIconsdark.svg"}
              className="pointer-events-none mix-blend-screen brightness-150 grayscale opacity-80"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeContent;
