import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Quote, Star } from "lucide-react";

const WhyMeAndFeedback = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  // FASTER Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2
        delayChildren: 0.1, // Reduced from 0.3
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Reduced from 0.8
        ease: [0.23, 1, 0.32, 1], // Snappier cubic-bezier
      },
    },
  };

  const whyMeData = [
    {
      title: "Scalable Architecture First",
      content:
        "I don't just build features; I build systems. Using NestJS and PostgreSQL, I ensure your application can handle growth from day one without technical debt.",
    },
    {
      title: "Performance-Driven Frontend",
      content:
        "Speed is a feature. By leveraging Next.js Server Components and advanced caching, I deliver sub-second load times that improve SEO and user retention.",
    },
    {
      title: "Seamless Communication",
      content:
        "I act as a bridge between design and engineering. You'll get clear updates, transparent documentation, and a partner who cares about your business goals.",
    },
  ];

  const testimonials = [
    {
      name: "James Sarah",
      role: "CTO, TechFlow",
      text: "The transition from our legacy system to a modern Next.js stack was flawless. The attention to detail in the API architecture was impressive.",
    },
    {
      name: "Elena Rodriguez",
      role: "Founder, GreenSpace",
      text: "Not only is the code clean, but the UI/UX logic actually makes sense for our users. A rare find in a full-stack developer.",
    },
  ];

  return (
    <section className="w-full bg-zinc-300 py-[100px] px-6 text-zinc-900 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Set to once: true for better performance
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20"
      >
        {/* LEFT: WHY ME (Accordion) */}
        <div>
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl font-black uppercase italic mb-12">
              Why Me?
            </h2>
          </motion.div>

          <div className="space-y-4">
            {whyMeData.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="border-b border-zinc-300 pb-4"
              >
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === i ? -1 : i)
                  }
                  className="w-full flex justify-between items-center py-4 text-left group"
                >
                  <span className="text-xl font-bold uppercase tracking-tighter group-hover:text-indigo-600 transition-colors">
                    0{i + 1}. {item.title}
                  </span>
                  {activeAccordion === i ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </button>
                <AnimatePresence>
                  {activeAccordion === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "circOut" }} // Accelerated accordion open
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-zinc-600 leading-relaxed max-w-md">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: FEEDBACK (Testimonials) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, ease: "easeOut" }, // Sped up from 1s
            },
          }}
          className="bg-white p-8 md:p-12 rounded-[32px] shadow-xl shadow-zinc-200/50"
        >
          <div className="flex items-center gap-2 mb-8">
            <Quote className="text-indigo-500" fill="currentColor" size={32} />
            <h2 className="text-3xl font-bold tracking-tighter uppercase italic">
              Feedback
            </h2>
          </div>

          <div className="space-y-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }} // Faster staggered pop-in
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-zinc-100"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-indigo-500 text-indigo-500"
                    />
                  ))}
                </div>
                <p className="text-zinc-700 leading-relaxed mb-6 italic">
                  &quot;{t.text}&quot;
                </p>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest">
                    {t.name}
                  </h4>
                  <span className="text-xs text-zinc-400 font-mono">
                    {t.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-12 bg-zinc-900 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-indigo-600 transition-all duration-200"
          >
            View All Reviews
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyMeAndFeedback;
