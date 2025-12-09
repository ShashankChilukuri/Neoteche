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
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="text-indigo-500 font-bold tracking-widest uppercase text-sm"
        >
          Work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-5xl font-['Outfit'] font-bold mt-2 ${dark ? "text-white" : "text-gray-900"}`}
        >
          Our Projects
        </motion.h2>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className={`flex flex-col p-8 rounded-3xl border shadow-lg transition-all duration-300 ${dark
                ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                : "bg-white border-gray-100 hover:border-indigo-100 hover:shadow-xl"
              }`}
          >
            <div className="text-6xl mb-6 bg-gradient-to-br from-indigo-100 to-white w-24 h-24 rounded-2xl flex items-center justify-center shadow-inner">
              {proj.icon}
            </div>

            <h3 className={`text-2xl font-bold mb-3 ${dark ? "text-white" : "text-gray-900"}`}>
              {proj.title}
            </h3>

            <p className={`text-lg leading-relaxed mb-8 flex-grow ${dark ? "text-gray-400" : "text-gray-500"}`}>
              {proj.desc}
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-dashed border-gray-700/20">
              {proj.tech.map((t, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md ${dark
                      ? "bg-gray-700 text-gray-300"
                      : "bg-indigo-50 text-indigo-600"
                    }`}
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
