import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Rocket } from "lucide-react";
import projectsData from "../data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="w-full px-4 md:px-12 lg:px-20">
        <div className="mb-20">
          <span className="text-indigo-400 font-bold tracking-[0.3em] uppercase text-sm">Our Work</span>
          <h2 className="text-4xl md:text-7xl font-['Outfit'] font-bold text-white mt-4">
            Recent <span className="text-indigo-500">Projects.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[2.5rem] group hover:border-indigo-500/30 transition-all border border-white/5 flex flex-col"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <Code2 size={24} />
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-white/5">
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 font-['Outfit']">{project.name}</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-indigo-500/5 text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>

              {/* <div className="flex gap-4 pt-8 border-t border-white/5">
                <button className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-indigo-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-2">
                  Details <ExternalLink size={14} />
                </button>
                <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                  <Github size={18} />
                </button>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
