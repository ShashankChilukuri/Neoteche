import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-28 px-6 text-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-purple-600/30 to-blue-600/30 blur-[100px]" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10"
      >
        Ready to Transform Your Business?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto text-lg md:text-xl opacity-80 leading-relaxed mb-10 relative z-10"
      >
        Let’s build powerful Web & AI solutions that automate your workflow, boost productivity,
        and give your business a competitive edge.
      </motion.p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
        {/* Contact Us */}
        <a
          href="#contact"
          className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition"
        >
          Contact Us
        </a>

        {/* Get a Quote */}
        <a
          href="#contact"
          className="px-8 py-3 border border-indigo-600 text-indigo-600 text-lg font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
}
