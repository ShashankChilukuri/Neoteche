import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/LogoOnly.png";

export default function Hero({ dark }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className={`relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden transition-colors duration-500 ${dark ? "bg-slate-900" : "bg-white"
        }`}
    >
      {/* -------------------------------------------------- */}
      {/* ANIMATED BACKGROUND */}
      {/* -------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {dark ? (
          // Dark Mode Background
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.15),transparent_50%)]" />
            <motion.div
              animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full mix-blend-screen"
            />
            <motion.div
              animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/20 blur-[90px] rounded-full mix-blend-screen"
            />
          </>
        ) : (
          // Light Mode Background
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-white/50" />
            <motion.div
              animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-96 h-96 bg-indigo-300/30 blur-[100px] rounded-full mix-blend-multiply"
            />
            <motion.div
              animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300/30 blur-[90px] rounded-full mix-blend-multiply"
            />
          </>
        )}
      </div>

      {/* -------------------------------------------------- */}
      {/* CONTENT */}
      {/* -------------------------------------------------- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* LOGO With Glow */}
        <motion.div variants={itemVariants} className="relative mb-6 group">
          <div className={`absolute inset-0 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full ${dark ? "bg-indigo-500" : "bg-indigo-400"}`} />
          <img
            src={Logo}
            alt="Neoteche Logo"
            className="relative h-24 md:h-32 w-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* NEOTECHE TITLE */}
        <motion.h1
          variants={itemVariants}
          className={`text-6xl md:text-8xl font-black tracking-tight mb-2 font-['Outfit'] ${dark ? "text-white" : "text-slate-900"
            }`}
        >
          Neoteche
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          variants={itemVariants}
          className={`text-2xl md:text-4xl font-light mb-8 tracking-wide ${dark ? "text-indigo-300" : "text-indigo-600"
            }`}
        >
          New Wave in Technology
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          variants={itemVariants}
          className={`text-lg md:text-xl max-w-2xl leading-relaxed mb-10 ${dark ? "text-gray-300" : "text-gray-600"
            }`}
        >
          We build cutting-edge <span className={`${dark ? "text-white" : "text-gray-900"} font-semibold`}>Web & AI solutions</span> —
          powering automation, intelligence, and future-ready digital experiences for modern businesses.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-5 w-full md:w-auto">
          <a
            href="#contact"
            className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-full text-lg shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 hover:scale-105 transition active:scale-95 text-center"
          >
            Start Your Project
          </a>

          <a
            href="#contact"
            className={`px-8 py-4 backdrop-blur-md border font-bold rounded-full text-lg transition active:scale-95 text-center ${dark
              ? "bg-white/10 text-white border-white/20 hover:bg-white/20"
              : "bg-white/50 text-indigo-900 border-indigo-200 hover:bg-white"
              }`}
          >
            Get a Quote
          </a>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className={`text-sm font-medium uppercase tracking-widest ${dark ? "text-gray-400" : "text-gray-500"}`}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-12 bg-gradient-to-b from-indigo-500 to-transparent rounded-full"
        />
      </motion.div>

    </section>
  );
}
