import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact }),
      });

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
        
        {/* LEFT SIDE */}
        <div data-aos="fade-right" className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions or need a tutor? Fill out the form and we’ll get back to you as soon as possible.
          </p>
          <div className="space-y-3 text-gray-700">
            <p><span className="font-semibold text-orange-600">Email:</span> aplustutoringet@gmail.com</p>
            <p><span className="font-semibold text-orange-600">Phone:</span> +251905904444</p>
            <p><span className="font-semibold text-orange-600">Telegram:</span> https://t.me/Aplustutoringeth</p>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <form onSubmit={handleSubmit} data-aos="fade-left" className="space-y-4 mt-8 md:mt-0">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
            <input
              type="text"
              required
              placeholder="Your name"
              value={contact.name}
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="Your email"
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea
              required
              placeholder="Write your message..."
              rows="4"
              value={contact.message}
              onChange={(e) => setContact({ ...contact, message: e.target.value })}
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
            <p className="mt-2 text-center text-gray-700 font-semibold">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
}
