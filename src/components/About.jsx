import React from "react";
import { motion } from "framer-motion";

export default function About({ dark }) {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  return (
    <section id="why" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="text-indigo-500 font-bold tracking-widest uppercase text-sm"
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-['Outfit'] font-bold mt-2 ${dark ? "text-white" : "text-gray-900"}`}
          >
            Why We Started
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"
          />
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: STORY */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className={`text-xl leading-relaxed ${dark ? "text-gray-300" : "text-gray-600"}`}>
              <strong className="text-indigo-500 block text-2xl mb-2">Purpose-Driven Innovation.</strong>
              Neoteche was founded with one clear purpose — helping businesses grow using modern technology.
            </p>
            <p className={`text-lg leading-relaxed ${dark ? "text-gray-400" : "text-gray-500"}`}>
              We believe innovation should be <span className="text-indigo-500 font-semibold">accessible</span>,
              <span className="text-purple-500 font-semibold"> affordable</span>, and built with engineering precision.
              We love transforming complex problems into simple, scalable, AI-powered digital experiences.
            </p>
          </motion.div>

          {/* RIGHT: MISSION & VISION CARDS */}
          <div className="space-y-6">

            {/* Mission Card */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants}
              className={`p-8 rounded-3xl border shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 ${dark ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"
                }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-indigo-500/20 transition-colors" />
              <h3 className={`text-2xl font-bold mb-3 flex items-center gap-3 ${dark ? "text-white" : "text-gray-900"}`}>
                <span className="text-3xl">🚀</span> Our Mission
              </h3>
              <p className={`${dark ? "text-gray-400" : "text-gray-600"}`}>
                To deliver high-quality, affordable, AI-powered and web-based digital solutions that help
                businesses unlock speed, scalability, and growth.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants}
              className={`p-8 rounded-3xl border shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 ${dark ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-100"
                }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-purple-500/20 transition-colors" />
              <h3 className={`text-2xl font-bold mb-3 flex items-center gap-3 ${dark ? "text-white" : "text-gray-900"}`}>
                <span className="text-3xl">👁️</span> Our Vision
              </h3>
              <p className={`${dark ? "text-gray-400" : "text-gray-600"}`}>
                To become a global innovation partner — building the next wave of Web & AI systems that turn
                ideas into future-ready digital experiences.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
