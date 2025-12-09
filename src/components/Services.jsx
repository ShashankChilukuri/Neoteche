import React from "react";
import { motion } from "framer-motion";

export default function Services({ dark }) {
  const services = [
    {
      title: "Web Development",
      icon: "💻",
      desc: "Scalable web apps using React, Next.js & Node.js.",
    },
    {
      title: "AI Solutions",
      icon: "🤖",
      desc: "RAG chatbots, automation & ML tools.",
    },
    {
      title: "Business Automation",
      icon: "⚙️",
      desc: "Workflows, invoices, tasks, and analytics automation.",
    },
  ];

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟩" },
    { name: "FastAPI", icon: "⚡" },
    { name: "LangChain", icon: "🔗" },
    { name: "LLMs", icon: "🧠" },
    { name: "MongoDB", icon: "🍃" },
    { name: "SQL", icon: "🗄️" },
    { name: "ChromaDB", icon: "🗂️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Mantine UI", icon: "🎯" },
  ];

  return (
    <section id="services" className={`py-24 px-6 transition-colors duration-300 ${dark ? "" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="text-indigo-500 font-bold tracking-widest uppercase text-sm"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-5xl font-['Outfit'] font-bold mt-2 mb-6 ${dark ? "text-white" : "text-gray-900"}`}
          >
            Our Services
          </motion.h2>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl border shadow-lg transition-all duration-300 group ${dark
                ? "bg-gray-800/40 border-gray-700 hover:bg-gray-800"
                : "bg-white border-gray-100 hover:border-indigo-100 hover:shadow-indigo-500/10"
                }`}
            >
              <div className="text-5xl mb-6 bg-indigo-50 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${dark ? "text-white" : "text-gray-900"}`}>
                {card.title}
              </h3>
              <p className={`text-lg leading-relaxed ${dark ? "text-gray-400" : "text-gray-500"}`}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h3 className={`text-3xl font-bold ${dark ? "text-white" : "text-gray-900"}`}>
            Tech Stack We Use
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className={`px-6 py-4 rounded-xl border shadow-sm flex items-center gap-3 backdrop-blur-md cursor-default ${dark ? "bg-gray-800/60 border-gray-700 text-gray-200" : "bg-white border-gray-200 text-gray-700"
                }`}
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="font-semibold">{tech.name}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
