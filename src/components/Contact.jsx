import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Clock, Send, User, MessageSquare, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "support@neoteche.tech",
    href: "mailto:support@neoteche.tech",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/company/neoteche",
    href: "https://www.linkedin.com/company/neoteche/",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India · Working Globally",
    href: null,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Neoteche,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:support@neoteche.tech?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-32 px-6 relative bg-[#020617] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4"
          >
            ✦ Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-['Outfit'] font-bold text-white mt-2"
          >
            Let's Work{" "}
            <span className="text-indigo-500">Together</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-gray-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Have a project in mind? We'd love to hear about it. Send us a message
            and we'll get back to you within 24 hours.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white font-['Outfit'] mb-2">
                Start the conversation
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Whether you have a detailed brief or just an idea, we're happy to talk.
                The first consultation is always free.
              </p>
            </div>

            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`glass p-5 rounded-2xl border ${info.border} bg-white/[0.02] flex items-center gap-4 group hover:bg-white/5 transition-all`}
              >
                <div className={`w-11 h-11 shrink-0 rounded-xl ${info.bg} border ${info.border} flex items-center justify-center ${info.color}`}>
                  <info.icon size={18} />
                </div>
                <div>
                  <p className="text-[11px] text-gray-600 uppercase tracking-widest font-bold mb-0.5">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`text-sm font-medium ${info.color} hover:opacity-80 transition-opacity`}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-300">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="mt-4 p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/15 flex items-center gap-3">
              <CheckCircle2 size={16} className="text-indigo-400 shrink-0" />
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="text-gray-300 font-medium">Free initial consultation.</span>{" "}
                We assess your project before any commitment is made.
              </p>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass border border-white/5 rounded-[2rem] p-8 md:p-10 bg-white/[0.02]"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                <div className="w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-bold text-white font-['Outfit']">Message Sent!</h4>
                <p className="text-gray-500 text-sm max-w-xs">
                  Your email client should have opened. We'll reply within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-xs text-indigo-400 hover:text-indigo-300 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Your Name</label>
                  <div className="relative">
                    <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Email Address</label>
                  <div className="relative">
                    <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Your Message</label>
                  <div className="relative">
                    <MessageSquare size={15} className="absolute left-4 top-4 text-gray-600" />
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-2 w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
                >
                  <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Send Message
                </button>

                <p className="text-center text-[11px] text-gray-600">
                  We respond within 24 hours · No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
