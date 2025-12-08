import React from "react";
import { motion } from "framer-motion";

export default function About({ dark }) {
  return (
    <section id="why" className="py-24 px-6 max-w-7xl mx-auto">

      {/* -------------------------------------------------- */}
      {/* WHY WE STARTED */}
      {/* -------------------------------------------------- */}
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Why We Started
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg md:text-xl opacity-80 leading-relaxed"
        >
          Neoteche was founded with one clear purpose — helping businesses grow
          using modern technology.  
          We believe innovation should be accessible, affordable, and built
          with engineering precision.  
          We love transforming complex problems into simple, scalable,
          AI-powered digital experiences.
        </motion.p>
      </div>

      {/* -------------------------------------------------- */}
      {/* MISSION + VISION */}
      {/* -------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`p-10 rounded-2xl backdrop-blur-xl border shadow-xl 
            ${dark ? "bg-gray-800/40 border-gray-700" : "bg-white/30 border-white/40"}`}
        >
          <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
          <p className="opacity-80 text-lg leading-relaxed">
            To deliver high-quality, affordable, AI-powered and web-based
            digital solutions that help businesses unlock
            speed, scalability, and growth through engineering and automation.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`p-10 rounded-2xl backdrop-blur-xl border shadow-xl 
            ${dark ? "bg-gray-800/40 border-gray-700" : "bg-white/30 border-white/40"}`}
        >
          <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
          <p className="opacity-80 text-lg leading-relaxed">
            To become a global innovation partner — building the next wave of
            Web & AI systems that turn ideas into intelligent,
            future-ready digital experiences for businesses around the world.
          </p>
        </motion.div>

      </div>


    </section>
  );
}
