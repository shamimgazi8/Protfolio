import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Project Completed", value: 15, suffix: "+" },
  { label: "Happy Clients", value: 20, suffix: "+" },
  { label: "Lines of Code", value: 98, suffix: "K" },
  { label: "Cups of Coffee", value: 78, suffix: "K" },
];

const StatsSection = () => {
  return (
    <section className="bg-black py-24 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat }: any) => {
  const ref = useRef(null);
  // Change 1: Set once: true so the observer kills itself after firing
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Only run the logic if it's in view and hasn't finished animating yet
    if (isInView && !hasAnimated) {
      let start = 0;
      const end = stat.value;
      const duration = 2;
      const increment = end / (duration * 60);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          setHasAnimated(true); // Mark as done
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      // Change 2: Ensure the entrance animation only happens once
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-2"
    >
      <div className="flex items-baseline">
        <span className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">
          {count.toLocaleString()}
        </span>
        <span className="text-3xl md:text-5xl font-black text-indigo-500 italic ml-1">
          {stat.suffix}
        </span>
      </div>
      <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] font-medium">
        {stat.label}
      </p>
    </motion.div>
  );
};

export default StatsSection;
