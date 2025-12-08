import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/LogoOnly.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-700 to-purple-700" />

      {/* Soft Glow Effects */}
      <div className="absolute w-[900px] h-[900px] bg-purple-500/30 blur-[180px] rounded-full -top-40 -left-40 animate-pulse" />
      <div className="absolute w-[700px] h-[700px] bg-indigo-500/30 blur-[160px] rounded-full -bottom-40 -right-20 animate-pulse delay-500" />

      {/* LOGO */}
      

      {/* MAIN TITLE */}
      <motion.div
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="flex items-center gap-4 z-10"
>
  {/* Logo */}
  <motion.img
    src={Logo}
    alt="Neoteche Logo"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    className="h-20 w-auto drop-shadow-xl"
  />

  {/* Brand Name */}
  <h1 className="text-white text-5xl md:text-7xl font-extrabold">
    Neoteche
  </h1>
</motion.div>


      {/* TAGLINE */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-white text-2xl md:text-3xl opacity-90 mb-4 z-10"
      >
        New Wave in Technology
      </motion.p>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-white max-w-2xl mx-auto text-lg md:text-xl opacity-85 leading-relaxed mb-10 z-10"
      >
        We build cutting-edge Web & AI solutions — powering automation,
        intelligence, and future-ready digital experiences for modern businesses.
      </motion.p>

      {/* CTA BUTTONS */}
      <div className="flex gap-4 z-10">
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full text-lg shadow-lg hover:bg-gray-200 transition"
        >
          Contact Us
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-indigo-700 transition"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
}
