import React from 'react'
import BgVideo from '../assets/video/bgvideo.mp4';
import AboutV from "../assets/video/AboutVi.mp4";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  return (
    <>
      <section className="relative h-[65vh] md:h-[90vh] flex items-center justify-start overflow-hidden">
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
        <div className="absolute inset-0 "></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl px-8 md:px-16 text-white">
          <p className="text-[#FE1A88]  text-xl md:text-3xl font-pt-sans-regula font-semibold tracking-widest uppercase mb-4">
            Welcome to LorinzaZenix Post Production Agency
          </p>
          <h1 className="text-4xl font-pt-sans-regula md:text-6xl font-extrabold leading-tight mb-6">
            Bringing your <br /> ideas to life <br /> through motion
          </h1>
          <p className="text-base max-w-xl font-pt-sans-regula text-gray-200 mb-8">
            Our video production company understands the importance of capturing
            the perfect shot—ensuring the best results for both you and your
            valued clients.
          </p>
          <button className="bg-gradient-to-l font-carme-regular from-fuchsia-700 to-pink-600  hover:from-fuchsia-600 hover:to-pink-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </div>
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
      {/* === VISIBLE SMOKY GRADIENT (behind content, but bright enough) === */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none will-change-transform"
        style={{ mixBlendMode: "screen" }} // make colors pop on black
      >
{/* Layer A - big magenta cloud */}
{/* Background Glow - Left & Right (Same Magenta Tone) */}
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


      </div>

      {/* === Left Text (on top of smoke) === */}
      <div className="relative z-10 max-w-5xl px-6 md:px-12 lg:px-20 text-left">
        <p className="text-[#FE1A88] text-2xl font-semibold uppercase mb-3">
          About Us
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-5">
          Video production that’s <br className="hidden md:block" /> creative and affordable.
        </h1>

        <p className="text-gray-300 leading-relaxed text-base">
          At LorinzaZenix Post Production Agency, we transform ideas into cinematic masterpieces.
          Recognized as a top post production company in India and a trusted post production studio in Mumbai,
          LorinzaZenix combines creativity, cutting-edge technology, and storytelling expertise to deliver
          exceptional results.
        </p>
      </div>

      {/* === Right Video Section (above smoke) === */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full h-[300px] sm:h-[350px] md:h-[420px] lg:h-[460px] overflow-hidden border border-gray-700">
          <video
            src={AboutV}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.section>

      
    </>
  );
}

export default Hero;