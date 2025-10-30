import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react
import logo from "./assets/A+logo.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="relative z-50 bg-white/80 backdrop-blur-sm px-6 py-4 flex items-center justify-between">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="A+ Tutoring" className="w-20" />
        <div>
          <h1 className="font-bold text-xl text-blue-700">Tutoring</h1>
          <p className="text-xs text-gray-600">Learn, Grow, Achieve</p>
        </div>
      </div>

      {/* Center Section: Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-orange-500 font-semibold absolute left-1/2 transform -translate-x-1/2">
        <li><a href="#home" className="hover:text-blue-700">Home</a></li>
        <li><a href="#about" className="hover:text-blue-700">About</a></li>
        <li><a href="#services" className="hover:text-blue-700">Services</a></li>
        <li><a href="#contact" className="hover:text-blue-700">Contact</a></li>
      </ul>

      {/* Right Section: Mobile Menu Icon */}
      <div className="md:hidden">
        {open ? (
          <X size={28} className="text-orange-500 cursor-pointer" onClick={toggleMenu} />
        ) : (
          <Menu size={28} className="text-orange-500 cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white/95 text-orange-500 font-semibold text-center space-y-4 py-4 shadow-lg md:hidden">
          <a href="#home" className="block hover:text-blue-700" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block hover:text-blue-700" onClick={toggleMenu}>About</a>
          <a href="#contact" className="block hover:text-blue-700" onClick={toggleMenu}>Contact</a>
          <a href="#services" className="block hover:text-blue-700" onClick={toggleMenu}>Services</a>
        </div>
      )}
    </nav>
  );
}
