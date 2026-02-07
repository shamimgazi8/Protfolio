"use client";

import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Linkedin, Twitter, Facebook, Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import { ArticleData } from "../../data/articleData";

export default function FullArticle({ article }: { article: ArticleData }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Parallax and zoom effect for the background image
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, 80]);

  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: `Check out this article: ${article.title}`,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      setIsShareOpen(true);
    }
  };

  const copyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

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
            alt={article.title}
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
          <button
            onClick={handleShare}
            className="text-[10px] font-black uppercase tracking-widest hover:text-indigo-400 transition-colors"
          >
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

      <AnimatePresence>
        {isShareOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setIsShareOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsShareOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={20} className="text-slate-500" />
              </button>

              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Share Article
              </h3>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    article.title
                  )}&url=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <Twitter
                      size={20}
                      className="text-slate-600 group-hover:text-white"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Twitter
                  </span>
                </a>

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Facebook
                      size={20}
                      className="text-slate-600 group-hover:text-white"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Facebook
                  </span>
                </a>

                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}&title=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                    <Linkedin
                      size={20}
                      className="text-slate-600 group-hover:text-white"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    LinkedIn
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex-1 px-2 text-xs text-slate-500 truncate font-mono">
                  {typeof window !== "undefined" ? window.location.href : ""}
                </div>
                <button
                  onClick={copyLink}
                  className={`p-2 rounded-lg transition-all ${
                    isCopied
                      ? "bg-green-500 text-white"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {isCopied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
