"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { slideInFromTop } from "../utils/Motion";

const NavLinks = [
  { name: "About Me", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
];

const NavBar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo Section */}
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Shamim Gazi
          </span>
        </Link>

        {/* Center Navigation Capsule */}
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NavLinks.map((nav) => (
              <a
                key={nav.name}
                href={nav.link}
                className="cursor-pointer hover:text-[#b49bff] transition"
              >
                {nav.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="flex flex-row gap-5">
          <Link href="https://github.com/shamimgazi8" target="_blank">
            <FaGithub className="text-white text-2xl hover:text-purple-500 transition-all scale-110 hover:scale-125" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/shamimgazi83/"
            target="_blank"
          >
            <FaLinkedin className="text-white text-2xl hover:text-blue-500 transition-all scale-110 hover:scale-125" />
          </Link>
          <Link href="https://www.facebook.com/shamim.g47" target="_blank">
            <FaFacebook className="text-white text-2xl hover:text-blue-400 transition-all scale-110 hover:scale-125" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
