import React from "react";
import {useEffect } from "react"
import bg from "./assets/bg.jpg"
import { Link } from "react-router-dom"
import { Swiper ,SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import AOS from "aos"
import "aos/dist/aos.css"
export default function Home() {
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true,
  });
}, []);
  const tutors = [
    {
      name: "ayalech",
      subject: "Mathematics,, physics, chemistry",
      image: "https://via.placeholder.com/150",
      bio: "Experienced math tutor with 5+ years helping students ace their exams."
    },
    {
      name: "Sarah w/mariyam",
      subject: "English, spelling, applitude",
      image: "https://via.placeholder.com/150",
      bio: "Specialist in grammar and writing improvement for high school students."
    },
    {
      name: "Daniel esayas",
      subject: "Physics, math, chemistry",
      image: "https://via.placeholder.com/150",
      bio: "Passionate about making physics simple and fun through experiments."
    },
    {
      name: "Daniel esayas",
      subject: "Physics, math, chemistry",
      image: "https://via.placeholder.com/150",
      bio: "Passionate about making physics simple and fun through experiments."
    },
  ];

  const testimonials = [
    {
      name: "Emily R.",
      image: "https://via.placeholder.com/100",
      text: "A+ Tutoring really helped me improve my math grade. Highly recommended!"
    },
    {
      name: "Michael B.",
      image: "https://via.placeholder.com/100",
      text: "My tutor was patient and explained everything clearly. Great experience!"
    },
    {
      name: "Sophia T.",
      image: "https://via.placeholder.com/100",
      text: "They genuinely care about your progress. I felt supported all the way!"
    }
  ];
  return (
    <>
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-6 py-16"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black/40 p-8 rounded-2xl" data-aos="zoom out" data-aos-delay="300">
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
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-4xl font-bold mb-4 text-orange-500">What We Do</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            At <span className="font-semibold text-orange-600">A+ Tutoring</span>,
            we connect students with expert tutors who help them achieve academic
            excellence. Whether it's math, science, or languages, we provide
            personalized sessions tailored to each learner’s needs.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mb-16" data-aos="zoom in" data-aos-delay="300">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">
            What Our Students Say
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction:false }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            className="max-w-3xl mx-auto"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-orange-50 p-8 rounded-2xl shadow-md text-center">
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
        <div className="" data-aos="zoom in">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">
            Choose the Perfect Tutor for your child
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction:false,
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
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
      </section>
    </>
  );
}
