import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";

export default function About() {
  const features = [
    {
      title: "Our Mission",
      desc: "Build intelligent technology solutions that solve real-world problems and drive human progress.",
      icon: Target,
      color: "text-indigo-400"
    },
    {
      title: "Our Vision",
      desc: "Become a global innovation-driven tech company at the forefront of the AI revolution.",
      icon: Eye,
      color: "text-purple-400"
    },
    {
      title: "Our Values",
      desc: "Engineering excellence, transparent collaboration, and a relentless focus on solving complex challenges.",
      icon: ShieldCheck,
      color: "text-emerald-400"
    }
  ];

  return (
    <section id="why" className="relative py-32 px-6 overflow-hidden bg-[#020617]">
      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-indigo-500 font-bold tracking-widest uppercase text-sm">
                About Neoteche
              </span>
              <h2 className="text-4xl md:text-6xl font-['Outfit'] font-bold text-white mt-4">
                Innovating for a <span className="text-indigo-400">Better Future</span>.
              </h2>
            </div>
            
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              NEOTECHE is a technology innovation and solutions company. 
              We don't just build software; we build intelligence. Our focus is on 
              transforming complex real-world problems into elegant, automated, and 
              scalable digital solutions.
            </p>

            <div className="pt-6 border-t border-white/10">
              <p className="text-gray-500 italic">
                "We are currently building internal products and experimental technology 
                solutions, open to collaborations with startups and businesses."
              </p>
            </div>
          </motion.div>

          {/* GRID OF CARDS */}
          <div className="grid grid-cols-1 gap-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 rounded-3xl group border border-white/5 bg-white/5 backdrop-blur-sm"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon size={28} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white font-['Outfit']">{item.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
