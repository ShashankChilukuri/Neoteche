import React from "react";
import Logo from "../assets/LogoOnly.png";
import Logo1 from "../assets/NameLogo.png";

export default function Footer({ dark }) {
  return (
    <footer
      className={`py-12 px-6 text-center transition ${
        dark ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Logo + Tagline */}
      <div className="flex flex-col items-center gap-3 mb-6">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
          <img src={Logo1} alt="Neoteche" className="h-10 w-auto" />
        </div>

        <p className="text-sm opacity-80">
          A New Wave in Technology
        </p>
      </div>

      {/* Social links with PNG icons */}
      <div className="flex justify-center gap-10 text-lg mb-6">

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="hover:opacity-80 transition flex items-center gap-2"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="h-6 w-6"
          />
          LinkedIn
        </a>

        {/* Discord */}
        <a
          href="https://discord.gg/yourserver"
          target="_blank"
          className="hover:opacity-80 transition flex items-center gap-2"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
            alt="Discord"
            className="h-6 w-6"
          />
          Discord
        </a>

        {/* Email */}
        <a
          href="mailto:contact@neoteche.in"
          className="hover:opacity-80 transition flex items-center gap-2"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email"
            className="h-6 w-6"
          />
          Email
        </a>

      </div>

      {/* Divider Line */}
      <div
        className={`w-24 h-1 rounded-full mx-auto ${
          dark ? "bg-indigo-600" : "bg-indigo-500"
        }`}
      ></div>

      {/* Bottom Text */}
      <p className="mt-6 text-sm opacity-70">
        © {new Date().getFullYear()} Neoteche — All Rights Reserved
      </p>
    </footer>
  );
}
