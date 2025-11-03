import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/AboutImg .webp";
import MissionImg from "../assets/MissionImg.webp";
import ValueImg from "../assets/ValueImg.webp";
import ChooseImg from "../assets/ChooseImg.webp";
import Contact from "../components/Contact";

const AboutUs = () => {
  return (
    <>
      {/* 🔹 Top Section */}
      <div className="flex justify-center items-center mt-20 md:h-[50vh] h-[30vh] relative overflow-hidden bg-gradient-to-b from-black via-[#12000a] to-black">
        {/* Subtle animated glow */}
        <motion.div
          className="absolute w-[150%] h-[150%] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(254,26,136,0.18), transparent 70%)",
          }}
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glass Text Card */}
        <div className="relative w-[90%] sm:w-4/5 md:w-4/5 max-w-7xl bg-black/60 border border-gray-200/30 rounded-lg p-6 sm:p-12 md:p-20 text-center shadow-lg z-10">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6">
            About Us
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl">
            Video is the future of communication.
          </p>
        </div>
      </div>

      {/* 🔹 Main Section */}
      <section className="relative bg-gradient-to-b from-black via-[#0b0005] to-black h-auto flex flex-col items-center justify-center px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pb-20">
        {/* Subtle gradient texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(254,26,136,0.08),transparent_70%)]"></div>

        {/* 🔸 Keep this divider exactly the same */}
        <div className=" bg-gradient-to-l my-10 from-fuchsia-700 to-pink-600 w-80 h-12 rounded-full shadow-lg"></div>

        {/* Your layout below — untouched */}
        <div>
          <h1 className="text-[#FE1A88] text-center text-2xl font-semibold uppercase">
            Our Identity
          </h1>
          <div className="flex md:flex-row py-10 gap-10 flex-col items-center justify-center">
            <div className="aspect-square w-80 md:w-96 rounded-full overflow-hidden flex-shrink-0 mx-auto shadow-[0_0_25px_rgba(254,26,136,0.15)]">
              <img src={AboutImg} alt="Profile" className="w-full h-full object-cover" />
            </div>

            <div className="md:w-1/2 w-full flex items-center justify-center">
              <p className="text-white md:max-w-2xl leading-relaxed px-5 md:px-0 text-base text-left">
                At LorinzaZenix, post production for films and OTT/web series is both an art and a science. We combine creativity, technical expertise, and mastery of motion graphics and VFX to transform raw footage into projects that truly stand out. Every production at LorinzaZenix reflects a deep passion for storytelling.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-[#FE1A88] text-center text-2xl font-semibold uppercase">
            Our Mission
          </h1>
          <div className="flex md:flex-row py-10 gap-10 flex-col items-center justify-center">
            <div className="aspect-square w-80 md:w-96 rounded-full overflow-hidden flex-shrink-0 mx-auto shadow-[0_0_25px_rgba(254,26,136,0.15)]">
              <img src={MissionImg} alt="Profile" className="w-full h-full object-cover" />
            </div>

            <div className="md:w-1/2 w-full flex items-center justify-center">
              <p className="text-white md:max-w-2xl leading-relaxed px-5 md:px-0 text-base text-left">
                Our mission at LorinzaZenix is to provide filmmakers and creators with seamless, high-end post production, sound designing, and cinematic editing that breathe life into stories. Every frame, sound, and transition we handle at LorinzaZenix carries purpose and precision.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-[#FE1A88] text-center text-2xl font-semibold uppercase">
            Our Values
          </h1>
          <div className="flex md:flex-row py-10 gap-10 flex-col items-center justify-center">
            <div className="aspect-square w-80 md:w-96 rounded-full overflow-hidden flex-shrink-0 mx-auto shadow-[0_0_25px_rgba(254,26,136,0.15)]">
              <img src={ValueImg} alt="Profile" className="w-full h-full object-cover" />
            </div>

            <div className="md:w-1/2 w-full flex flex-col items-center justify-center">
              <p className="text-white md:max-w-2xl leading-relaxed px-5 md:px-0 text-base text-left">
                At LorinzaZenix, our values drive every project: Every frame, sound, and transition we handle at LorinzaZenix carries purpose and precision.
              </p>
              <ul className="list-disc md:max-w-xl text-white text-base md:text-lg pl-5 leading-relaxed space-y-3">
                <li><span className="text-[#FE1A88] font-semibold">Creativity:</span> Pushing boundaries with VFX post production, CGI, and title animation services.</li>
                <li><span className="text-[#FE1A88] font-semibold">Excellence:</span> Perfecting every detail from visuals to audio for OTT/web series, corporate videos, and music videos.</li>
                <li><span className="text-[#FE1A88] font-semibold">Collaboration:</span> Our LorinzaZenix team works closely with clients across India and globally.</li>
                <li><span className="text-[#FE1A88] font-semibold">Integrity:</span> Transparent processes and ethical practices define every step at LorinzaZenix.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-[#FE1A88] text-center text-2xl font-semibold uppercase">
            Why Choose Us
          </h1>
          <div className="flex md:flex-row py-10 gap-10 flex-col items-center justify-center">
            <div className="aspect-square w-80 md:w-96 rounded-full overflow-hidden flex-shrink-0 mx-auto shadow-[0_0_25px_rgba(254,26,136,0.15)]">
              <img src={ChooseImg} alt="Profile" className="w-full h-full object-cover" />
            </div>

            <div className="md:w-1/2 w-full flex items-center justify-center">
              <p className="text-white md:max-w-2xl leading-relaxed px-5 md:px-0 text-base text-left">
                As a next-gen post production workflow picture post studio, LorinzaZenix stands among the best post production companies in India. We deliver complete solutions—from editing, VFX, and sound to digital promotion—ensuring a smooth creative journey for every filmmaker who partners with LorinzaZenix.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Contact Section */}
      <Contact />
    </>
  );
};

export default AboutUs;
