import React, { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaBullhorn,
  FaPenNib,
  FaChessKing,
  FaEnvelope,
  FaPalette,
} from "react-icons/fa";
import Contact from "./Contact";

// Text animation variants
const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const services = [
  {
    icon: <FaBullhorn className="text-4xl text-[#FE1A88]" />,
    title: "Entire Film Editing",
    desc: "The team at LorinzaZenix expertly structures, refines, and grades films, documentaries, and OTT/web series.",
  },
  {
    icon: <FaPenNib className="text-4xl text-[#FE1A88]" />,
    title: "VFX & CGI Studio Work",
    desc: "High-quality VFX post production, CGI, compositing, motion graphics, and title animations crafted at LorinzaZenix.",
  },
  {
    icon: <FaChessKing className="text-4xl text-[#FE1A88]" />,
    title: "Sound Design & Final Mixing",
    desc: "We design immersive sound experiences for theaters, music videos, and corporate films.",
  },
  {
    icon: <FaEnvelope className="text-4xl text-[#FE1A88]" />,
    title: "Trailer & Promo Editing",
    desc: "LorinzaZenix crafts captivating trailers and promos that generate buzz and excitement.",
  },
  {
    icon: <FaPalette className="text-4xl text-[#FE1A88]" />,
    title: "Digital Film Branding & Promotion",
    desc: "At LorinzaZenix, our team builds strategic campaigns for maximum audience reach.",
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Header Section */}
      <div className="flex justify-center items-center mt-20 md:h-[50vh] h-[30vh] bg-black relative overflow-hidden">
        {/* Animated Blurred Gradient Backgrounds */}
        <motion.div
          className="absolute w-[180%] h-[150%] -left-[20%] -top-[30%] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side at 25% 30%, rgba(254,26,136,0.28) 0%, rgba(254,26,136,0.20) 20%, rgba(254,26,136,0.10) 45%, transparent 70%)",
            filter: "blur(120px) saturate(120%)",
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-[180%] h-[150%] -right-[20%] -top-[30%] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side at 75% 60%, rgba(254,26,136,0.28) 0%, rgba(254,26,136,0.20) 20%, rgba(254,26,136,0.10) 45%, transparent 70%)",
            filter: "blur(120px) saturate(120%)",
          }}
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 20, -30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glass Card */}
        <div className="relative w-[90%] sm:w-4/5 md:w-4/5 max-w-7xl bg-gradient-to-b from-black mt-2 to-black border border-gray-200/30 rounded-lg p-6 sm:p-12 md:p-20 text-center shadow-lg z-10 overflow-hidden">
          {/* Dotted overlay (3 vertical columns, moved upward) */}
          <div className="absolute left-4 sm:left-12 md:left-8 top-[43%] -translate-y-1/2 flex space-x-3 sm:space-x-4 md:space-x-5 opacity-40">
            {[0, 1, 2].map((col) => (
              <div
                key={col}
                className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5"
              >
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-1.5 md:h-1.5 bg-gray-200 rounded-full"
                  ></div>
                ))}
              </div>
            ))}
          </div>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mt-6 mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl">
            The best way to communicate is through video.{" "}
          </p>
        </div>
      </div>

<section className="relative bg-gradient-to-b from-black via-[#0b0005] to-black border-black py-7 text-white md:py-20 px-5 overflow-hidden">
  {/* 🔹 Subtle pink glow in background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(254,26,136,0.08),transparent_70%)] pointer-events-none"></div>

  <div className="max-w-7xl mx-auto text-center relative z-10">
    {/* Heading */}
    <div className="flex items-center justify-center gap-2 mb-4">
      <div className="relative w-4 h-4 flex items-center justify-center">
        <div className="absolute w-4 h-4 rounded-full border-2 border-[#FE1A88] animate-pulse shadow-[0_0_8px_2px_rgba(168,85,247,0.7)]"></div>
        <div className="w-2 h-2 bg-[#FE1A88] rounded-full"></div>
      </div>
      <p className="text-[#FE1A88] text-xl font-medium">Our Core Services</p>
    </div>

    <h2 className="text-2xl sm:text-5xl font-bold text-gray-100 leading-tight">
      Digital Solutions That Drive <br />
      <span className="text-gray-300">Real Results</span>
    </h2>

    {/* Cards */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-[#121212]/90 border border-gray-800 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
        >
          {/* Icon + Title */}
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-24 h-24 flex items-center justify-center rounded-2xl">
              {/* Pink gradient border layer */}
              <div className="relative w-24 h-24 flex items-center justify-center rounded-2xl border-[7px] border-black p-[2px] bg-black">
                {/* Inner pink gradient ring */}
                <div
                  className="w-full h-full rounded-2xl 
                    bg-gradient-to-tl from-[#FE1A88] via-[#b946f7] to-[#FE1A88]
                    p-[0.5px]"
                >
                  {/* Main black gradient container */}
                  <div
                    className="w-full h-full rounded-2xl 
                      bg-gradient-to-b from-[#2a2a2a] via-[#141414] to-[#000000]
                      flex items-center justify-center
                      shadow-[inset_2px_2px_6px_rgba(255,255,255,0.06),
                      inset_-2px_-2px_10px_rgba(0,0,0,0.9),
                      0_0_15px_4px_rgba(168,85,247,0.4)]"
                  >
                    <div className="text-10xl text-[#FE1A88]">{service.icon}</div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-left">{service.title}</h3>
          </div>

          {/* View Details Button */}
          <button
            onClick={() => handleToggle(index)}
            className="flex items-center justify-between bg-black text-white px-5 py-3 rounded-full hover:bg-[#111] transition-all"
          >
            <span>
              {openIndex === index ? "Hide Details" : "View Details"}
            </span>

            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full bg-[#FE1A88] transition-transform duration-300 ${
                openIndex === index ? "rotate-90" : ""
              }`}
            >
              <FaArrowRight className="text-white" />
            </div>
          </button>

          {/* Animated Description */}
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                key="desc"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="mt-4 bg-[#1a1a1a] p-4 rounded-xl border border-gray-700 text-left"
              >
                <motion.div
                  variants={textContainer}
                  initial="hidden"
                  animate="show"
                  className="flex flex-wrap text-gray-300 text-sm leading-relaxed"
                >
                  {service.desc.split(" ").map((word, i) => (
                    <motion.span
                      variants={textItem}
                      key={i}
                      className="mr-1 inline-block"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  </div>
</section>

      <Contact />
    </>
  );
};

export default Services;
