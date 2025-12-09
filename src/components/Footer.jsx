import React from "react";
import Logo from "../assets/LogoOnly.png";
import Logo1 from "../assets/NameLogo.png";

export default function Footer({ dark }) {
  return (
    <footer
      className={`py-12 px-6 border-t ${dark ? "bg-gray-900 border-gray-800 text-gray-300" : "bg-white border-gray-200 text-gray-600"
        }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* BRAND */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <img src={Logo1} alt="Neoteche" className="h-8 w-auto opacity-90" />
          </div>
          <p className="text-sm opacity-60 ml-1">
            A New Wave in Technology
          </p>
        </div>

        {/* SOCIALS */}
        <div className="flex gap-8">
          <SocialLink href="https://linkedin.com/" icon="https://cdn-icons-png.flaticon.com/512/174/174857.png" label="LinkedIn" />
          <SocialLink href="https://discord.gg/" icon="https://cdn-icons-png.flaticon.com/512/5968/5968756.png" label="Discord" />
          <SocialLink href="mailto:contact@neoteche.in" icon="https://cdn-icons-png.flaticon.com/512/732/732200.png" label="Email" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200/10 text-center md:text-left flex flex-col md:flex-row justify-between text-sm opacity-50">
        <p>© {new Date().getFullYear()} Neoteche. All Rights Reserved.</p>
        <p>Built with ❤️ for the future.</p>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:opacity-100 opacity-70 transition group"
    >
      <img src={icon} alt={label} className="h-5 w-5 grayscale group-hover:grayscale-0 transition duration-300" />
      <span className="font-medium">{label}</span>
    </a>
  );
}
