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

  // === Animation Variants ===
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 }, // delay between cards
    },
  };

  const fadeFromLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeFromRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-10"
          >
            <motion.p
              variants={fadeFromLeft}
              className="text-[#FE1A88] text-xl font-semibold font-carme-regular uppercase mb-3"
            >
              Why Choose Us
            </motion.p>

            <motion.h2
              variants={fadeFromRight}
              className="text-2xl md:text-4xl lg:text-5xl font-tasa-orbiter font-bold leading-snug"
            >
              We make your business <br /> look good.
            </motion.h2>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-[#1e1e1e]/70 rounded-lg p-6 text-center shadow-md flex flex-col justify-center min-h-[220px] hover:bg-[#222633]/80 transition-all duration-300 backdrop-blur-sm border border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* === VIDEO SECTION === */}
      <div className="w-full py-8 flex items-center justify-center bg-black relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ mixBlendMode: "screen" }}
        >
          
          
        </div>

        <div className=" w-full h-[300px] sm:h-[350px] md:h-[420px] lg:h-[500px] overflow-hidden border border-gray-700">
         <video
  src={ChooseV}
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
    </>
  );
};

export default WhyChooseUs;
