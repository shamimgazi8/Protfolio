"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Quote, Star, ArrowUpRight } from "lucide-react";

const whyMeData = [
  {
    title: "Scalable Architecture First",
    tag: "Backend",
    content:
      "I don't just build features; I build systems. Using NestJS and PostgreSQL, I ensure your application can handle growth from day one without technical debt.",
  },
  {
    title: "Performance-Driven Frontend",
    tag: "Optimization",
    content:
      "Speed is a feature. By leveraging Next.js Server Components and advanced caching, I deliver sub-second load times that improve SEO and user retention.",
  },
  {
    title: "Seamless Communication",
    tag: "Strategy",
    content:
      "I act as a bridge between design and engineering. You'll get clear updates, transparent documentation, and a partner who cares about your business goals.",
  },
];

const testimonials = [
  {
    name: "James Sarah",
    role: "CTO, TechFlow",
    initials: "JS",
    text: "The transition from our legacy system to a modern Next.js stack was flawless. The attention to detail in the architecture was impressive.",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, GreenSpace",
    initials: "ER",
    text: "Not only is the code clean, but the UI/UX logic actually makes sense for our users. A rare find in a full-stack developer.",
  },
];

const WhyMeAndFeedback = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  return (
    // Changed h-[90vh] to min-h-screen and py-24 to responsive padding
    <section className="w-full min-h-screen bg-[#fafafa] py-16 md:py-24 px-4 sm:px-6 text-zinc-900 overflow-hidden relative">
      {/* Decorative Background Element - Hidden on very small screens to save space */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-50 -skew-x-12 translate-x-1/2 pointer-events-none hidden sm:block" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
        {/* LEFT: THE CONTENT (Accordion) */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12"
          >
            <span className="text-indigo-600 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4 block">
              The Value Proposition
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-tight md:leading-none mb-4 uppercase italic">
              Why{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #18181b" }}
              >
                Work
              </span>{" "}
              With Me?
            </h2>
          </motion.div>

          <div className="space-y-4">
            {whyMeData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`group border rounded-[1.5rem] md:rounded-3xl transition-all duration-500 ${
                  activeAccordion === i
                    ? "bg-white border-zinc-200 shadow-xl shadow-zinc-200/40"
                    : "bg-transparent border-zinc-200/60"
                }`}
              >
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === i ? -1 : i)
                  }
                  className="w-full flex justify-between items-center p-5 md:p-8 text-left relative overflow-hidden"
                >
                  <div className="flex items-center gap-4 md:gap-6 relative z-10">
                    <span
                      className={`text-2xl md:text-4xl font-black transition-colors duration-500 ${
                        activeAccordion === i
                          ? "text-indigo-600/20"
                          : "text-zinc-200"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-1 block">
                        {item.tag}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold uppercase tracking-tighter leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div
                    className={`p-2 rounded-full flex-shrink-0 transition-all duration-300 ${
                      activeAccordion === i
                        ? "bg-indigo-600 text-white rotate-180"
                        : "bg-zinc-100 text-zinc-400"
                    }`}
                  >
                    <Plus size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {activeAccordion === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 md:pl-28">
                        <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-lg">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: THE SOCIAL PROOF (Testimonials) */}

        <div className="lg:col-span-5 flex flex-col justify-start lg:justify-center py-8 lg:py-0 lg:sticky lg:top-24 md:h-[80vh] h-fit">
          <motion.div
            /* 3. Removed layout prop if it was there, or ensured motion doesn't conflict with height changes */
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            {/* Background Shape */}
            <div className="absolute -inset-4 bg-white/50 blur-3xl rounded-full -z-10 hidden lg:block" />

            <div className="space-y-4 md:space-y-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  /* Added backface-visibility to prevent sub-pixel shaking during animations */
                  className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] md:shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative overflow-hidden transform-gpu"
                >
                  <Quote
                    className="absolute top-4 right-4 md:top-6 md:right-8 text-zinc-50 opacity-20"
                    size={60}
                  />

                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={10}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <p className="text-zinc-700 text-xs md:text-sm leading-relaxed mb-6 font-medium italic relative z-10">
                    &quot;{t.text}&quot;
                  </p>

                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-[10px] md:text-xs uppercase tracking-widest text-zinc-900">
                        {t.name}
                      </h4>
                      <p className="text-[9px] md:text-[10px] text-indigo-500 font-bold uppercase tracking-tighter">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className=" cursor-target w-full mt-6 md:mt-8 bg-zinc-900 text-white p-5 md:p-6 rounded-xl md:rounded-2xl flex items-center justify-center gap-3 group hover:bg-indigo-600 transition-all duration-300 shadow-xl shadow-indigo-100/50"
            >
              <span className="font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
                Explore All Case Studies
              </span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeAndFeedback;
