import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import math from "./assets/subjests/math.png";
import english from "./assets/subjests/eenglish.jpg";
import physics from "./assets/subjests/physics.jpg";
import Geography from "./assets/subjests/Geography.jpg";
import history from "./assets/subjests/history.jpg";
import IT from "./assets/subjests/IT.jpg";


export default function Services() {
    useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  const subjects = [
    { title: "Mathematics", img: math },
    { title: "English", img: english },
    { title: "Physics", img: physics },
    { title: "Geography", img: Geography },
    { title: "History", img: history },
    { title: "Information Technology", img: IT },
  ];


  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Our Tutoring Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          At <span className="font-semibold text-orange-600">A+ Tutoring</span>, we help students from Kindergarten to Grade 12
          achieve academic excellence in all subjects — with personalized lessons
          and national exam preparation.
        </p>
      </section>

      {/* Subjects Grid */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10" data-aos="fade-up">
          Subjects We Teach
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {subjects.map((subj, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={index*100}
            >
              <img
                src={subj.img}
                alt={subj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center bg-white">
                <h3 className="text-xl font-semibold text-orange-600">
                  {subj.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grade Levels */}
      <section className="bg-orange-50 py-16 px-6 md:px-16 text-center" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          We Tutor All Grade Levels
        </h2>
        <p className="max-w-2xl mx-auto text-lg">
          Whether your child is in Kindergarten or preparing for Grade 12,
          our experienced tutors adapt lessons to match each student’s
          curriculum and learning style.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {["KG", "Grade 1–4", "Grade 5–8", "Grade 9–12"].map((level, i) => (
            <div
              key={i}
              className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md"
            >
              {level}
            </div>
          ))}
        </div>
      </section>

      {/* National Exams */}
      <section className="py-16 px-6 md:px-16 text-center" data-aos="fade-left">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          National Exam Preparation
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-10">
          We provide intensive preparation for national exams, focusing on
          key subjects, practice tests, and study strategies to ensure success.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {["Grade 6 Exam", "Grade 8 Exam", "Grade 12 Exam"].map((exam, i) => (
            <div
              key={i}
              className="px-6 py-3 bg-orange-600 text-white rounded-full shadow-md"
            >
              {exam}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
