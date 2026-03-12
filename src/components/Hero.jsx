import React from "react";
import { motion } from "framer-motion";
import { Cpu, Brain, Zap, Globe, Shield } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const focusAreas = [
    { name: "Artificial Intelligence", icon: Brain, color: "text-purple-400" },
    { name: "Software Engineering", icon: Cpu, color: "text-blue-400" },
    { name: "Automation Systems", icon: Zap, color: "text-amber-400" },
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 mt-10 overflow-hidden mesh-gradient"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 w-full flex flex-col items-center text-center px-4 md:px-12 lg:px-20"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-6 font-['Outfit'] text-white"
        >
          Solving Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">Problems</span> with AI.
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl max-w-3xl leading-relaxed mb-12 text-gray-400 font-light"
        >
          NEOTECHE is a technology innovation company focused on building intelligent solutions,
          experimental prototypes, and high-performance software for the next digital era.
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mb-20">
          <a
            href="#contact"
            className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-full text-lg shadow-xl shadow-indigo-500/30 hover:bg-indigo-500 transition-all hover:-translate-y-1 active:scale-95 text-center"
          >
            Get Started
          </a>
          <a
            href="#projects"
            className="px-8 py-4 glass text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all active:scale-95 text-center border border-white/20"
          >
            View Projects
          </a>
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 md:px-12 lg:px-20"
        >
          {focusAreas.map((area, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl glass flex items-center justify-center ${area.color}`}>
                <area.icon size={24} />
              </div>
              <span className="text-sm font-semibold text-gray-400 tracking-wide">{area.name}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50"
      >
        <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent" />
      </motion.div>
    </section>
  );
}
