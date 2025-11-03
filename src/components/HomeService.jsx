import React from "react";
import { motion } from "framer-motion";
import Film from "../assets/Film.webp";
import Vfx from "../assets/vfx.webp";
import Sound from "../assets/sound.webp";
import Digital from "../assets/digital.webp";
import Trailer from "../assets/Trailerr.webp";

const HomeService = () => {
  const services = [
    {
      id: 1,
      title: "Entire Film Editing",
      image: Film,
      description:
        "Precision editing and story structuring for films, documentaries, and OTT/web series.",
    },
    {
      id: 2,
      title: "VFX",
      image: Vfx,
      description:
        "Stunning VFX post production, CGI and compositing, motion graphics design, and title animation services that captivate audiences.",
    },
    {
      id: 3,
      title: "Sound Design & Final Mixing",
      image: Sound,
      description:
        "At LorinzaZenix, our sound design experts deliver immersive theater and digital audio experiences.",
    },
    {
      id: 4,
      title: "Trailer & Promo Editing",
      image: Trailer,
      description:
        "We craft engaging trailers and promos to create anticipation for films, music videos, and corporate videos.",
    },
    {
      id: 5,
      title: "Digital Film Branding & Promotion",
      image: Digital,
      description:
        "LorinzaZenix runs strategic digital campaigns to maximize your film’s reach.",
    },
  ];

  return (
    <div className="relative bg-transparent text-white md:py-20  md:px-16 overflow-hidden">
      {/* === SMOKY GRADIENT BACKGROUND === */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none will-change-transform"
        style={{ mixBlendMode: "screen" }}
      >
        {/* Left Glow */}
        <motion.div
          className="absolute rounded-full w-[220%] h-[140%] -left-[100%] -top-[40%] sm:w-[180%] sm:h-[150%] sm:-left-[30%] sm:-top-[10%]"
          style={{
            background:
              "radial-gradient(closest-side at 25% 30%, rgba(254,26,136,0.35) 0%, rgba(254,26,136,0.22) 25%, rgba(254,26,136,0.12) 45%, transparent 70%)",
            filter: "blur(100px) saturate(130%)",
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Right Glow */}
        <motion.div
          className="absolute rounded-full w-[220%] h-[160%] -right-[60%] -top-[40%] sm:w-[180%] sm:h-[150%] sm:-right-[20%] sm:-top-[30%]"
          style={{
            background:
              "radial-gradient(closest-side at 75% 60%, rgba(254,26,136,0.35) 0%, rgba(254,26,136,0.22) 25%, rgba(254,26,136,0.12) 45%, transparent 70%)",
            filter: "blur(100px) saturate(130%)",
          }}
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 20, -30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* === CONTENT LAYER === */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-[#FE1A88] text-2xl font-semibold font-carme-regular uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-tasa-orbiter font-bold leading-snug">
            Video is the future of <br /> communication
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 place-items-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col items-center text-center rounded-2xl px-4 transition-all duration-300 pb-10 bg-transparent "
            >
              <h1 className="text-2xl font-semibold mb-4">{service.title}</h1>

              {/* Image Section */}
              <div className="relative w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[300px] object-cover border border-gray-700 rounded-md"
                />

                {/* Decorative Gradient Pill */}
                <div className="absolute bottom-[-45px] left-1/2 transform -translate-x-1/2 bg-gradient-to-l from-fuchsia-700 to-pink-600 w-36 h-12 rounded-full shadow-lg"></div>
              </div>

              {/* Description Section */}
              <div className="flex flex-col items-center space-y-3 mt-16 px-4 sm:mt-12">
                <div className="h-[2px] w-[60%] bg-gradient-to-r from-pink-600 to-fuchsia-700 rounded-full"></div>
                <p className="text-gray-300 font-carme-regular text-lg max-w-md leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeService;
