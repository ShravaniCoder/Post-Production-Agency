import React from 'react'
import { motion } from "framer-motion";
import { FaArrowRight, FaBullhorn, FaPenNib, FaChessKing, FaEnvelope, FaPalette, FaCode } from "react-icons/fa";


const services = [
  {
    icon: <FaBullhorn className="text-3xl text-purple-500" />,
    title: "Social Media Marketing",
    desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
  },
  {
    icon: <FaPenNib className="text-3xl text-purple-500" />,
    title: "Content Marketing",
    desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
  },
  {
    icon: <FaChessKing className="text-3xl text-purple-500" />,
    title: "PPC Advertising",
    desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
  },
  {
    icon: <FaEnvelope className="text-3xl text-purple-500" />,
    title: "Email Marketing",
    desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
  },
  {
    icon: <FaPalette className="text-3xl text-purple-500" />,
    title: "Branding & Design",
    desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
  },
  {
    icon: <FaCode className="text-3xl text-purple-500" />,
    title: "Web Development",
    desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
  },
];
const Services = () => {
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
            Services
          </h1>
<p className="text-gray-300 text-base sm:text-lg md:text-xl"> The best way to communicate is through video. </p>

        </div>
      </div>


 <section className="bg-black text-white py-20 px-5">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
         <div className="relative w-4 h-4 flex items-center justify-center">
  <div className="absolute w-4 h-4 rounded-full border-2 border-purple-500 animate-pulse shadow-[0_0_8px_2px_rgba(168,85,247,0.7)]"></div>
  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
</div>

          <p className="text-purple-400 font-medium">Our Core Services</p>
        </div>
        <h2 className="text-2xl sm:text-5xl font-bold text-gray-100 leading-tight">
          Digital Solutions That Drive <br />
          <span className="text-gray-300">Real Results</span>
        </h2>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-gray-800 rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center gap-4 mb-4">
              <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-black shadow-[inset_2px_2px_4px_rgba(255,255,255,0.05),inset_-2px_-2px_6px_rgba(0,0,0,0.7)] before:absolute before:inset-0 before:rounded-2xl before:shadow-[0_0_15px_4px_rgba(168,85,247,0.4)] before:opacity-70">
  <div className="relative text-3xl text-purple-500">{service.icon}</div>
</div>

                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6">{service.desc}</p>
              <button className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-purple-700 text-white px-5 py-3 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all">
                <span>View Details</span>
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
</>
  )
}

export default Services;