import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { motion} from "framer-motion";
const Contact = () => {
  return (
  <>
        {/* Header Section */}
      <div className="flex justify-center items-center mt-20 md:h-[50vh] h-[28vh] bg-black relative overflow-hidden">
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
        <div className="relative w-[90%] sm:w-4/5 md:w-4/5 max-w-7xl bg-gradient-to-b from-black to-black border border-gray-200/30 rounded-lg mt-2 p-6 sm:p-12 md:p-20 text-center shadow-lg z-10 overflow-hidden">
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
            Get in touch and let us know how we can help.
          </p>
        </div>
      </div>
    <section className="bg-black border-black border text-white  md:py-10 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-pink-500 tracking-widest uppercase mb-2 text-xl md:text-2xl">
          Get in Touch
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Have any questions?
        </h2>
        <p className="max-w-lg md:max-w-2xl mx-auto text-gray-400 text-base sm:text-base ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Cards */}
<div className="max-w-7xl mx-auto ">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
    {/* Location Card */}
    <div className="relative bg-[#252831] p-8 rounded-xl shadow-lg text-center">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full p-4 shadow-md">
        <FaMapMarkerAlt className="text-2xl sm:text-3xl" />
      </div>
      <h3 className="mt-5 font-semibold text-lg sm:text-xl">Locations</h3>
    <p className="text-gray-400 mt-3 text-sm sm:text-base break-words">
  1311, Marathon Millenium, LBS Road, Beside Nirmal Lifestyle Mall, Mulund West, Mumbai (400080)
</p>

    </div>

    {/* Email Card */}
    <div className="relative bg-[#252831] p-8 rounded-xl shadow-lg text-center">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-yellow-400 to-green-400 rounded-full p-4 shadow-md">
        <FaEnvelope className="text-2xl sm:text-3xl" />
      </div>
      <h3 className="mt-5 font-semibold text-lg sm:text-xl">Email us</h3>
      <p className="text-gray-400 mt-3 text-sm sm:text-base">
      contact@lorinzazenix.com
      </p>
    </div>

    {/* Call Card */}
    <div className="relative bg-[#252831] p-8 rounded-xl shadow-lg text-center">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-full p-4 shadow-md">
        <FaPhoneAlt className="text-2xl sm:text-3xl" />
      </div>
      <h3 className="mt-5 font-semibold text-lg sm:text-xl">Call us</h3>
      <p className="text-gray-400 mt-3 text-sm sm:text-base">
      +91 99873 57338
      </p>
    </div>
  </div>
</div>


      {/* Google Map Embed */}
      <div className="max-w-7xl mt-9 mx-auto rounded-xl overflow-hidden shadow-lg h-[300px] sm:h-[400px] lg:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.0274633770712!2d-0.119543484382516!3d51.50329787963583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900e5bb4f%3A0xf0d7e8f72b09d50c!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1693084350000!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </section>

        <section className="bg-black text-white py-7 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="text-center mb-7">
        <h2 className="text-3xl sm:text-5xl font-bold mb-3">Send us a message</h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Form */}
     <form className="max-w-3xl border border-black mx-auto space-y-2">
  {/* Name & Company */}
  <div className="grid grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium mb-2">Name</label>
      <input
        type="text"
        placeholder="Name"
        className="w-full bg-[#252831] text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Company</label>
      <input
        type="text"
        placeholder="Company"
        className="w-full bg-[#252831] text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
  </div>

  {/* Phone & Email */}
  <div className="grid grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium mb-2">Phone</label>
      <input
        type="text"
        placeholder="Phone"
        className="w-full bg-[#252831] text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Email</label>
      <input
        type="email"
        placeholder="Email"
        className="w-full bg-[#252831] text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
  </div>

  {/* Subject */}
  <div>
    <label className="block text-sm font-medium mb-2">Subject</label>
    <input
      type="text"
      placeholder="Subject"
      className="w-full bg-[#252831] text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
  </div>

  {/* Message */}
  <div>
    <label className="block text-sm font-medium mb-2">Message</label>
    <textarea
      rows="5"
      placeholder="Message"
      className="w-full bg-[#252831] text-gray-200 px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
    ></textarea>
  </div>

  {/* Send Button */}
  <div className="">
    <button
      type="submit"
      className="w-full flex items-center justify-center gap-2 py-3 text-white font-medium rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition duration-200"
    >
      <FaEnvelope />
      Send Message
    </button>
  </div>
</form>

    </section>
  </>
  )
}

export default Contact;