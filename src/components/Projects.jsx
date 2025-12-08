import React from "react";
import { motion } from "framer-motion";

export default function Projects({ dark }) {
  const projects = [
    {
      icon: "📄",
      title: "RAG PDF QA System",
      desc: "Upload PDFs and ask questions using an AI RAG engine built with LangChain + FastAPI + ChromaDB.",
      tech: ["FastAPI", "LangChain", "React", "ChromaDB"],
    },
    {
      icon: "📊",
      title: "Automation Dashboard",
      desc: "A complete business automation suite for invoices, analytics, tasks, and performance insights.",
      tech: ["Node.js", "MongoDB", "React"],
    },
    {
      icon: "💬",
      title: "Feedback Analyzer",
      desc: "Real-time sentiment and opinion analysis tool using advanced transformer models.",
      tech: ["FastAPI", "Transformers", "React"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto text-center">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-12"
      >
        Our Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-2xl backdrop-blur-xl border shadow-xl hover:shadow-2xl hover:scale-[1.02] transition cursor-pointer ${
              dark ? "bg-gray-800/40 border-gray-700" : "bg-white/30 border-white/40"
            }`}
          >
            <div className="text-5xl mb-4">{proj.icon}</div>

            <h3 className="text-2xl font-semibold mb-3">{proj.title}</h3>

            <p className="opacity-80 text-lg leading-relaxed mb-4">
              {proj.desc}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {proj.tech.map((t, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-indigo-600/20 text-indigo-600 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
