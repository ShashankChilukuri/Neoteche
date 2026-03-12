import React from "react";
import { Rocket, Linkedin, Github as GithubIcon, Mail, Heart } from "lucide-react";
import logo from "../assets/Fresh-Logo.png"

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-[#01040f] border-t border-white/5 text-gray-400">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* BRAND */}
          <div className="col-span-1 md:col-span-2 space-y-6">

            <div className="flex items-center gap-3 group">
              <img
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                src={logo}
                alt="NEOTECHE logo"
              />

              <div className="flex flex-col leading-tight">
                <span className="text-xl font-black tracking-tight text-white font-['Outfit']">
                  NEOTECHE
                </span>

                <span className="text-xs text-cyan-400 tracking-wide font-['Outfit']">
                  A New Wave in Technology
                </span>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed font-light">
              Building intelligent technology solutions and experimental prototypes
              to solve real-world challenges for modern businesses.
            </p>
            <div className="flex gap-4 pt-4">
              <SocialIcon icon={Linkedin} href="https://linkedin.com/company/neoteche/" />
          
              <SocialIcon icon={Mail} href="mailto:contact@neoteche.tech" />
            </div>
          </div>

          {/* LINKS */}
          <div className="space-y-6">
            <h4 className="text-white font-bold font-['Outfit']">Company</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#why" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Our Work</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold font-['Outfit']">Resources</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#blog" className="hover:text-indigo-400 transition-colors">Tech Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Whitepapers</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Collaboration</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-widest uppercase text-gray-600">
          <p>© {new Date().getFullYear()} NEOTECHE LABS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-1">
            MADE WITH <Heart size={10} className="text-indigo-500" /> FOR THE FUTURE
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: IconComponent, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-500 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all"
    >
      <IconComponent size={18} />
    </a>
  );
}
