import React from "react";
import BgVideo from "../assets/video/bgvideo.mp4";
import AboutV from "../assets/video/AboutVi.mp4";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
    const navigate = useNavigate();

    // Animation variants
  const textVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const textVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4, // delay between each text
      },
    },
  };

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  return (
    <>
      <section className="relative h-[87vh] md:h-[90vh] flex items-center = overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0"></div>

        {/* Content */}
         <motion.div
      className="relative z-10 md:max-w-6xl mt-22 md:mt-0 px-8 md:px-16 text-white"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* First text from left */}
      <motion.p
        variants={textVariantsLeft}
        className="text-[#FE1A88] text-lg md:text-3xl font-pt-sans-regula font-semibold tracking-widest uppercase my-4"
      >
        Welcome to LorinzaZenix Post Production Agency
      </motion.p>

      {/* Second text from right */}
      <motion.h1
        variants={textVariantsRight}
        className="text-3xl font-pt-sans-regula uppercase md:text-6xl font-extrabold leading-tight mb-4"
      >
        Bringing your <br /> ideas to life <br /> through motion
      </motion.h1>

      {/* Third text from left */}
      <motion.p
        variants={textVariantsLeft}
        className="text-base max-w-xl font-semibold font-pt-sans-regula text-gray-200 mb-4"
      >
       LorinzaZenix Post Production is committed to delivering excellence through expert editing, color grading, and visual effects ensuring every project meets the highest industry standards.
      </motion.p>

      {/* Button (optional fade-up animation) */}
       <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      onClick={() => navigate("/services")} // 👈 navigate to service page
      className="bg-gradient-to-l font-carme-regular from-fuchsia-700 to-pink-600 hover:from-fuchsia-600 hover:to-pink-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      Get Started
    </motion.button>
    </motion.div>
      </section>

    <motion.section
  ref={ref}
  initial="hidden"
  animate={controls}
  variants={{
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  }}
  className="relative bg-black text-white py-20 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden"
>
  {/* === SMOKY GRADIENT BACKGROUND === */}
  <div
    aria-hidden
    className="absolute inset-0 z-0 pointer-events-none will-change-transform"
    style={{ mixBlendMode: "screen" }}
  >
    {/* Left Glow */}
    <motion.div
      className="absolute rounded-full w-[220%] h-[150%] -left-[50%] -top-[30%] sm:w-[180%] sm:h-[150%] sm:-left-[30%] sm:-top-[10%]"
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
      className="absolute rounded-full w-[220%] h-[150%] -right-[60%] -top-[30%] sm:w-[150%] sm:h-[150%] sm:-right-[20%] sm:-top-[30%]"
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

  {/* === Left Text === */}
  <motion.div
      className="relative z-10 max-w-5xl px-6 md:px-12 lg:px-20 text-left"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // triggers when in view
    >
      {/* First text from left */}
      <motion.p
        variants={textVariantsLeft}
        className="text-[#FE1A88] text-2xl font-semibold uppercase mb-3"
      >
        About Us
      </motion.p>

      {/* Second text from right */}
      <motion.h1
        variants={textVariantsRight}
        className="text-xl md:text-4xl lg:text-5xl font-bold leading-snug mb-5"
      >
        Crafting cinematic experiences that's <br className="hidden md:block" /> inspire and engage
      </motion.h1>

      {/* Third text from left */}
      <motion.p
        variants={textVariantsLeft}
        className="text-gray-300 leading-relaxed text-base"
      >
        At LorinzaZenix Post Production Agency, we transform ideas into cinematic
        masterpieces. Recognized as a top post production company in India and a
        trusted post production studio in Mumbai, LorinzaZenix combines creativity,
        cutting-edge technology, and storytelling expertise to deliver exceptional
        results.
      </motion.p>
    </motion.div>

  {/* === Right Video Section === */}
  <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center">
    <div className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[460px] overflow-hidden border border-gray-700">
     <video
  src={AboutV}
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="w-full h-full object-cover"
  webkit-playsinline="true"
  x5-playsinline="true"
  x-webkit-airplay="allow"
  x5-video-player-type="h5"
  x5-video-player-fullscreen="false"
  x5-video-orientation="portraint"
/>

    </div>
  </div>
</motion.section>

    </>
  );
};

export default Hero;
