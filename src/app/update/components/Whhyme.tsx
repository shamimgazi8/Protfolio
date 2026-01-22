import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Quote, Star, ArrowUpRight } from "lucide-react";

const WhyMeAndFeedback = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

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

  return (
    <section className="w-full h-[90vh] bg-[#fafafa] py-24 px-6 text-zinc-900 overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        {/* LEFT: THE CONTENT (Accordion) */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-indigo-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
              The Value Proposition
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-4 uppercase italic">
              Why{" "}
              <span
                className="text-transparent stroke-zinc-900 stroke-1"
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
                className={`group border rounded-3xl transition-all duration-500 ${
                  activeAccordion === i
                    ? "bg-white border-zinc-200 shadow-xl shadow-zinc-200/40"
                    : "bg-transparent border-zinc-200/60"
                }`}
              >
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === i ? -1 : i)
                  }
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left relative overflow-hidden"
                >
                  <div className="flex items-center gap-6 relative z-10">
                    <span
                      className={`text-4xl font-black transition-colors duration-500 ${activeAccordion === i ? "text-indigo-600/10" : "text-zinc-100"}`}
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-1 block">
                        {item.tag}
                      </span>
                      <h3 className="text-xl font-bold uppercase tracking-tighter">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div
                    className={`p-2 rounded-full transition-all duration-300 ${activeAccordion === i ? "bg-indigo-600 text-white rotate-180" : "bg-zinc-100 text-zinc-400"}`}
                  >
                    <Plus size={20} />
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
                      <div className="px-8 pb-8 md:pl-28">
                        <p className="text-zinc-500 text-base leading-relaxed max-w-lg">
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
        <div className="lg:col-span-5 flex flex-col justify-center h-[70vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* Background Shape */}
            <div className="absolute -inset-4 bg-white/50 blur-3xl rounded-full -z-10" />

            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative overflow-hidden"
                >
                  <Quote
                    className="absolute top-6 right-8 text-zinc-50 opacity-20"
                    size={80}
                  />

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <p className="text-zinc-700 text-sm leading-relaxed mb-6 font-medium italic relative z-10">
                    &quot;{t.text}&quot;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-900">
                        {t.name}
                      </h4>
                      <p className="text-[10px] text-indigo-500 font-bold uppercase tracking-tighter">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              className=" cursor-target w-full mt-8 bg-zinc-900 text-white p-6 rounded-2xl flex items-center justify-center gap-3 group hover:bg-indigo-600 transition-all duration-300 shadow-2xl shadow-indigo-200"
            >
              <span className="font-bold text-xs uppercase tracking-[0.2em]">
                Explore All Case Studies
              </span>
              <ArrowUpRight
                size={18}
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
