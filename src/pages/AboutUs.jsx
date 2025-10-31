import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/AboutImg.jpg";
import MissionImg from "../assets/MissionImg.jpg";
import ValueImg from "../assets/ValueImg.jpg";
import ChooseImg from "../assets/ChooseImg.jpg";

const AboutUs = () => {
  return (
    <>
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
        <div className="relative w-[90%] sm:w-4/5 md:w-4/5 max-w-7xl bg-gradient-to-b from-black to-black border border-gray-200/30 rounded-lg p-6 sm:p-12 md:p-20 text-center shadow-lg z-10 overflow-hidden">
          
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
            About Us
          </h1>
<p className="text-gray-300 text-base sm:text-lg md:text-xl"> Video is the future of communication. </p>

        </div>
      </div>

       <div className="bg-black flex justify-center items-center gap-10 py-12 px-4 md:px-40">
      {/* Container */}
      <div className="relative max-w-5xl w-full">
        {/* Background Image Section */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-lg"
          style={{
            height: "420px",
            clipPath: "inset(0 round 20px 20px 20px)",
          }}
        >
          <img
            src={AboutImg}
            alt="About Us"
            className="w-full h-full object-cover"
          />

          {/* Top-left rounded overlay shape with text */}
          <div
            className="absolute top-[-15px] left-7 bg-black  flex justify-center items-center shadow-[0_0_20px_rgba(128,0,255,0.4)]"
            style={{
              height: "90px",
              width: "250px",
              borderTopLeftRadius: "40px",
              borderBottomRightRadius: "25px",
            transform: "translate(-25%, 0%)",
            }}
          >
<div className="relative rounded-2xl overflow-hidden">
  {/* Gradient Border Layer */}
  <div
    className="absolute inset-0 rounded-2xl pointer-events-none"
    style={{
      background: `
        linear-gradient(to right, rgba(128,0,255,1), rgba(255,0,255,0.8)) top / 100% 4px no-repeat,
        linear-gradient(to bottom, rgba(128,0,255,1), rgba(255,0,255,0.8)) left / 4px 100% no-repeat
      `,
      backgroundRepeat: "no-repeat",
      boxShadow: "0 0 20px rgba(128,0,255,0.5)", // glow effect
      zIndex: 1,
    }}
  ></div>

{/* Inner Content */}
<div className="relative rounded-2xl px-6 py-4 flex justify-center items-center bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a]">
  <p className="text-white font-semibold text-lg">About Us</p>
</div>

</div>




          </div>
        </div>
      </div>

      <div>
         <h2 className="text-4xl md:text-5xl my-5 text-white font-extrabold leading-tight">
          Who We Are & <br /> What Drives Us
        </h2>
        <p className="text-white">At LorinzaZenix, post production for films and OTT/web series is both an art and a science. We combine creativity, technical expertise, and mastery of motion graphics and VFX to transform raw footage into projects that truly stand out. Every production at LorinzaZenix reflects a deep passion for storytelling.</p>
      </div>
    </div>


       <div className="bg-black flex justify-center items-center gap-10 py-12 px-4 md:px-40">
      {/* Container */}
      <div className="relative max-w-5xl w-full">
        {/* Background Image Section */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-lg"
          style={{
            height: "420px",
            clipPath: "inset(0 round 20px 20px 20px)",
          }}
        >
          <img
            src={AboutImg}
            alt="About Us"
            className="w-full h-full object-cover"
          />

          {/* Top-left rounded overlay shape with text */}
          <div
            className="absolute top-[-15px] left-7 bg-black  flex justify-center items-center shadow-[0_0_20px_rgba(128,0,255,0.4)]"
            style={{
              height: "89px",
              width: "150px",
              borderTopLeftRadius: "40px",
              borderBottomRightRadius: "25px",
            transform: "translate(-25%, 0%)",
            }}
          >
<div className="relative rounded-2xl overflow-hidden">
  {/* Gradient Border Layer */}
  <div
    className="absolute inset-0 rounded-2xl pointer-events-none"
    style={{
      background: `
        linear-gradient(to right, rgba(128,0,255,1), rgba(255,0,255,0.8)) top / 100% 4px no-repeat,
        linear-gradient(to bottom, rgba(128,0,255,1), rgba(255,0,255,0.8)) left / 4px 100% no-repeat
      `,
      backgroundRepeat: "no-repeat",
      boxShadow: "0 0 20px rgba(128,0,255,0.5)", // glow effect
      zIndex: 1,
    }}
  ></div>

{/* Inner Content */}
<div className="relative rounded-2xl px-6 py-4 flex justify-center items-center bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a]">
  <p className="text-white font-semibold text-lg">About Us</p>
</div>

</div>




          </div>
        </div>
      </div>

      <div>
         <h2 className="text-4xl md:text-5xl my-5 text-white font-extrabold leading-tight">
          Who We Are & <br /> What Drives Us
        </h2>
        <p className="text-white">At LorinzaZenix, post production for films and OTT/web series is both an art and a science. We combine creativity, technical expertise, and mastery of motion graphics and VFX to transform raw footage into projects that truly stand out. Every production at LorinzaZenix reflects a deep passion for storytelling.</p>
      </div>
    </div>


       <div className="bg-black flex justify-center items-center gap-10 py-12 px-4 md:px-40">
      {/* Container */}
      <div className="relative max-w-5xl w-full">
        {/* Background Image Section */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-lg"
          style={{
            height: "420px",
            clipPath: "inset(0 round 20px 20px 20px)",
          }}
        >
          <img
            src={AboutImg}
            alt="About Us"
            className="w-full h-full object-cover"
          />

          {/* Top-left rounded overlay shape with text */}
          <div
            className="absolute top-[-15px] left-7 bg-black  flex justify-center items-center shadow-[0_0_20px_rgba(128,0,255,0.4)]"
            style={{
              height: "89px",
              width: "150px",
              borderTopLeftRadius: "40px",
              borderBottomRightRadius: "25px",
            transform: "translate(-25%, 0%)",
            }}
          >
<div className="relative rounded-2xl overflow-hidden">
  {/* Gradient Border Layer */}
  <div
    className="absolute inset-0 rounded-2xl pointer-events-none"
    style={{
      background: `
        linear-gradient(to right, rgba(128,0,255,1), rgba(255,0,255,0.8)) top / 100% 4px no-repeat,
        linear-gradient(to bottom, rgba(128,0,255,1), rgba(255,0,255,0.8)) left / 4px 100% no-repeat
      `,
      backgroundRepeat: "no-repeat",
      boxShadow: "0 0 20px rgba(128,0,255,0.5)", // glow effect
      zIndex: 1,
    }}
  ></div>

{/* Inner Content */}
<div className="relative rounded-2xl px-6 py-4 flex justify-center items-center bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a]">
  <p className="text-white font-semibold text-lg">About Us</p>
</div>

</div>




          </div>
        </div>
      </div>

      <div>
         <h2 className="text-4xl md:text-5xl my-5 text-white font-extrabold leading-tight">
          Who We Are & <br /> What Drives Us
        </h2>
        <p className="text-white">At LorinzaZenix, post production for films and OTT/web series is both an art and a science. We combine creativity, technical expertise, and mastery of motion graphics and VFX to transform raw footage into projects that truly stand out. Every production at LorinzaZenix reflects a deep passion for storytelling.</p>
      </div>
    </div>


       <div className="bg-black flex justify-center items-center gap-10 py-12 px-4 md:px-40">
      {/* Container */}
      <div className="relative max-w-5xl w-full">
        {/* Background Image Section */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-lg"
          style={{
            height: "420px",
            clipPath: "inset(0 round 20px 20px 20px)",
          }}
        >
          <img
            src={AboutImg}
            alt="About Us"
            className="w-full h-full object-cover"
          />

          {/* Top-left rounded overlay shape with text */}
          <div
            className="absolute top-[-15px] left-7 bg-black  flex justify-center items-center shadow-[0_0_20px_rgba(128,0,255,0.4)]"
            style={{
              height: "89px",
              width: "150px",
              borderTopLeftRadius: "40px",
              borderBottomRightRadius: "25px",
            transform: "translate(-25%, 0%)",
            }}
          >
<div className="relative rounded-2xl overflow-hidden">
  {/* Gradient Border Layer */}
  <div
    className="absolute inset-0 rounded-2xl pointer-events-none"
    style={{
      background: `
        linear-gradient(to right, rgba(128,0,255,1), rgba(255,0,255,0.8)) top / 100% 4px no-repeat,
        linear-gradient(to bottom, rgba(128,0,255,1), rgba(255,0,255,0.8)) left / 4px 100% no-repeat
      `,
      backgroundRepeat: "no-repeat",
      boxShadow: "0 0 20px rgba(128,0,255,0.5)", // glow effect
      zIndex: 1,
    }}
  ></div>

{/* Inner Content */}
<div className="relative rounded-2xl px-6 py-4 flex justify-center items-center bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a]">
  <p className="text-white font-semibold text-lg">About Us</p>
</div>

</div>




          </div>
        </div>
      </div>

      <div>
         <h2 className="text-4xl md:text-5xl my-5 text-white font-extrabold leading-tight">
          Who We Are & <br /> What Drives Us
        </h2>
        <p className="text-white">At LorinzaZenix, post production for films and OTT/web series is both an art and a science. We combine creativity, technical expertise, and mastery of motion graphics and VFX to transform raw footage into projects that truly stand out. Every production at LorinzaZenix reflects a deep passion for storytelling.</p>
      </div>
    </div>

    </>
  );
};

export default AboutUs;
