import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden ring-1 ring-white/10 shadow-2xl"
      >
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -ml-20 -mt-20"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400 opacity-20 rounded-full blur-[100px] -mr-20 -mb-20"></div>

        <h2 className="text-4xl md:text-6xl font-['Outfit'] font-bold text-white mb-6 relative z-10 leading-tight">
          Let’s Build Something Great
        </h2>
        <p className="text-lg md:text-2xl text-indigo-100 mb-10 max-w-2xl mx-auto relative z-10 font-light leading-relaxed">
          Reach out to build a product or automate your business. We are ready to help.
        </p>

        <button
          onClick={() => window.location.href = 'mailto:contact@neoteche.in'}
          className="relative z-10 px-10 py-5 bg-white text-indigo-900 font-bold rounded-full text-xl hover:scale-105 hover:shadow-xl transition duration-300 shadow-lg"
        >
          Email Us
        </button>
      </motion.div>
    </section>
  );
}
