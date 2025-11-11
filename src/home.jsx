import React, { useEffect } from "react";
import bg from "./assets/bg.jpg";
import eyuel from "./assets/tutors/eyuel.jpg";
import mujib from "./assets/tutors/mujib.jpg";
import hana from "./assets/tutors/hana.jpg";
import zinet from "./assets/tutors/zinet.jpg";
import habtamu from "./assets/tutors/habtamu.jpg";
import mahilet from "./assets/tutors/mahilet.jpg";
import profile from "./assets/tutors/profile.jpeg";
import sisaynesh from "./assets/tutors/sisaynesh.jpg";
import cambrig from "./assets/schoolLogo/cambrig.jpg"; // <-- Add your school logos
import gebre from "./assets/schoolLogo/gebre.jpg";
import schooltmro from "./assets/schoolLogo/schooltmro.jpg";
import gibson from "./assets/schoolLogo/gibson.jpg";


import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const tutors = [
    {
      name: "Eyuel Zenebe",
      subject: "Subjects: All",
      image: eyuel,
      bio: "Process Engineer, GPA:3.53, Address:Tuludimtu",
    },
    {
      name: "Hana Sisay",
      subject: "Subjects: All",
      image: hana,
      bio: "Law, GPA:3.53, Address:CMC,  GRADE 7 and 6",
    },
    {
      name: "Mujib Sultan",
      subject: "Subjects: All",
      image: mujib,
      bio: "Biomedical Engineer 4/612/3.5 Mexico/grade 5&6 ",
    },
    {
      name: "Zinet Kedir",
      subject: "Subjects: All",
      image: zinet,
      bio: "4/597/3.29 pharmacy /Megenagna /grade 8",
    },
    {
      name: "Habtamu Belete",
      subject: "Subjects: All",
      image: habtamu,
      bio: "510/3.54 Chemistry/ Grade 9 /Teacher Lebu musika bet",
    },
    {
      name: "Mahilet Zelalem ",
      subject: "Subjects: All",
      image: mahilet,
      bio: "4/554/3.3 ayat 49/Economics /Cambridge International grade 1 and 3",
    },
    {
      name: "Doctor Sisaynesh Tarkegn ",
      subject: "Subjects: All",
      image: sisaynesh,
      bio: "4/456/3.86 Gerji /grade 3",
    },
  ];

  const testimonials = [
    {
      name: "Emily R.",
      image: profile,
      text: "A+ Tutoring really helped me improve my math grade. Highly recommended!",
    },
    {
      name: "Michael B.",
      image: profile,
      text: "My tutor was patient and explained everything clearly. Great experience!",
    },
    {
      name: "Sophia T.",
      image: profile,
      text: "They genuinely care about your progress. I felt supported all the way!",
    },
  ];

  const schools = [cambrig, gibson,schooltmro ,gebre ]; // Add more if needed

  return (
    <>
      {/* Hero Section */}
      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-6 py-16"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className="bg-black/40 p-8 rounded-2xl"
          data-aos="zoom-out"
          data-aos-delay="300"
        >
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

      {/* ===== ABOUT SECTION ===== */}
      <section className="bg-white text-gray-800 py-20 px-6 md:px-16">
        {/* What We Do */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-4xl font-bold mb-4 text-orange-500">What We Do</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            At{" "}
            <span className="font-semibold text-orange-600">A+ Tutoring</span>,
            we connect students with expert tutors who help them achieve academic
            excellence. Whether it's math, science, or languages, we provide
            personalized sessions tailored to each learner’s needs.
          </p>
        </div>

        {/* Mission & Vision */}
        <section
          className="max-w-6xl mx-auto mt-20 px-6 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-blue-50 p-6 rounded-xl shadow-sm"
              data-aos="fade-right"
            >
              <h3 className="font-bold text-xl text-blue-700 mb-3">Mission</h3>
              <p>
                To inspire students through personalized, engaging, and effective
                tutoring that builds confidence and mastery.
              </p>
            </div>
            <div
              className="bg-orange-50 p-6 rounded-xl shadow-sm"
              data-aos="fade-left"
            >
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
          <h2
            className="text-2xl font-semibold text-blue-700 text-center mb-8"
            data-aos="fade-down"
          >
            Why Choose A+ Tutoring
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <li
              className="bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition"
              data-aos="zoom-in"
            >
              <h4 className="font-bold text-lg text-orange-500 mb-2">
                Expert Tutors
              </h4>
              <p>Qualified, experienced, and passionate educators.</p>
            </li>
            <li
              className="bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition"
              data-aos="zoom-in"
            >
              <h4 className="font-bold text-lg text-orange-500 mb-2">
                Personalized Learning
              </h4>
              <p>Every lesson tailored to your goals and pace.</p>
            </li>
            <li
              className="bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition"
              data-aos="zoom-in"
            >
              <h4 className="font-bold text-lg text-orange-500 mb-2">
                Proven Success
              </h4>
              <p>Helping students achieve top results for 5+ years.</p>
            </li>
            <li
              className="bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition"
              data-aos="zoom-in"
            >
              <h4 className="font-bold text-lg text-orange-500 mb-2">
                Supportive Environment
              </h4>
              <p>We focus on confidence, motivation, and growth.</p>
            </li>
          </ul>
        </section>

        {/* Testimonials */}
        <div className="mb-16 mt-20" data-aos="zoom-in" data-aos-delay="300">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">
            What Our Students Say
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            className="max-w-3xl mx-auto"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className=" bg-black/5 p-8 rounded-2xl shadow-md text-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                  />
                  <p className="italic mb-2">"{t.text}"</p>
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tutors */}
        <div className="" data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">
            Choose the Perfect Tutor for your child
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {tutors.map((tutor, index) => (
              <SwiperSlide key={index}>
                <div className="bg-orange-50 p-6 rounded-2xl shadow-md text-center">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-orange-700">
                    {tutor.name}
                  </h3>
                  <p className="text-gray-600">{tutor.subject}</p>
                  <p className="text-sm mt-2 text-gray-500">{tutor.bio}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* School Logos */}
        <section
          className="mt-20 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-bold text-orange-500 mb-8">
            Partner Schools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {schools.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`School ${index + 1}`}
                className="w-32 h-32 object-contain hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
