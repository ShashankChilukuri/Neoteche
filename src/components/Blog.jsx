import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogs.json";

const categories = ["All", "AI & Technology", "Software Development", "Automation", "Startup Innovation"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="py-32 px-6">
      <div className="w-full px-4 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="w-full">
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm">
              Our Insights
            </span>
            <h2 className="text-4xl md:text-6xl font-['Outfit'] font-bold text-white mt-4">
              The <span className="text-indigo-500">Tech</span> Blog.
            </h2>
          </div>
          
          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/5 no-scrollbar overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass p-10 rounded-[2.5rem] group hover:bg-white/5 transition-colors border border-white/5 flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-600 text-[10px]">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 font-['Outfit'] group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-900/40 flex items-center justify-center text-[10px] font-bold text-indigo-400">
                      NT
                    </div>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-indigo-600 transition-colors"
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
