import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Zap,
  Shield,
  Database,
  Layout,
  Activity,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    slug: "/nest-js-golden-stack",
    title: "Enterprise Backend Architecture",
    tags: ["NESTJS", "TYPESCRIPT", "MICROSERVICES"],
    desc: "Designing modular, testable, and maintainable server-side systems using NestJS. Built for high-stakes business logic.",
    cta: "View Architecture",
    icon: <Layout className="text-indigo-500" size={20} />, // Smaller icon
    gridSpan: "lg:col-span-2",
  },
  {
    id: "02",
    title: "Database Design & ORM",
    slug: "postgres-vs-mongodb-prisma-bridge",
    tags: ["POSTGRES", "MONGODB", "PRISMA"],
    desc: "Optimizing data flow with PostgreSQL and MongoDB. Expert in schema design and efficient querying.",
    cta: "View Schema",
    icon: <Database className="text-emerald-500" size={20} />,
    gridSpan: "lg:col-span-1",
  },
  {
    id: "03",
    title: "Server-Side Rendering & SEO",
    slug: "postgres-vs-mongodb-prisma-bridge",
    tags: ["NEXT.JS", "SERVER COMPONENTS", "SEO"],
    desc: "Leveraging Next.js App Router to build lightning-fast, SEO-optimized frontends.",
    cta: "Analyze Speed",
    icon: <Zap className="text-orange-500" size={20} />,
    gridSpan: "lg:col-span-1",
  },
  {
    id: "04",
    title: "Real-Time Applications",
    slug: "postgres-vs-mongodb-prisma-bridge",
    tags: ["SOCKET.IO", "REDIS", "NESTJS"],
    desc: "Building interactive experiences like live dashboards using WebSockets.",
    cta: "See Live Demo",
    icon: <Activity className="text-pink-500" size={20} />,
    gridSpan: "lg:col-span-1",
  },
  {
    id: "05",
    title: "Secure Authentication",
    slug: "postgres-vs-mongodb-prisma-bridge",
    tags: ["PASSPORT.JS", "NEXTAUTH", "RBAC"],
    desc: "Implementing robust security layers with JWT, OAuth2, and RBAC.",
    cta: "Read Security Docs",
    icon: <Shield className="text-blue-500" size={20} />,
    gridSpan: "lg:col-span-1",
  },
];

const ServiceGrid = () => {
  return (
    <section className="bg-[#030303] py-28 px-6">
      {" "}
      {/* Reduced py-32 to py-16 */}
      <div className="max-w-6xl mx-auto">
        {" "}
        {/* Reduced max-w-7xl to 6xl */}
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          {" "}
          {/* Reduced mb-20 to mb-12 */}
          <div className="max-w-xl">
            <h2 className="text-white text-4xl md:text-5xl font-black uppercase italic leading-none mb-4">
              {" "}
              {/* Reduced font size */}
              Code <br />{" "}
              <span className="text-indigo-500 whitespace-nowrap">
                That Breathes
              </span>
            </h2>
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
              {" "}
              {/* Reduced text-sm to 10px */}
              High-performance solutions for the modern web.
            </p>
          </div>
          <div className="h-[1px] flex-1 bg-zinc-800 hidden md:block mx-8 mb-3" />
          <div className="text-right">
            <span className="text-white/20 font-black text-xl italic select-none">
              {" "}
              {/* Reduced text-2xl to xl */}
              SERVICES
            </span>
          </div>
        </div>
        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {" "}
          {/* Reduced gap-4 to gap-3 */}
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${service.gridSpan} group relative bg-zinc-900/40 border border-white/5 p-6 rounded-2xl hover:bg-zinc-900/60 transition-all duration-500 flex flex-col justify-between overflow-hidden`} // Reduced padding and rounding
            >
              {/* Background Glow */}
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-indigo-500/10 blur-[60px] group-hover:bg-indigo-500/20 transition-all" />

              <div>
                <div className="flex justify-between items-start mb-8">
                  {" "}
                  {/* Reduced mb-12 to mb-8 */}
                  <span className="text-zinc-600 font-mono text-xs tracking-tighter">
                    / {service.id}
                  </span>
                  <div className="p-2.5 bg-black/40 rounded-xl border border-white/5 group-hover:border-white/20 transition-colors">
                    {service.icon}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-indigo-400 bg-indigo-500/5 px-1.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                  {" "}
                  {/* Reduced text-2xl to lg */}
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  {" "}
                  {/* Reduced text-sm to xs */}
                  {service.desc}
                </p>
              </div>
              <a target="blank" href={`articles/${service?.slug}`}>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="cursor-target flex items-center justify-center gap-2 text-white font-bold uppercase text-[9px] tracking-[0.2em] p-1 w-fit"
                >
                  {service.cta}{" "}
                  <ArrowUpRight size={12} className="text-indigo-500" />
                </motion.button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
