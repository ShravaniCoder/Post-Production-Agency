import React from "react";
import { motion } from "framer-motion";
import ChooseV from "../assets/video/chhose.mp4";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Industry Expertise",
      description:
        "A leading Marathi post production house and film restoration company in India.",
    },
    {
      title: "Creative Storytelling",
      description:
        "Our editors at LorinzaZenix enhance every frame with innovation and imagination.",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "We use ultra digital studio tools for premium-quality results.",
    },
    {
      title: "Client-Focused Approach",
      description:
        "Every LorinzaZenix project is tailored—from OTT/web series post production to TV commercials.",
    },
  ];

  return (
    <>
      {/* === MAIN SECTION === */}
      <section className="relative bg-black text-white md:py-20 py-5 px-4 md:px-24 overflow-hidden">
        {/* === SMOKY GRADIENT BACKGROUND === */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 pointer-events-none will-change-transform"
          style={{ mixBlendMode: "screen" }}
        >
          {/* Left Glow */}
          <motion.div
            className="absolute rounded-full w-[220%] h-[160%] -left-[70%] -top-[20%] sm:w-[180%] sm:h-[150%] sm:-left-[30%] sm:-top-[20%]"
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
        <div className="relative z-10 mx-auto text-center">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-[#FE1A88] text-xl font-semibold font-carme-regular uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-tasa-orbiter font-bold leading-snug">
              We make your business <br /> look good.
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1e1e1e]/70 rounded-lg p-6 text-center shadow-md flex flex-col justify-center min-h-[220px] hover:bg-[#222633]/80 transition-all duration-300 backdrop-blur-sm border border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === VIDEO SECTION === */}
      <div className="w-full py-8 flex items-center justify-center bg-black relative overflow-hidden">
        {/* Background Glow (subtle for video section) */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ mixBlendMode: "screen" }}
        >
          <motion.div
            className="absolute rounded-full w-[200%] h-[160%] -left-[50%] -top-[40%] sm:w-[180%] sm:h-[150%] sm:-left-[25%] sm:-top-[30%]"
            style={{
              background:
                "radial-gradient(closest-side at 50% 50%, rgba(254,26,136,0.25) 0%, rgba(254,26,136,0.15) 30%, transparent 70%)",
              filter: "blur(90px) saturate(120%)",
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 w-full h-[300px] sm:h-[350px] md:h-[420px] lg:h-[500px] overflow-hidden border border-gray-700">
          <video
            src={ChooseV}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
