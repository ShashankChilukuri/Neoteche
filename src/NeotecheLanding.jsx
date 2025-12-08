import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Why from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function NeotecheLanding() {
  const [dark, setDark] = useState(false);
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
    <div
      className={`${
        dark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      } min-h-screen transition`}
    >
      <Navbar dark={dark} setDark={setDark} active={active} />
      <Hero />
      <Why dark={dark} />
      <Services dark={dark} />
      <Projects dark={dark} />
      <Contact />
      <Footer />
    </div>
  );
}
