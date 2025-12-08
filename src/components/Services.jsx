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

  // AI Models
  { name: "LLMs (GPT, Llama, Mistral)", icon: "🧠" },

  // Databases
  { name: "MongoDB", icon: "🍃" },
  { name: "SQL", icon: "🗄️" },
  { name: "ChromaDB", icon: "🗂️" }, // database-like icon

  // UI & Build Tools
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Mantine UI", icon: "🎯" },
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">

      {/* SERVICES HEADER */}
      <h2 className="text-4xl font-bold text-center mb-14">Our Services</h2>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {services.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-2xl backdrop-blur-xl border shadow-xl hover:shadow-2xl transition ${
              dark ? "bg-gray-800/40 border-gray-700" : "bg-white/20 border-white/30"
            }`}
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
            <p className="opacity-80">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* TECH STACK SECTION */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Tech Stack We Use
      </motion.h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        {techStack.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`p-6 rounded-xl border shadow-md hover:shadow-xl transition backdrop-blur-xl ${
              dark ? "bg-gray-800/40 border-gray-700" : "bg-white/20 border-white/30"
            }`}
          >
            <div className="text-4xl mb-2">{tech.icon}</div>
            <p className="font-semibold">{tech.name}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
