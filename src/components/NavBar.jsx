import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, BookOpen, Send } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Fresh-Logo.png"
export default function NavBar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "why", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
  ];

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/#" + id);
      setMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== "/" ? "h-16 glass shadow-2xl" : "h-24 bg-transparent"
        }`}
    >
      <div className="w-full px-6 md:px-12 h-full flex justify-between items-center">
        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection("hero")}
        >
          <div className="w-10 h-10  flex items-center justify-center  group-hover:scale-110 transition-transform">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white font-['Outfit']">
              NEOTECHE
            </span>
            <span className="text-xs text-cyan-400 font-black tracking-tighter  font-['Outfit']">
              A    New Wave in Technology
            </span>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative py-2 px-1 text-sm font-medium transition-all duration-300 ${active === link.id
                ? "text-indigo-400"
                : "text-gray-400 hover:text-white"
                }`}
            >
              <span className="relative z-10 transition-colors">{link.label}</span>
              {active === link.id && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]"
                />
              )}
            </button>
          ))}

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="ml-4 px-6 py-2.5 rounded-full font-bold text-sm bg-indigo-600 text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Collab</span>
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors relative z-50"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#020617]/98 backdrop-blur-2xl flex flex-col pt-24 px-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-6xl font-black font-['Outfit'] text-left transition-colors tracking-tighter ${active === link.id ? "text-indigo-500" : "text-gray-800"
                    }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-8 py-4 rounded-2xl bg-indigo-600 text-white text-xl font-bold flex items-center justify-center gap-3"
              >
                <Send className="w-6 h-6" />
                <span>Contact</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
