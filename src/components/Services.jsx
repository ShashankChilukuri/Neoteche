import React from "react";
import { motion } from "framer-motion";
import { Code2, Workflow, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    icon: Code2,
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
    glow: "hover:shadow-blue-500/10",
    desc: "End-to-end enterprise software built to scale. We craft high-performance applications using modern stacks — React, Node.js, FastAPI, Go — delivering clean architecture and exceptional UX.",
    highlights: [
      "Full-stack web & desktop applications",
      "REST & GraphQL API design and integration",
      "Microservices & cloud-native architecture",
      "Performance optimization & code audits",
    ],
  },
  {
    title: "Intelligent Automation",
    icon: Workflow,
    color: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/10",
    glow: "hover:shadow-amber-500/10",
    desc: "Replace repetitive manual work with smart, self-correcting workflows. Our automation solutions cut operational overhead by up to 80%, freeing your team to focus on what matters.",
    highlights: [
      "Business process automation (BPA)",
      "AI-driven data pipelines & ETL workflows",
      "RPA integration with existing systems",
      "Real-time monitoring & alerting systems",
    ],
  },
];

export default function Services() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-32 px-6 relative bg-[#01040f] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4"
          >
            ✦ What We Build
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-['Outfit'] font-bold text-white mt-2"
          >
            Our Core{" "}
            <span className="text-indigo-500">Services</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We're focused and deliberate about what we offer. These are the two areas where
            we go deepest and deliver the most value.
          </motion.p>
        </div>

        {/* Services — two wide cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass p-10 rounded-[2rem] relative group overflow-hidden border ${service.border} bg-white/[0.03] backdrop-blur-sm transition-all duration-300 ${service.glow} hover:shadow-xl flex flex-col`}
            >
              {/* Watermark icon */}
              <div className="absolute -bottom-6 -right-6 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-300">
                <service.icon size={160} />
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${service.bg} border ${service.border} flex items-center justify-center mb-7 ${service.color} transition-transform duration-300 group-hover:scale-110`}>
                <service.icon size={28} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 font-['Outfit']">
                {service.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              {/* Highlights */}
              <ul className="space-y-3 border-t border-white/5 pt-7">
                {service.highlights.map((point, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-400">
                    <CheckCircle2 size={15} className={`shrink-0 ${service.color}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass border border-indigo-500/20 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <Sparkles size={22} />
            </div>
            <div>
              <h4 className="text-white font-bold font-['Outfit'] text-lg">
                Not sure what you need?
              </h4>
              <p className="text-gray-400 text-sm mt-0.5">
                Book a free discovery call — we'll scope your project and suggest the right approach.
              </p>
            </div>
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className="shrink-0 group px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2"
          >
            Book a Free Call
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
