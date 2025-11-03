import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/AboutImg.webp";
import MissionImg from "../assets/MissionImg.webp";
import ValueImg from "../assets/ValueImg.webp";
import ChooseImg from "../assets/ChooseImg.webp";
import Contact from "../components/Contact";

const textVariantLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const textVariantRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const AboutUs = () => {
  return (
    <>
      {/* 🔹 Top Section */}
       <div className="flex justify-center items-center mt-20 md:h-[50vh] h-[34vh] bg-black relative overflow-hidden">
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
             <div className="relative w-[90%] sm:w-4/5 md:w-4/5 max-w-7xl bg-gradient-to-b from-black mt-7 to-black border border-gray-200/30 rounded-lg mt-2 p-6 sm:p-12 md:p-20 text-center shadow-lg z-10 overflow-hidden">
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
               <p className="text-gray-300 text-base sm:text-lg md:text-xl">
                 Get in touch and let us know how we can help.
               </p>
             </div>
           </div>

      {/* 🔹 Main Section */}
      <section className="relative bg-gradient-to-b from-black via-[#0b0005] to-black h-auto flex flex-col items-center justify-center px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(254,26,136,0.08),transparent_70%)]"></div>

        <div className=" bg-gradient-to-l my-10 from-fuchsia-700 to-pink-600 w-80 h-12 rounded-full shadow-lg"></div>

        {/* 🔸 Our Identity */}
        <div>
          <h1 className="text-[#FE1A88] text-center text-2xl font-semibold uppercase">
            Our Identity
          </h1>
          <div className="flex md:flex-row py-10 gap-10 flex-col items-center justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textVariantLeft}
              viewport={{ once: true }}
              className="aspect-square w-80 md:w-96 rounded-full overflow-hidden flex-shrink-0 mx-auto shadow-[0_0_25px_rgba(254,26,136,0.15)]"
            >
              <img src={AboutImg} alt="Profile" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textVariantRight}
              viewport={{ once: true }}
              className="md:w-1/2 w-full flex items-center justify-center"
            >
              <p className="text-white md:max-w-2xl leading-relaxed px-5 md:px-0 text-base text-left">
                At LorinzaZenix, post production for films and OTT/web series is both an art and a science. We combine creativity, technical expertise, and mastery of motion graphics and VFX to transform raw footage into projects that truly stand out. Every production at LorinzaZenix reflects a deep passion for storytelling.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 🔸 Our Mission */}
        <div>
          <h1 className="text-[#FE1A88] text-center text-2xl font-semibold uppercase">
            Our Mission
          </h1>
          <div className="flex md:flex-row py-10 gap-10 flex-col items-center justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textVariantRight}
              viewport={{ once: true }}
              className="aspect-square w-80 md:w-96 rounded-full overflow-hidden flex-shrink-0 mx-auto shadow-[0_0_25px_rgba(254,26,136,0.15)]"
            >
              <img src={MissionImg} alt="Profile" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textVariantLeft}
              viewport={{ once: true }}
              className="md:w-1/2 w-full flex items-center justify-center"
            >
              <p className="text-white md:max-w-2xl leading-relaxed px-5 md:px-0 text-base text-left">
                Our mission at LorinzaZenix is to provide filmmakers and creators with seamless, high-end post production, sound designing, and cinematic editing that breathe life into stories. Every frame, sound, and transition we handle at LorinzaZenix carries purpose and precision.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 🔸 Our Values */}
        <div>
          <h1 className="text-[#FE1A88] text-center text-2xl font-semibold uppercase">
            Our Values
          </h1>
          <div className="flex md:flex-row py-10 gap-10 flex-col items-center justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textVariantLeft}
              viewport={{ once: true }}
              className="aspect-square w-80 md:w-96 rounded-full overflow-hidden flex-shrink-0 mx-auto shadow-[0_0_25px_rgba(254,26,136,0.15)]"
            >
              <img src={ValueImg} alt="Profile" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textVariantRight}
              viewport={{ once: true }}
              className="md:w-1/2 w-full flex flex-col items-center justify-center"
            >
              <p className="text-white md:max-w-2xl leading-relaxed px-5 md:px-0 text-base text-left">
                At LorinzaZenix, our values drive every project: Every frame, sound, and transition we handle at LorinzaZenix carries purpose and precision.
              </p>
              <ul className="list-disc md:max-w-xl text-white text-base md:text-lg pl-5 leading-relaxed space-y-3">
                <li><span className="text-[#FE1A88] font-semibold">Creativity:</span> Pushing boundaries with VFX post production, CGI, and title animation services.</li>
                <li><span className="text-[#FE1A88] font-semibold">Excellence:</span> Perfecting every detail from visuals to audio for OTT/web series, corporate videos, and music videos.</li>
                <li><span className="text-[#FE1A88] font-semibold">Collaboration:</span> Our LorinzaZenix team works closely with clients across India and globally.</li>
                <li><span className="text-[#FE1A88] font-semibold">Integrity:</span> Transparent processes and ethical practices define every step at LorinzaZenix.</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* 🔸 Why Choose Us */}
        <div>
          <h1 className="text-[#FE1A88] text-center text-2xl font-semibold uppercase">
            Why Choose Us
          </h1>
          <div className="flex md:flex-row py-10 gap-10 flex-col items-center justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textVariantRight}
              viewport={{ once: true }}
              className="aspect-square w-80 md:w-96 rounded-full overflow-hidden flex-shrink-0 mx-auto shadow-[0_0_25px_rgba(254,26,136,0.15)]"
            >
              <img src={ChooseImg} alt="Profile" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textVariantLeft}
              viewport={{ once: true }}
              className="md:w-1/2 w-full flex items-center justify-center"
            >
              <p className="text-white md:max-w-2xl leading-relaxed px-5 md:px-0 text-base text-left">
                As a next-gen post production workflow picture post studio, LorinzaZenix stands among the best post production companies in India. We deliver complete solutions—from editing, VFX, and sound to digital promotion—ensuring a smooth creative journey for every filmmaker who partners with LorinzaZenix.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔹 Contact Section */}
      <Contact />
    </>
  );
};

export default AboutUs;
