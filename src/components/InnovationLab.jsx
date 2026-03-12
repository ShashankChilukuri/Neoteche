import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Beaker, Atom, Sparkles } from "lucide-react";

export default function InnovationLab() {
  const experiments = [
    {
      title: "Neural Synergy",
      category: "AI Research",
      desc: "Exploring new architectures for low-latency edge AI processing.",
      status: "Research Phase",
      icon: Atom
    },
    {
      title: "Quantum Flow",
      category: "Automation",
      desc: "Experimental prototype for non-linear workflow orchestration.",
      status: "Prototype",
      icon: Beaker
    },
    {
      title: "Vision Labs",
      category: "Computer Vision",
      desc: "Advanced real-time object detection for industrial automation.",
      status: "Testing",
      icon: Sparkles
    }
  ];

  return (
    <section id="lab" className="py-32 px-6 bg-[#020617] relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <FlaskConical className="text-indigo-500" size={32} />
            <span className="text-indigo-400 font-bold tracking-[0.3em] uppercase text-sm">Innovation Lab</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-['Outfit'] font-bold text-white"
          >
            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Future</span> is Built.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiments.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[2.5rem] group hover:border-indigo-500/30 transition-all border border-white/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/5 flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform">
                <exp.icon className="text-indigo-400" size={32} />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
                   <span className="text-indigo-500">{exp.category}</span>
                   <span className="text-gray-600">{exp.status}</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-['Outfit']">{exp.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{exp.desc}</p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-sm font-bold text-indigo-400 flex items-center gap-2">
                  Learn More <Atom size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 glass p-8 rounded-[2rem] border border-white/5 text-center flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-left">
            <h4 className="text-xl font-bold text-white mb-2">Have an experimental idea?</h4>
            <p className="text-gray-400 text-sm font-light">We love collaborating on cutting-edge prototypes and research projects.</p>
          </div>
          <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-indigo-400 hover:text-white transition-all whitespace-nowrap">
            Collaborate with Lab
          </button>
        </motion.div>
      </div>
    </section>
  );
}
