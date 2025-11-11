import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import logo from "./assets/A+logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null); // ref for mobile menu

  const toggleMenu = () => setOpen(!open);

  // Handle scroll show/hide
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < 100 || currentScroll < lastScrollY) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm transition-transform duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } px-6 py-4 flex items-center justify-between shadow-md`}
    >
      {/* Logo */}
      <Link to={"/"}>
       <div className="flex items-center space-x-2">
        <img src={logo} alt="A+ Tutoring" className="w-20" />
        <div>
          <h1 className="font-bold text-xl text-blue-700">Tutoring</h1>
          <p className="text-xs text-gray-600">Learn, Grow, Achieve</p>
        </div>
      </div>
      </Link>
      

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-orange-500 font-semibold absolute left-1/2 transform -translate-x-1/2">
        <li><Link to="/home" className="hover:text-blue-700">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-700">About</Link></li>
        <li><Link to="/services" className="hover:text-blue-700">Services</Link></li>
        <li><Link to="/contact" className="hover:text-blue-700">Contact</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        {open ? (
          <X size={28} className="text-orange-500 cursor-pointer" onClick={toggleMenu} />
        ) : (
          <Menu size={28} className="text-orange-500 cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div
          ref={menuRef}
          className="absolute top-16 left-0 w-full bg-white/95 text-orange-500 font-semibold text-center space-y-4 py-4 shadow-lg md:hidden"
        >
          <li><Link to="/home" className="hover:text-blue-700" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-700" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/services" className="hover:text-blue-700" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/contact" className="hover:text-blue-700" onClick={toggleMenu}>Contact</Link></li>
        </div>
      )}
    </nav>
  );
}
