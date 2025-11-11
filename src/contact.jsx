import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Mail,
  Phone,
  Send,      // Telegram
  Share2,    // Social Links title
  Youtube,   // YouTube
  Facebook,  // Facebook
} from "lucide-react"; 
import { FaTiktok } from "react-icons/fa"; // 👈 Imported TikTok icon
import contactBg from "./assets/bg.jpg";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value, // Use name attribute for generic handling
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // NOTE: Ensure your VITE_API_URL is correctly set up for this to work
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contact }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully! ✅");
        setContact({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message ❌");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-16 px-6"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg p-10 w-full max-w-4xl md:grid md:grid-cols-2 gap-8">
        
        {/* LEFT SIDE (Contact Info) */}
        <div data-aos="fade-right" className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions or need a tutor? Fill out the form and we’ll get back
            to you as soon as possible.
          </p>

          <div className="space-y-5 text-gray-700">
            
            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="text-orange-600 w-6 h-6" />
              <a
                href="mailto:aplustutoringet@gmail.com"
                className="font-semibold text-gray-800 hover:text-orange-600 transition"
              >
                aplustutoringet@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="text-orange-600 w-6 h-6" />
              <a
                href="tel:+251905904444"
                className="font-semibold text-gray-800 hover:text-orange-600 transition"
              >
                +251905904444
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3 mt-4">
              {/* Title with icon */}
              <div className="flex items-center gap-2">
                <Share2 className="text-orange-600 w-6 h-6" />
                <h3 className="text-gray-800 font-semibold text-lg">
                  Social Links
                </h3>
              </div>

              {/* ICONS CONTAINER */}
              <div className="flex items-center gap-4 ml-8">
                
                {/* 1. Telegram (Lucide) */}
                <div className="relative group">
                  <a
                    href="https://t.me/Aplustutoringeth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    <Send className="w-7 h-7" />
                  </a>
                  <span className="absolute left-1/2 -translate-x-1/2 -top-8 text-sm bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Telegram
                  </span>
                </div>
                
                {/* 2. YouTube (Lucide) */}
                <div className="relative group">
                  <a
                    href="YOUR_YOUTUBE_LINK" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-red-500 transition"
                  >
                    <Youtube className="w-7 h-7" />
                  </a>
                  <span className="absolute left-1/2 -translate-x-1/2 -top-8 text-sm bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    YouTube
                  </span>
                </div>
                
                {/* 3. Facebook (Lucide) */}
                <div className="relative group">
                  <a
                    href="YOUR_FACEBOOK_LINK" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    <Facebook className="w-7 h-7" />
                  </a>
                  <span className="absolute left-1/2 -translate-x-1/2 -top-8 text-sm bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Facebook
                  </span>
                </div>

                {/* 4. TIKTOK (React Icons) */}
                <div className="relative group">
                  <a
                    href="YOUR_TIKTOK_LINK" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-pink-400 transition"
                  >
                    <FaTiktok className="w-7 h-7" /> 
                  </a>
                  <span className="absolute left-1/2 -translate-x-1/2 -top-8 text-sm bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    TikTok
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <form
          onSubmit={handleSubmit}
          data-aos="fade-left"
          className="space-y-4 mt-8 md:mt-0"
        >
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name" // Added name attribute
              required
              placeholder="Your name"
              value={contact.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email" // Added name attribute
              required
              placeholder="Your email"
              value={contact.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Message
            </label>
            <textarea
              name="message" // Added name attribute
              required
              placeholder="Write your message..."
              rows="4"
              value={contact.message}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold w-full py-3 rounded-xl hover:bg-orange-600 transition"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-2 text-center text-gray-700 font-semibold">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}