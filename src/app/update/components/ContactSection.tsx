import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-zinc-100 text-black py-24 px-6 relative overflow-hidden min-h-screen">
      {/* Background Decorative Text (Reverse Color) */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
        <h2 className="text-[20vw] font-black uppercase italic leading-none text-black">
          Contact
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 pt-10">
        {/* LEFT COLUMN: Reach Out */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <h3 className="text-indigo-600 font-mono text-sm tracking-[0.3em] mb-4 uppercase">
              Get in Touch
            </h3>
            <h2 className="text-6xl md:text-7xl font-black uppercase italic leading-[0.9]">
              Let&apos;s build <br />{" "}
              <span className="text-zinc-400">something</span> <br /> great.
            </h2>
          </div>

          <div className="space-y-8">
            <ContactInfo
              icon={<Mail size={20} />}
              label="Email"
              value="shamim.g47@gmail.com"
            />
            <ContactInfo
              icon={<Phone size={20} />}
              label="Phone"
              value="+880 196 0475783"
            />
            <ContactInfo
              icon={<MapPin size={20} />}
              label="Location"
              value="Dhaka, Bangladesh"
            />
            <ContactInfo
              icon={<Globe size={20} />}
              label="Availability"
              value="Remote / Worldwide"
            />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-black/5"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField label="Name" placeholder="John Doe" type="text" />
              <InputField
                label="Email"
                placeholder="john@example.com"
                type="email"
              />
            </div>

            <InputField
              label="Subject"
              placeholder="Project Inquiry"
              type="text"
            />

            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                className="bg-zinc-50 border-b border-zinc-200 py-3 focus:border-indigo-500 outline-none transition-colors resize-none text-zinc-800"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-target w-full bg-black text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-colors hover:bg-zinc-800"
            >
              Send Message <Send size={16} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

/* Helper Component for Form Inputs */
const InputField = ({ label, placeholder, type }: any) => (
  <div className="flex flex-col space-y-2 group">
    <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 group-focus-within:text-indigo-500 transition-colors">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="bg-transparent border-b border-zinc-200 py-3 focus:border-indigo-500 outline-none transition-colors text-zinc-800"
    />
  </div>
);

/* Helper Component for Info Rows */
const ContactInfo = ({ icon, label, value }: any) => (
  <div className="flex items-center gap-6 group">
    <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-mono uppercase text-zinc-400 tracking-tighter">
        {label}
      </p>
      <p className="text-lg font-bold text-zinc-800 tracking-tight">{value}</p>
    </div>
  </div>
);

export default ContactSection;
