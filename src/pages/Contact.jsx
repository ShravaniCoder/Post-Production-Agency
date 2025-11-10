import React, { useRef } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { motion } from "framer-motion";


// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const slideVariant = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -60 : 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
});
const Contact = () => {
    const formRef = useRef();
    const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://sheetdb.io/api/v1/4lv1jbh3svnka", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const name = formData.get("data[Name]");
        alert("Submitted !! Thank You " + name);
        form.reset();
        setIsFormSubmitted(true); // 🔒 prevent showing again
        handleClose();
        clearInterval(intervalRef.current); // stop interval forever
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Try again later.");
    }
  };
    
  return (
  <>
        {/* Header Section */}
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
         Contact Us 
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl">
            Get in touch and let us know how we can assist.
          </p>
        </div>
      </div>
      {/* 🌍 GET IN TOUCH SECTION */}
      <section className="relative bg-black text-white md:py-10 px-4 sm:px-6 lg:px-12 overflow-hidden">
        {/* Subtle gradient glows */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[60vw] h-[60vh] bg-[radial-gradient(ellipse_at_top_left,rgba(254,26,136,0.18)_0%,transparent_70%)] blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[65vw] h-[65vh] bg-[radial-gradient(ellipse_at_bottom_right,rgba(164,69,255,0.15)_0%,transparent_70%)] blur-3xl"></div>
        </div>

        {/* Header */}
        <div className="relative text-center mb-12 mt-4 z-10">
          <motion.p
            variants={slideVariant("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-pink-500 tracking-widest uppercase mb-2 text-xl md:text-2xl"
          >
            Get in Touch
          </motion.p>

          <motion.h2
            variants={slideVariant("right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
          >
            Have any questions?
          </motion.h2>

          <motion.p
            variants={slideVariant("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-lg md:max-w-2xl mx-auto text-gray-400 text-base sm:text-base"
          >
           Reach out and let us handle every detail of your post-production project.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {[
              {
                icon: <FaMapMarkerAlt className="text-2xl sm:text-3xl" />,
                title: "Locations",
                text: "1311, Marathon Millenium, LBS Road, Beside Nirmal Lifestyle Mall, Mulund West, Mumbai (400080)",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <FaEnvelope className="text-2xl sm:text-3xl" />,
                title: "Email us",
                text: "contact@lorinzazenixpostproduction.com",
                color: "from-yellow-400 to-green-400",
              },
              {
                icon: <FaPhoneAlt className="text-2xl sm:text-3xl" />,
                title: "Call us",
                text: "+91 99873 57338",
                color: "from-blue-500 to-cyan-400",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative bg-[#141414] p-8 rounded-xl shadow-md text-center border border-[#2a2a2a]/60"
              >
                <div
                  className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-t ${card.color} rounded-full p-4 shadow-md`}
                >
                  {card.icon}
                </div>
                <h3 className="mt-5 font-semibold text-lg sm:text-xl">{card.title}</h3>
                <p className="text-gray-400 mt-3 text-sm sm:text-base break-words">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Google Map */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-7xl mt-9 mx-auto rounded-xl overflow-hidden shadow-[0_0_25px_rgba(254,26,136,0.12)] h-[300px] sm:h-[400px] lg:h-[450px] z-10"
        >
         <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.638553231171!2d72.93556337596684!3d19.167292649098727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b95393ca9d37%3A0x42654bf89712cee7!2sMarathon%20Millennium!5e0!3m2!1sen!2sin!4v1762236424492!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </motion.div>
      </section>

      {/* 💌 SEND US A MESSAGE SECTION */}
      <section className="relative bg-black text-white py-10 px-4 sm:px-6 lg:px-12 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_top_left,rgba(255,0,128,0.12),transparent_70%)] blur-3xl"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_bottom_right,rgba(120,0,255,0.12),transparent_70%)] blur-3xl"></div>
        </div>

        {/* Header */}
        <div className="relative text-center mb-10 z-10">
          <motion.h2
            variants={slideVariant("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold mb-3"
          >
            Send us a message
          </motion.h2>
          <motion.p
            variants={slideVariant("right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-400 text-base sm:text-base leading-relaxed"
          >
           Reach out and let us handle every detail of your post-production project.
          </motion.p>
        </div>

        {/* Form */}
        <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="relative max-w-3xl mx-auto space-y-4 z-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* 🔸 Name & Company */}
      {[
        ["Name", "Company"],
        ["Phone", "Email"],
      ].map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={fadeUp}
          custom={rowIndex}
        >
          {row.map((field, i) => (
            <div key={i}>
              <label className="block text-sm font-medium mb-2">{field}</label>
              <input
                type={field === "Email" ? "email" : "text"}
                name={`data[${field}]`}
                placeholder={field}
                className="w-full bg-[#1c1c1f] text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
          ))}
        </motion.div>
      ))}

      {/* 🔸 Date & Service */}
      <motion.div variants={fadeUp}>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <label className="text-base text-left text-white mb-1 block">
              Date
            </label>
            <input
              type="date"
              name="data[Date]"
              className="w-full px-3 py-2 rounded-md bg-[#1c1c1f] text-gray-200 outline-none"
              required
            />
          </div>
          <div className="flex-1">
            <label className="text-base text-left text-white mb-1 block">
              Service
            </label>
            <select
              name="data[Service]"
              className="w-full px-3 py-2 rounded-md bg-[#1c1c1f] text-gray-200 outline-none"
              required
            >
              <option>Entire Film Editing</option>
              <option>VFX & CGI Studio Work</option>
              <option>Sound Design & Final Mixing</option>
              <option>Trailer & Promo Editing</option>
              <option>Digital Film Branding & Promotion</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* 🔸 Message */}
      <motion.div variants={fadeUp}>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            rows="5"
            name="data[Message]"
            placeholder="Message"
            className="w-full bg-[#1c1c1f] text-gray-200 px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          ></textarea>
        </div>
      </motion.div>

      {/* 🔸 Submit Button */}
      <motion.div variants={fadeUp}>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3 text-white font-medium rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition duration-200"
        >
          <FaEnvelope />
          Send Message
        </button>
      </motion.div>
    </motion.form>

      </section>


  </>
  )
}

export default Contact;