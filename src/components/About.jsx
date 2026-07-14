import React from "react";
import { motion } from "framer-motion";
import { Rocket, Handshake, BrainCircuit, Search, Hammer, BarChart3 } from "lucide-react";

const differentiators = [
  {
    icon: Rocket,
    title: "Rapid Delivery",
    desc: "We move fast without sacrificing quality. MVPs in 4–8 weeks, complex systems broken into sprint-based deliveries.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: BrainCircuit,
    title: "Deep Technical Expertise",
    desc: "From LLM fine-tuning to cloud-native architecture — our team works at the intersection of AI and enterprise engineering.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Handshake,
    title: "True Partnership",
    desc: "We treat your business goals as our own. Transparent communication, no jargon, and honest guidance at every step.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

const process = [
  {
    step: "01",
    icon: Search,
    title: "Discover",
    desc: "We start with a free consultation to deeply understand your business, goals, and technical requirements.",
  },
  {
    step: "02",
    icon: Hammer,
    title: "Build",
    desc: "Our engineers design, develop, and iterate — keeping you in the loop with regular demos and clear milestones.",
  },
  {
    step: "03",
    icon: BarChart3,
    title: "Launch & Scale",
    desc: "We deploy, monitor, and support your product — and scale the solution as your business grows.",
  },
];

export default function About() {
  return (
    <section id="why" className="relative py-32 px-6 overflow-hidden bg-[#020617]">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-indigo-500 font-bold tracking-widest uppercase text-sm">Why Neoteche</span>
            <h2 className="text-4xl md:text-6xl font-['Outfit'] font-bold text-white mt-4 leading-tight">
              The Agency Built for{" "}
              <span className="text-indigo-400">Complex Problems</span>.
            </h2>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed font-light">
              We are a focused team of software engineers, AI researchers, and product thinkers.
              We don't do generic solutions — we go deep on your problem and build technology that actually works in production.
            </p>
            <p className="mt-4 text-gray-500 text-base leading-relaxed font-light">
              Whether you're a startup racing to market or an enterprise modernising legacy systems,
              Neoteche brings the technical depth and execution speed that gets results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass p-7 rounded-2xl group border ${item.border} bg-white/[0.03] flex items-start gap-5 hover:bg-white/5 transition-all`}
              >
                <div className={`w-12 h-12 shrink-0 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="text-white font-bold font-['Outfit'] text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How We Work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border border-white/5 rounded-[2rem] p-10 md:p-14 bg-white/[0.02]"
        >
          <div className="text-center mb-12">
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm">Our Process</span>
            <h3 className="text-3xl md:text-4xl font-['Outfit'] font-bold text-white mt-3">How We Work</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 relative z-10">
                  <step.icon size={26} />
                </div>
                <span className="text-[10px] font-black text-indigo-500 tracking-widest uppercase mb-2">Step {step.step}</span>
                <h4 className="text-xl font-bold text-white font-['Outfit'] mb-3">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
