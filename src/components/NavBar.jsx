import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/LogoOnly.png";
import Logo1 from "../assets/NameLogo.png";

export default function NavBar({ dark, setDark, active }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "why", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-800 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <img src={Logo} alt="Logo" className="h-10 w-auto object-contain" />
          <img
            src={Logo1}
            alt="Neoteche Name"
            className="h-8 md:h-10 w-auto object-contain hidden sm:block"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative font-medium text-base transition-colors duration-300 ${active === link.id
                ? "text-indigo-400"
                : "text-gray-300 hover:text-white"
                }`}
            >
              {link.label}
              {active === link.id && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-400 rounded-full"
                />
              )}
            </button>
          ))}

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2 rounded-full font-medium transition shadow-lg bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-500/25"
          >
            Contact Us
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full transition bg-gray-800 text-yellow-400 hover:bg-gray-700"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full transition bg-gray-800 text-yellow-400"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl text-white"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-6 pb-6 overflow-hidden bg-gray-900 border-b border-gray-800"
          >
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left text-lg font-medium py-2 border-b border-dashed ${active === link.id
                    ? "text-indigo-400 border-indigo-400/30"
                    : "text-gray-300 border-gray-700"
                    }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-3 mt-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
