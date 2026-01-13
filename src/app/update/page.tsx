"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import Lenis from "@studio-freight/lenis";

// Components
import PillNav from "@/components/ui/PillNav";
import TargetCursor from "@/component/TargetCursor";
import ProjectCard from "../components/ProjectCard";
import DotGrid from "@/component/DotGrid";

const HomeContent = dynamic(() => import("../@componants/HomeContent"));

const PortfolioUpdate = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    setMounted(true);
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const observerOptions = { threshold: 0.5 };
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const tabName = id.charAt(0).toUpperCase() + id.slice(1);
          setActiveTab(tabName);
        }
      });
    };
    const observer = new IntersectionObserver(callback, observerOptions);
    document
      .querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [mounted]);

  const handleTabChange = (tab: string) => {
    const target = document.getElementById(tab.toLowerCase());
    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target, { duration: 2 });
    }
  };

  if (!mounted) return <div className="h-screen bg-black" />;

  return (
    <div className="bg-black text-white selection:bg-purple-500/30 overflow-x-hidden">
      {/* 1. DOTGRID (Base Layer) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        <DotGrid
          dotSize={5}
          gap={30}
          baseColor="#2f273a"
          activeColor="#5227ff"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* 2. CURSOR (Top Layer) */}
      <div className="fixed inset-0 pointer-events-none z-[99999]">
        <TargetCursor hideDefaultCursor parallaxOn spinDuration={2} />
      </div>

      {/* 3. NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-8 pointer-events-none">
        <div className="pointer-events-auto">
          <PillNav activeTab={activeTab} setActiveTab={handleTabChange} />
        </div>
      </nav>

      <main className="relative">
        {/* SECTION 1: HOME */}
        <Section id="home" zIndex="z-10">
          <HomeParallax>
            <HomeContent />
          </HomeParallax>
        </Section>

        {/* SECTION: WHAT I DO - MODERNIZED */}
        <Section
          id="services"
          zIndex="z-[35]"
          className="bg-white text-black min-h-screen py-24"
        >
          <WhatIDoParallax />
        </Section>

        {/* SECTION 2: PROJECTS */}
        <Section
          id="projects"
          zIndex="z-20"
          className="bg-black/90 backdrop-blur-md border-t border-white/5"
        >
          <ProjectsParallax />
        </Section>

        {/* SECTION 3: ABOUT */}
        <Section
          id="about"
          zIndex="z-30"
          className="bg-black border-t border-white/10"
        >
          <AboutParallax />
        </Section>

        {/* SECTION 4: CONTACT */}
        <Section id="contact" zIndex="z-40" className="bg-white text-black">
          <ContactParallax />
        </Section>
      </main>

      <style jsx global>{`
        ::-webkit-scrollbar {
          display: none;
        }
        body {
          -ms-overflow-style: none;
          scrollbar-width: none;
          overflow-x: hidden;
          background: black;
        }
        html.lenis {
          height: auto;
        }
        .lenis.lenis-smooth {
          scroll-behavior: auto !important;
        }
      `}</style>
    </div>
  );
};

/* -------------------- MODERN SERVICE CARD COMPONENT -------------------- */

const services = [
  {
    title: "UI/UX DESIGN",
    desc: "Crafting digital interfaces that feel as good as they look. Focused on human-centric systems.",
    tags: ["FIGMA", "PROTOTYPING"],
    action: "View Design",
    size: "col-span-2 md:col-span-1",
  },
  {
    title: "WEB DEV",
    desc: "Building high-performance engines with React and Next.js. Speed is a feature.",
    tags: ["NEXT.JS", "TYPESCRIPT"],
    action: "View Code",
    size: "col-span-2 md:col-span-1",
  },
  {
    title: "MOTION DESIGN",
    desc: "Bringing life to static screens through purposeful physics-based interaction and storytelling.",
    tags: ["FRAMER", "GSAP"],
    action: "Watch Reel",
    size: "col-span-2",
  },
];

const ModernServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left - width / 2);
    mouseY.set(clientY - top - height / 2);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        rotateX: useSpring(useTransform(mouseY, [-100, 100], [7, -7]), {
          stiffness: 100,
          damping: 30,
        }),
        rotateY: useSpring(useTransform(mouseX, [-100, 100], [-7, 7]), {
          stiffness: 100,
          damping: 30,
        }),
        transformStyle: "preserve-3d",
      }}
      className={`${service.size} relative group perspective-1000 h-full`}
    >
      <div className="h-full bg-zinc-50/50 backdrop-blur-sm border border-zinc-200/60 p-10 rounded-[2.5rem] transition-all duration-500 group-hover:bg-white group-hover:border-zinc-400 group-hover:shadow-[0_40px_120px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col justify-between">
        {/* Subtle Gradient Glow */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-zinc-100 rounded-full blur-3xl group-hover:bg-purple-50 transition-colors duration-1000" />

        <div className="relative z-10">
          <div className="flex justify-between items-start">
            <span className="font-mono text-xs tracking-widest text-zinc-400">
              / 0{index + 1}
            </span>
            <div className="flex gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] border border-zinc-200 px-3 py-1 rounded-full text-zinc-500 uppercase font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h3 className="text-5xl font-medium text-zinc-900 mt-16 mb-6 tracking-tighter">
            {service.title.split(" ").map((word, i) => (
              <span
                key={i}
                className={
                  i === 1 ? "italic font-light text-zinc-400 serif" : ""
                }
              >
                {word}{" "}
              </span>
            ))}
          </h3>

          <p className="text-zinc-500 text-lg leading-relaxed max-w-sm group-hover:text-zinc-800 transition-colors duration-500">
            {service.desc}
          </p>
        </div>

        <div className="relative z-10 mt-12 flex items-center gap-4">
          <motion.div
            whileHover={{ x: 8 }}
            className="flex items-center gap-3 cursor-pointer group/link"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-900">
              {service.action}
            </span>
            <div className="w-12 h-[1px] bg-zinc-900 origin-left group-hover/link:scale-x-125 transition-transform duration-500" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const WhatIDoParallax = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 flex flex-col">
      <div className="flex flex-col mb-20">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-zinc-400 mb-6"
        >
          Expertise & Skills
        </motion.span>
        <h2 className="text-[clamp(3.5rem,12vw,9rem)] font-light leading-[0.8] tracking-tighter text-zinc-900">
          DESIGNING <br />
          <span className="flex items-center gap-6">
            THE <span className="italic font-serif text-zinc-300">Future</span>
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-8 min-h-[600px]">
        {services.map((s, i) => (
          <ModernServiceCard key={i} service={s} index={i} />
        ))}
      </div>
    </div>
  );
};

/* -------------------- PREVIOUS PARALLAX COMPONENTS -------------------- */

const HomeParallax = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <motion.div ref={ref} style={{ scale, opacity }} className="w-full">
      {children}
    </motion.div>
  );
};

const ProjectsParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const projects = [
    {
      title: "Sportinerd",
      category: "WEB_APP",
      tags: ["NEXT.JS", "REACT"],
      image: "/project/sportinerd.png",
    },
    {
      title: "MotoPulse",
      category: "MARKETPLACE",
      tags: ["NEXT.JS", "CLOUDINARY"],
      image: "/project/moto.png",
    },
    {
      title: "MotoPulse",
      category: "MARKETPLACE",
      tags: ["NEXT.JS", "CLOUDINARY"],
      image: "/project/moto.png",
    },
    {
      title: "MotoPulse",
      category: "MARKETPLACE",
      tags: ["NEXT.JS", "CLOUDINARY"],
      image: "/project/moto.png",
    },
    {
      title: "MotoPulse",
      category: "MARKETPLACE",
      tags: ["NEXT.JS", "CLOUDINARY"],
      image: "/project/moto.png",
    },
  ];
  return (
    <div
      ref={ref}
      className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-10"
    >
      {projects.map((p, i) => (
        <motion.div key={p.title} style={{ y: i === 0 ? y1 : y2 }}>
          <ProjectCard {...p} description="Scroll parallax enabled." />
        </motion.div>
      ))}
    </div>
  );
};

const AboutParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <motion.div ref={ref} style={{ x }} className="whitespace-nowrap">
      <h2 className="text-6xl md:text-[18rem] font-black italic uppercase opacity-20">
        ABOUT ME • ABOUT ME • ABOUT ME
      </h2>
    </motion.div>
  );
};

const ContactParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  return (
    <motion.div ref={ref} style={{ scale }} className="text-center">
      <h2 className="text-7xl md:text-[12rem] font-bold tracking-tighter">
        GET IN TOUCH
      </h2>
    </motion.div>
  );
};

const Section = ({
  id,
  children,
  zIndex,
  className,
}: {
  id: string;
  children: React.ReactNode;
  zIndex: string;
  className?: string;
}) => (
  <section
    id={id}
    // Changed h-screen to min-h-screen and removed overflow-hidden
    className={`relative min-h-screen w-full flex items-center justify-center py-20 ${zIndex} ${className}`}
  >
    {children}
  </section>
);

export default PortfolioUpdate;
