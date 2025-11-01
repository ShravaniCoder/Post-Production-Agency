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
          {/* Dotted overlay */}
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
          <p className="text-gray-300 text-base sm:text-lg md:text-xl">
            Video is the future of communication.
          </p>
        </div>
      </div>

      {/* 👇 New section starts here */}
      <section className=" bg-black h-auto flex flex-col items-center justify-center">
        <div className=" bg-gradient-to-l my-10  from-fuchsia-700 to-pink-600 w-36 h-12 rounded-full shadow-lg"></div>

        <div>
          <h1 className="text-[#FE1A88] text-2xl font-semibold uppercase">
            Our Identity
          </h1>
          <div className="flex md:flex-row flex-col gap-10 items-center justify-center">
            <div>
              <img
                src={AboutImg}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
