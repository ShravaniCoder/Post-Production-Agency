import React from "react";
import { motion } from "framer-motion";
import Bgimage from "../assets/contact.webp";

const Contact = () => {
  // 🔹 Animation Variants
  const fadeFromLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const fadeFromRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const fadeFromBottom = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* 🔹 Top Section with Image Background */}
      <div className="relative h-[50vh] md:h-[55vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.img
          src={Bgimage}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-4">
          <motion.h5
            className="text-[#FE1A88] text-xl font-semibold uppercase mb-3"
            variants={fadeFromLeft}
            initial="hidden"
            animate="visible"
          >
            Booking Online
          </motion.h5>

          <motion.h1
            className="text-white text-xl md:text-5xl font-bold"
            variants={fadeFromRight}
            initial="hidden"
            animate="visible"
          >
            Schedule An Appointment
          </motion.h1>

          <motion.p
            className="text-white max-w-xl py-4 mx-auto"
            variants={fadeFromLeft}
            initial="hidden"
            animate="visible"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>
        </div>
      </div>

      {/* 🔹 Bottom Form Section */}
      <motion.div
        className="relative bg-black flex items-start justify-center px-4 pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Dotted Background */}
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-20"
          variants={fadeIn}
        ></motion.div>

        {/* Form Container */}
        <motion.div
          className="relative z-10 bg-white/20 border border-white/20 rounded-xl p-8 md:p-12 w-full max-w-2xl shadow-lg -mt-[12vh] md:-mt-[17vh]"
          variants={fadeFromBottom}
        >
          <motion.form
            className="flex flex-col gap-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* 🔸 Name & Company */}
            <motion.div className="flex flex-col md:flex-row gap-3" variants={fadeFromLeft}>
              <div className="flex-1">
                <label className="text-base text-left text-white mb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="text-base text-left text-white mb-1 block">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
                />
              </div>
            </motion.div>

            {/* 🔸 Phone & Email */}
            <motion.div className="flex flex-col md:flex-row gap-3" variants={fadeFromRight}>
              <div className="flex-1">
                <label className="text-base text-left text-white mb-1 block">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="text-base text-left text-white mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
                />
              </div>
            </motion.div>

            {/* 🔸 Date & Service */}
            <motion.div className="flex flex-col md:flex-row gap-3" variants={fadeFromLeft}>
              <div className="flex-1">
                <label className="text-base text-left text-white mb-1 block">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="text-base text-left text-white mb-1 block">
                  Service
                </label>
                <select className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none">
                  <option>Entire Film Editing</option>
                  <option>VFX & CGI Studio Work</option>
                  <option>Sound Design & Final Mixing</option>
                  <option>Trailer & Promo Editing</option>
                    <option>Digital Film Branding & Promotion</option>
                </select>
              </div>
            </motion.div>

            {/* 🔸 Note */}
            <motion.div variants={fadeFromRight}>
              <label className="text-base text-left text-white mb-1 block">
                Note
              </label>
              <textarea
                rows="4"
                placeholder="Note"
                className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
              ></textarea>
            </motion.div>

            {/* 🔸 Button */}
            <motion.div variants={fadeFromBottom}>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-l from-fuchsia-700 to-pink-600 hover:from-fuchsia-600 hover:to-pink-600 text-white font-semibold shadow-md transition-all"
              >
                Book Now !
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
