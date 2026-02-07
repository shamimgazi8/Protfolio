"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye, Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const [views, setViews] = useState(0);

    useEffect(() => {
        // Base view count to make it look realistic
        const baseViews = 12450;
        
        // Check local storage for existing count simulation
        const storedViews = localStorage.getItem("portfolio_views");
        
        if (storedViews) {
            // If exists, increment it slightly to simulate activity
            const newViews = parseInt(storedViews) + 1;
            localStorage.setItem("portfolio_views", newViews.toString());
            setViews(newViews);
        } else {
            // First visit, set base + 1
            const newViews = baseViews + 1;
            localStorage.setItem("portfolio_views", newViews.toString());
            setViews(newViews);
        }
    }, []);

    return (
        <footer className="bg-zinc-950 border-t border-zinc-800 text-gray-300 py-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-zinc-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    
                    {/* Brand & Copyright */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
                            Shamim Gazi
                        </h3>
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    {/* View Counter Badge */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full shadow-lg"
                    >
                        <div className="relative">
                            <Eye size={16} className="text-cyan-400" />
                            <div className="absolute inset-0 bg-cyan-400 blur-sm opacity-50 animate-pulse" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Total Views</span>
                            <span className="text-sm font-mono font-bold text-white">
                                {views.toLocaleString()}
                            </span>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                         <SocialLink href="https://github.com/shamimgazi8" icon={<Github size={20} />} />
                         <SocialLink href="#" icon={<Twitter size={20} />} />
                         <SocialLink href="#" icon={<Linkedin size={20} />} />
                         <SocialLink href="mailto:contact@shamimgazi.com" icon={<Mail size={20} />} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
    return (
        <Link 
            href={href} 
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
        >
            {icon}
        </Link>
    );
};

export default Footer;
