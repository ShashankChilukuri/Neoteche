import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, Heart, ArrowUpRight } from "lucide-react";
import logo from "../assets/Fresh-Logo.png";

const footerLinks = {
  Company: [
    { label: "Why Us", href: "/#why" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
    { label: "Privacy Policy", href: "/privacypolicy", isRoute: true },
  ],
  Services: [
    { label: "Custom Software", href: "/#services" },
    { label: "Intelligent Automation", href: "/#services" },
  ],
  Contact: [
    { label: "+91 62813 08416", href: "tel:+916281308416", external: true },
    { label: "support@neoteche.tech", href: "mailto:support@neoteche.tech", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/neoteche/", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="px-6 bg-[#01040f] text-gray-400">
      {/* Top gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="w-full px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img className="w-9 h-9 object-contain" src={logo} alt="NEOTECHE logo" />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-black tracking-tight text-white font-['Outfit']">NEOTECHE</span>
                <span className="text-xs text-cyan-400 tracking-wide font-['Outfit']">A New Wave in Technology</span>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed font-light">
              A technology agency specialising in intelligent software, custom development,
              and automation systems — built for businesses that want to move faster.
            </p>
            <div className="flex gap-3 pt-2">
              <SocialIcon icon={Phone} href="tel:+916281308416" />
              <SocialIcon icon={Mail} href="mailto:support@neoteche.tech" />
              <SocialIcon icon={Linkedin} href="https://www.linkedin.com/company/neoteche/" />
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="space-y-5">
              <h4 className="text-white font-bold font-['Outfit'] text-sm tracking-wide">{group}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-sm font-light hover:text-indigo-400 transition-colors flex items-center gap-1 group"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-sm font-light hover:text-indigo-400 transition-colors flex items-center gap-1 group"
                      >
                        {link.label}
                        {link.external && (
                          <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold tracking-widest uppercase text-gray-500">
          <p>© {new Date().getFullYear()} NEOTECHE. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacypolicy" className="hover:text-indigo-400 transition-colors">
              Privacy Policy
            </Link>
            <div className="flex items-center gap-1.5 text-gray-600">
              Made with <Heart size={10} className="text-indigo-500" /> for the Future
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: _icon, href: _href }) {
  const IconComponent = _icon;
  return (
    <a
      href={_href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-500 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all"
    >
      <IconComponent size={17} />
    </a>
  );
}
