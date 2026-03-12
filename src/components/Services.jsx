import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Code2, Workflow, Globe2, Layers } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "AI Solutions",
      icon: BrainCircuit,
      desc: "Custom RAG systems, LLM fine-tuning, and intelligent agents tailored for business workflows.",
      color: "text-purple-400"
    },
    {
      title: "Custom Software",
      icon: Code2,
      desc: "High-performance enterprise software built with modern stacks (React, Node, FastApi/Go).",
      color: "text-blue-400"
    },
    {
      title: "Automation Systems",
      icon: Workflow,
      desc: "Streamlining operations through AI-driven automation, reducing manual overhead by up to 80%.",
      color: "text-amber-400"
    },
    {
      title: "Web Platforms",
      icon: Globe2,
      desc: "Scalable, secure, and futuristic web applications with world-class UX/UI design.",
      color: "text-indigo-400"
    },
    {
      title: "Startup MVP",
      icon: Layers,
      desc: "Rapid prototyping and development of MVPs to help startups validate and scale quickly.",
      color: "text-emerald-400"
    },
  ];

  return (
    <section id="services" className="py-32 px-6 relative bg-[#01040f]">
      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="text-indigo-400 font-bold tracking-widest uppercase text-sm"
          >
            Our Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-['Outfit'] font-bold text-white mt-4"
          >
            Future-Ready <span className="text-indigo-500">Solutions</span>.
          </motion.h2>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-10 rounded-[2.5rem] relative group overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <service.icon size={120} />
              </div>

              <div className={`w-16 h-16 rounded-2xl glass flex items-center justify-center mb-8 border border-white/10 ${service.color}`}>
                <service.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 font-['Outfit'] group-hover:text-indigo-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
