import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import blogPosts from "../data/blogs.json";
import Navbar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link to="/" className="text-indigo-400 hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#020617] min-h-screen">
      <Navbar active="blog" />
      
      <main className="pt-32 pb-20 px-6">
        <article className="max-w-4xl mx-auto">
          {/* BACK BUTTON */}
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to blog</span>
          </motion.button>

          {/* HEADER */}
          <header className="mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 text-xs font-bold text-indigo-400 uppercase tracking-widest border border-indigo-500/20">
                {post.category}
              </span>
              <div className="h-px w-12 bg-white/10" />
              <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-tighter">
                 <Clock size={14} />
                 {post.readTime}
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold text-white font-['Outfit'] leading-tight mb-10"
            >
              {post.title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-between gap-8 py-8 border-y border-white/5"
            >
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/20">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{post.author}</p>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Lab Expert</p>
                  </div>
                </div>
                <div className="h-10 w-px bg-white/5 hidden sm:block" />
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={14} />
                  <span className="text-xs font-medium">{post.date}</span>
                </div>
              </div>

              <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/10">
                <Share2 size={18} />
              </button>
            </motion.div>
          </header>

          {/* CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert prose-indigo max-w-none"
          >
            <div className="text-gray-300 text-lg leading-relaxed font-light space-y-8 whitespace-pre-line">
              {post.content}
            </div>
          </motion.div>

          {/* FOOTER CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 p-12 rounded-[3rem] glass border border-white/5 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Want more insights?</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Subscribe to our newsletter to receive the latest tech deep-dives directly in your inbox.</p>
            <div className="flex max-w-md mx-auto p-1.5 rounded-full bg-white/5 border border-white/10 gap-2">
              <input type="email" placeholder="Email" className="bg-transparent border-none focus:ring-0 text-white px-6 w-full text-sm" />
              <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-full text-xs hover:bg-indigo-500 transition-all">Join</button>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
