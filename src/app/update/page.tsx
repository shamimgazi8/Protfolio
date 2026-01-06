"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import PillNav from "@/components/ui/PillNav";
import Hyperspeed from "@/component/Hyperspeed";
import TargetCursor from "@/component/TargetCursor";
import ProjectCard from "../components/ProjectCard";

const HomeContent = dynamic(() => import("../@componants/HomeContent"));

const tabs = ["Home", "Projects", "About", "Contact"];

const PortfolioUpdate = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const containerRef = useRef<HTMLElement>(null);

  // Ref to prevent "blinking" during smooth scrolls
  const isManualScrolling = useRef(false);

  useEffect(() => {
    setMounted(true);
    // Prevent document body from scrolling to avoid double scrollbars
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const observerOptions = {
      root: containerRef.current,
      threshold: 0.5,
      rootMargin: "0px",
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      // Ignore observer updates if we are currently moving via a nav click
      if (isManualScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const tabName = id.charAt(0).toUpperCase() + id.slice(1);
          setActiveTab(tabName);
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);
    const sections = containerRef.current.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [mounted]);

  const handleTabChange = (tab: string) => {
    const el = document.getElementById(tab.toLowerCase());
    if (el) {
      // 1. Lock the observer
      isManualScrolling.current = true;
      // 2. Update UI state immediately for responsiveness
      setActiveTab(tab);
      // 3. Perform scroll
      el.scrollIntoView({ behavior: "smooth" });

      // 4. Release lock after scroll finishes (approx 800ms)
      setTimeout(() => {
        isManualScrolling.current = false;
      }, 800);
    }
  };

  if (!mounted) return <div className="h-screen bg-black" />;

  return (
    <main
      ref={containerRef}
      className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-black text-white relative no-scrollbar"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* FIXED UI ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Hyperspeed />
      </div>
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        <TargetCursor hideDefaultCursor parallaxOn spinDuration={2} />
      </div>

      <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-8 pointer-events-none">
        <div className="pointer-events-auto">
          <PillNav activeTab={activeTab} setActiveTab={handleTabChange} />
        </div>
      </nav>

      {/* SECTIONS */}
      <Section id="home">
        <div className="relative z-10 h-full w-full flex items-center justify-center">
          <HomeContent />
        </div>
      </Section>

      <Section id="projects">
        <div className="  z-50 h-full w-full">{Portfolio()}</div>
      </Section>

      <Section id="about">
        <SectionContent title="ABOUT ME" />
      </Section>

      <Section id="contact">
        <SectionContent title="GET IN TOUCH" />
      </Section>

      {/* Inline style to hide scrollbar for Chrome/Safari */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
};

/* -------------------- UI COMPONENTS -------------------- */

const Section = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="h-screen w-full flex items-center justify-center snap-start snap-always flex-shrink-0"
  >
    {children}
  </section>
);

const SectionContent = ({ title }: { title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="text-center px-4"
  >
    <h2 className="text-2xl md:text-[10rem] font-black italic tracking-tighter uppercase leading-none">
      {title}
    </h2>
  </motion.div>
);

export default PortfolioUpdate;
function Portfolio() {
  const projects = [
    {
      title: "Sportinerd",
      category: "WEB_APP",
      description:
        "Sportinerd is your go-to sports ecosystem, delivering real-time LiveScores, in-depth sports data analytics, & the latest news across football & beyond. Engage with interactive fan challenges, unlock strategic player insights, & enjoy personalized updates.",
      tags: ["NEXT.JS", "REACT", "API", "TAILWIND CSS"],
      image: "/project/sportinerd.png",
    },
    {
      title: "MotoPulse",
      category: "MARKETPLACE_APP",
      description:
        "MotoPulse is a motorcycle marketplace web app that allows users to browse bikes, explore features, and make purchases. Designed with performance in mind, it leverages modern UI/UX patterns for a seamless experience.",
      tags: ["NEXT.JS", "REACT", "TAILWIND CSS", "CLOUDINARY"],
      image: "/project/moto.png",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  );
}
