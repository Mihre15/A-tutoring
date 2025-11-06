import React from "react";
import { useEffect } from "react";
import  aplusbg from "./assets/aplusbg.jpg"
import hana from "./assets/tutors/hana.jpg"
import AOS from "aos"
import "aos/dist/aos.css"

export default function About() {
     useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true,
      });
    }, []);
  return (
    <div className="pt-24 pb-16 bg-white text-gray-800" >
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto px-6" data-aos="fade-down">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          About A+ Tutoring
        </h1>
        <p className="text-lg text-gray-600">
          Empowering students to learn, grow, and achieve excellence — one
          lesson at a time.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row items-center gap-10 px-6" data-aos="zoom-in">
        <img
          src={aplusbg}
          alt="About A+ Tutoring"
          className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
        />
        <div className="md:w-1/2" data-aos="fade-left">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3" >
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Founded by passionate educators, A+ Tutoring began with a simple
            goal: to make personalized, high-quality education accessible to
            every student. Today, we connect learners with expert tutors across
            mathematics, science, and language subjects, helping them reach
            their full potential.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto mt-20 px-6 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
          Our Mission & Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm" data-aos="fade-right">
            <h3 className="font-bold text-xl text-blue-700 mb-3">Mission</h3>
            <p>
              To inspire students through personalized, engaging, and effective
              tutoring that builds confidence and mastery.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl shadow-sm" data-aos="fade-left">
            <h3 className="font-bold text-xl text-orange-500 mb-3">Vision</h3>
            <p>
              To become a trusted learning partner that helps students unlock
              their potential and achieve academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-2xl font-semibold text-blue-700 text-center mb-8"
        data-aos="fade-down">
          Why Choose A+ Tutoring
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <li className="bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition" 
          data-aos="zoom-in" 
          >
            <h4 className="font-bold text-lg text-orange-500 mb-2">
              Expert Tutors
            </h4>
            <p>Qualified, experienced, and passionate educators.</p>
          </li>
          <li className="bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition" data-aos="zoom-in">
            <h4 className="font-bold text-lg text-orange-500 mb-2">
              Personalized Learning
            </h4>
            <p>Every lesson tailored to your goals and pace.</p>
          </li>
          <li className="bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition"
          data-aos="zoom-in"
          >
            <h4 className="font-bold text-lg text-orange-500 mb-2">
              Proven Success
            </h4>
            <p>Helping students achieve top results for 5+ years.</p>
          </li>
          <li className="bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition"
          data-aos="zoom-in">
            <h4 className="font-bold text-lg text-orange-500 mb-2">
              Supportive Environment
            </h4>
            <p>We focus on confidence, motivation, and growth.</p>
          </li>
        </ul>
      </section>

      {/* Meet the Team */}
      <section className="max-w-6xl mx-auto mt-20 px-6 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-blue-700 mb-8">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-64 bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <img
              src={hana}
              alt="Sahra"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="font-bold text-lg text-orange-500">Hana Sisay</h3>
            <p className="text-sm text-gray-600">Math, Physics, Chemistry</p>
            <p className="mt-2 text-sm text-gray-700">
              Law/ CMC/ GRADE 7 and 6
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-20">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Ready to start learning?
        </h3>
        <a
          href="/form"
          className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Get a Tutor Today
        </a>
      </section>
    </div>
  );
}
