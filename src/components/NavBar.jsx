import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import Logo from "../assets/LogoOnly.png"; // ✅ Import your logo
import Logo1 from "../assets/NameLogo.png";
export default function Navbar({ dark, setDark, active }) {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "hero", label: "Home" },
    { id: "why", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition ${
  dark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
}`}

    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

       <div className="flex items-center gap-3 cursor-pointer">
      <img
        src={Logo}
        alt="Neoteche Logo"
        className="h-12 w-auto object-contain"   // Perfect navbar size
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <img
        src={Logo1}
        alt="Neoteche Name"
        className="h-12 w-auto object-contain"   // Perfect navbar size
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>

        {/* Desktop Menu */}
        <LayoutGroup>
          <div className="hidden md:flex items-center gap-8 text-lg relative">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative pb-1"
              >
                {link.label}

                {/* Smooth Underline */}
                {active === link.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 bottom-0 h-[3px] w-full bg-indigo-600 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </a>
            ))}

            {/* Dark Mode Button */}
            {/* <button
              onClick={() => setDark(!dark)}
              className="ml-4 text-2xl hover:scale-110 transition"
            >
              {dark ? "☀️" : "🌙"}
            </button> */}
          </div>
        </LayoutGroup>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden flex flex-col gap-4 px-6 pb-6 ${
            dark ? "bg-gray-900/90" : "bg-white/90"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`py-2 rounded-lg text-lg ${
                active === link.id ? "text-indigo-500 font-semibold" : ""
              }`}
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => setDark(!dark)}
            className="self-start text-2xl"
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
