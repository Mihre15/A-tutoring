import React from "react";
import bg from "./assets/bg.jpg"
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-6 py-16"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black/40 p-8 rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-orange-500 mb-2">
          Professional Tutoring Company
        </h2>
        <p className="text-lg italic mb-8">
          Where Curiosity Turns into Confidence.
        </p>

        <h3 className="text-2xl mb-4">Are you a busy parent?</h3>

        <Link
          to="/form"
          className="bg-orange-500 text-white font-bold py-3 px-10 text-xl rounded-full hover:bg-orange-600 transition inline-block"
        >
          Get Tutor
        </Link>
      </div>
    </div>
  );
}
