import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Zap,
  Shield,
  Database,
  Layout,
  Activity,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Enterprise Backend Architecture",
    tags: ["NESTJS", "TYPESCRIPT", "MICROSERVICES"],
    desc: "Designing modular, testable, and maintainable server-side systems using NestJS. Built for high-stakes business logic.",
    cta: "View Architecture",
    icon: <Layout className="text-indigo-500" size={24} />,
    gridSpan: "lg:col-span-2",
  },
  {
    id: "02",
    title: "Database Design & ORM",
    tags: ["POSTGRES", "MONGODB", "PRISMA"],
    desc: "Optimizing data flow with PostgreSQL and MongoDB. Expert in schema design and efficient querying.",
    cta: "View Schema",
    icon: <Database className="text-emerald-500" size={24} />,
    gridSpan: "lg:col-span-1",
  },
  {
    id: "03",
    title: "Server-Side Rendering & SEO",
    tags: ["NEXT.JS", "SERVER COMPONENTS", "SEO"],
    desc: "Leveraging Next.js App Router to build lightning-fast, SEO-optimized frontends with superior Core Web Vitals.",
    cta: "Analyze Speed",
    icon: <Zap className="text-orange-500" size={24} />,
    gridSpan: "lg:col-span-1",
  },
  {
    id: "04",
    title: "Real-Time Applications",
    tags: ["SOCKET.IO", "REDIS", "NESTJS"],
    desc: "Building interactive experiences like live dashboards using WebSockets and event-driven patterns.",
    cta: "See Live Demo",
    icon: <Activity className="text-pink-500" size={24} />,
    gridSpan: "lg:col-span-1",
  },
  {
    id: "05",
    title: "Secure Authentication",
    tags: ["PASSPORT.JS", "NEXTAUTH", "RBAC"],
    desc: "Implementing robust security layers with JWT, OAuth2, and RBAC to protect sensitive data.",
    cta: "Read Security Docs",
    icon: <Shield className="text-blue-500" size={24} />,
    gridSpan: "lg:col-span-1",
  },
];

const ServiceGrid = () => {
  return (
    <section className="bg-[#030303] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-white text-5xl md:text-7xl font-black uppercase italic leading-none mb-6">
              Code <br />{" "}
              <span className="text-indigo-500 whitespace-nowrap">
                That Breathes
              </span>
            </h2>
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
              High-performance solutions for the modern web.
            </p>
          </div>
          <div className="h-[1px] flex-1 bg-zinc-800 hidden md:block mx-12 mb-4" />
          <div className="text-right">
            <span className="text-white/20 font-black text-8xl italic select-none">
              SERVICES
            </span>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${service.gridSpan} group relative bg-zinc-900/40 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900/60 transition-all duration-500 flex flex-col justify-between overflow-hidden`}
            >
              {/* Background Glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/10 blur-[80px] group-hover:bg-indigo-500/20 transition-all" />

              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="text-zinc-600 font-mono text-sm tracking-tighter">
                    / {service.id}
                  </span>
                  <div className="p-3 bg-black/40 rounded-2xl border border-white/5 group-hover:border-white/20 transition-colors">
                    {service.icon}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono text-indigo-400 bg-indigo-500/5 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>

              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-white font-bold uppercase text-[10px] tracking-[0.2em] pt-4 border-t border-white/5 w-fit"
              >
                {service.cta}{" "}
                <ArrowUpRight size={14} className="text-indigo-500" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
