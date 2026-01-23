"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArticleData } from "../../data/articleData";

export default function FullArticle({ article }: { article: ArticleData }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Parallax and zoom effect for the background image
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, 80]);

  return (
    <div className="relative bg-white min-h-screen font-sans selection:bg-indigo-600 selection:text-white">
      {/* Precision Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Cinematic Hero Section */}
      <section className="relative h-[85vh] w-full flex items-end overflow-hidden bg-slate-900">
        <motion.div
          style={{ scale: imageScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src={article.image}
            alt=""
            className="w-full h-full object-cover opacity-70"
          />
          {/* Gradients for text protection */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
        </motion.div>

        <motion.div
          style={{ y: textY }}
          className="relative z-20 max-w-5xl mx-auto px-6 pb-20 w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              {article.category}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-10">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm font-medium">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 py-2 px-4 rounded-full">
                <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white font-bold">
                  {article.author[0]}
                </div>
                <span className="text-white">{article.author}</span>
              </div>
              <span className="text-slate-500">/</span>
              <span>{article.date}</span>
              <span className="text-slate-500">/</span>
              <span>{article.readTime}</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Article Body */}
      <main className="relative z-30 bg-white pt-24 pb-48">
        <div className="max-w-3xl mx-auto px-6">
          {/* Architecture Visualization Slot */}
          <div className="mb-20">
            <p className="text-center text-[10px] uppercase tracking-widest text-slate-400 mt-4 font-bold">
              Fig 1.1 — Microservices communication pattern
            </p>
          </div>

          <div className="space-y-16">
            {article.content.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                {block.type === "paragraph" && (
                  <p className="text-xl md:text-2xl text-slate-600 leading-[1.8] font-light">
                    {block.text}
                  </p>
                )}

                {block.type === "heading" && (
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 pt-10 tracking-tight">
                    {block.text}
                  </h2>
                )}

                {block.type === "quote" && (
                  <div className="relative py-4 my-10">
                    <div className="absolute top-0 left-0 w-16 h-1.5 bg-indigo-600" />
                    <blockquote className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight tracking-tight pt-8">
                      “{block.text}”
                    </blockquote>
                  </div>
                )}

                {block.type === "list" && (
                  <div className="grid grid-cols-1 gap-4 my-12">
                    {block.items?.map((item, i) => (
                      <div
                        key={i}
                        className="group flex items-center gap-6 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-all duration-300"
                      >
                        <span className="text-4xl font-black text-indigo-100 group-hover:text-indigo-600 transition-colors">
                          {i + 1}
                        </span>
                        <p className="text-lg text-slate-800 font-bold">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Floating Share/Save/Top Tab - RE-ADDED */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-full max-w-xs px-4">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="bg-white backdrop-blur-xl border border-white/10 px-6 py-4 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-between text-black"
        >
          <button className="text-[10px] font-black uppercase tracking-widest hover:text-indigo-400 transition-colors">
            Share
          </button>
          <div className="w-px h-4 bg-white/20" />
          <button className="text-[10px] font-black uppercase tracking-widest hover:text-indigo-400 transition-colors">
            Save
          </button>
          <div className="w-px h-4 bg-white/20" />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[10px] font-black uppercase tracking-widest text-indigo-400 flex items-center gap-2"
          >
            Top <span className="text-lg">↑</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
