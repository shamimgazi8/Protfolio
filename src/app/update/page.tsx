"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Lenis from "@studio-freight/lenis";

// Components
import PillNav from "@/components/ui/PillNav";
import TargetCursor from "@/component/TargetCursor"; // Restored
import ProjectCard from "../components/ProjectCard";
import DotGrid from "@/component/DotGrid"; // Restored

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
      {/* 1. RESTORED YOUR EXACT DOTGRID (Non-fixed, scrolls with page) */}
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

      {/* 2. RESTORED YOUR EXACT CURSOR (Fixed at very top layer) */}
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
        {/* SECTION 1: HOME - 3D SCALE REVEAL */}
        <Section id="home" zIndex="z-10">
          <HomeParallax>
            <HomeContent />
          </HomeParallax>
        </Section>

        {/* SECTION 2: PROJECTS - STAGGERED REVEAL (Cards move up at different speeds) */}
        <Section
          id="projects"
          zIndex="z-20"
          className="bg-black/40 backdrop-blur-sm border-t border-white/5"
        >
          <ProjectsParallax />
        </Section>

        {/* SECTION 3: ABOUT - HORIZONTAL TEXT SLIDE */}
        <Section
          id="about"
          zIndex="z-30"
          className="bg-black border-t border-white/10"
        >
          <AboutParallax />
        </Section>

        {/* SECTION 4: CONTACT - SCALE & FADE FLOOR */}
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

/* -------------------- UNIQUE PARALLAX COMPONENTS -------------------- */

// HOME: Content shrinks away as you scroll down
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

// PROJECTS: Grid items float up at different speeds
const ProjectsParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

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
  ];

  return (
    <div
      ref={ref}
      className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-10"
    >
      {projects.map((p, i) => (
        <motion.div key={p.title} style={{ y: i === 0 ? y1 : y2 }}>
          <ProjectCard {...p} description="Scroll parallax enabled." />
        </motion.div>
      ))}
    </div>
  );
};

// ABOUT: Text slides in horizontally
const AboutParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <motion.div ref={ref} style={{ x }} className="whitespace-nowrap">
      <h2 className="text-6xl md:text-[15rem] font-black italic uppercase">
        ABOUT ME • ABOUT ME • ABOUT ME
      </h2>
    </motion.div>
  );
};

// CONTACT: Grows from center
const ContactParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div ref={ref} style={{ scale }} className="text-center">
      <h2 className="text-7xl md:text-[10rem] font-bold">GET IN TOUCH</h2>
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
    className={`sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden ${zIndex} ${className}`}
  >
    {children}
  </section>
);

export default PortfolioUpdate;
