import React from "react";
import { Mail, Phone, Send } from "lucide-react"; 
import { Link } from "react-router-dom";
import { FaTelegramPlane, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left: Social Links */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex gap-4">
            <a
              href="https://t.me/Aplustutoringeth"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTelegramPlane size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@aplustutoring2025?_t=ZM-8vH5C8UJlMj&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaTiktok size={24} />
            </a>
             <a
              href="https://www.youtube.com/%40APlusTutoring-Ethio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition"
            >
              <FaYoutube size={24} />
            </a>
             <a
              href="https://web.facebook.com/share/p/167YpokHab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        {/* Middle: Contact Info */}
        <div className="text-center space-y-2">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <div className="flex justify-center items-center gap-2">
            <Mail className="w-5 h-5" />
            <p>aplustutoringet@gmail.com</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Phone className="w-5 h-5" />
            <p>+251905904444</p>
          </div>
        </div>

       
        <div className="flex flex-col items-center  space-y-2">
          
          <Link
            to="/form"
            className="bg-white text-blue-900 px-10 py-3 rounded-full font-medium hover:bg-blue-100 transition"
          >
            Get Tutor
          </Link>
        </div>
      </div>
      <div className="text-center text-gray-300 text-sm mt-6">
        © {new Date().getFullYear()} A+ Tutoring. All rights reserved.
      </div>
    </footer>
  );
}
