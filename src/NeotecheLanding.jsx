import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function NeotecheLanding() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      const top = window.scrollY;
      sections.forEach((sec) => {
        if (top >= sec.offsetTop - 300) {
          setActive(sec.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#020617] text-gray-100 min-h-screen selection:bg-indigo-500/30">
      <Navbar active={active} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
