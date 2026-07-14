import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, Zap, Globe, MapPin, Mail, Linkedin } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const badges = [
  { label: "AI Development", icon: Brain, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
  { label: "Enterprise Software", icon: Cpu, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  { label: "Intelligent Automation", icon: Zap, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  { label: "SaaS Platforms", icon: Globe, color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
];

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 overflow-hidden mesh-gradient"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] bg-indigo-600/10 blur-[140px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[-10%] right-[-8%] w-[45%] h-[45%] bg-purple-600/10 blur-[140px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          className="absolute top-[40%] right-[20%] w-[25%] h-[25%] bg-cyan-600/5 blur-[100px] rounded-full"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center"
      >
        {/* Eyebrow tag */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Technology Agency · Est. 2025
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter font-['Outfit'] text-white leading-[1.0] mb-6"
        >
          We Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
            Intelligent
          </span>
          <br />
          Software.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10 text-gray-400 font-light"
        >
          Neoteche is a technology agency specialising in AI solutions, enterprise software, and
          automation systems — built to help businesses operate smarter and scale faster.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
          <button
            onClick={() => scrollTo("contact")}
            className="group px-8 py-4 bg-indigo-600 text-white font-bold rounded-full text-base shadow-xl shadow-indigo-500/25 hover:bg-indigo-500 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Start a Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="px-8 py-4 glass text-white font-bold rounded-full text-base hover:bg-white/10 transition-all border border-white/15 flex items-center justify-center gap-2"
          >
            See Our Services
          </button>
        </motion.div>

        {/* Capability badges */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {badges.map((badge, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border ${badge.bg} ${badge.color} text-xs font-semibold`}
            >
              <badge.icon size={13} />
              {badge.label}
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="w-full border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xs text-gray-600 font-medium">
            <span className="flex items-center gap-2">
              <MapPin size={13} className="text-indigo-500" />
              Based in India · Working Globally
            </span>
            <span className="hidden md:block w-px h-4 bg-white/10" />
            <a
              href="mailto:support@neoteche.tech"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
            >
              <Mail size={13} className="text-indigo-500" />
              support@neoteche.tech
            </a>
            <span className="hidden md:block w-px h-4 bg-white/10" />
            <a
              href="https://www.linkedin.com/company/neoteche/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
            >
              <Linkedin size={13} className="text-indigo-500" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] tracking-widest uppercase text-gray-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-indigo-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
