import React, { useRef } from "react";
import { motion } from "framer-motion";
import Bgimage from "../assets/contact.webp";

const Contact = () => {
  // 🔹 Animation Variants
   const formRef = useRef();
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
    <div className=" bg-black flex flex-col">
      {/* 🔹 Top Section with Image Background */}
      <div className="relative h-[55vh] md:h-[55vh] flex flex-col items-center justify-center text-center overflow-hidden">
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
            className="text-[#FE1A88] text-3xl font-semibold uppercase mb-3"
            variants={fadeFromLeft}
            initial="hidden"
            animate="visible"
          >
           Start your project 
          </motion.h5>

          

          <motion.p
            className="text-white text-base max-w-xl py-4 mx-auto"
            variants={fadeFromLeft}
            initial="hidden"
            animate="visible"
          >
          

Ready to elevate your visuals?
Connect with LorinzaZenix and transform your footage into a masterpiece.
          </motion.p>
        </div>
      </div>

      {/* 🔹 Bottom Form Section */}
 <motion.div
  className="relative bg-black flex items-start justify-center px-4 pb-9"
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

  {/* ✨ Form Container (single animated box) */}
  <motion.div
    className="relative z-10 bg-white/20 border border-white/20 rounded-xl p-8 md:p-12 w-full max-w-2xl shadow-lg -mt-[12vh] md:-mt-[17vh]"
    variants={fadeFromBottom}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <form   ref={formRef}  onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* 🔸 Name & Company */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <label className="text-base text-left text-white mb-1 block">Name</label>
          <input
            type="text"
              name="data[Name]"
            placeholder="Name"
            className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
            required
          />
        </div>
        <div className="flex-1">
          <label className="text-base text-left text-white mb-1 block">Company</label>
          <input
            type="text"
              name="data[Company]"
            placeholder="Company"
            className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
             required
          />
        </div>
      </div>

      {/* 🔸 Phone & Email */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <label className="text-base text-left text-white mb-1 block">Phone</label>
          <input
            name="data[Phone]"         
            type="text"
            placeholder="Phone"
            className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
             required
          />
        </div>
        <div className="flex-1">
          <label className="text-base text-left text-white mb-1 block">Email</label>
          <input
            type="email"
              name="data[Email]"
            placeholder="Email"
            className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
             required
          />
        </div>
      </div>

      {/* 🔸 Date & Service */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <label className="text-base text-left text-white mb-1 block">Date</label>
          <input
            type="date"
              name="data[Date]"
            className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
             required
          />
        </div>
        <div className="flex-1">
          <label className="text-base text-left text-white mb-1 block">Service</label>
          <select   name="data[Service]" className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"  required>
            <option>Entire Film Editing</option>
            <option>VFX & CGI Studio Work</option>
            <option>Sound Design & Final Mixing</option>
            <option>Trailer & Promo Editing</option>
            <option>Digital Film Branding & Promotion</option>
          </select>
        </div>
      </div>

      {/* 🔸 Note */}
      <div>
        <label className="text-base text-left text-white mb-1 block">Note</label>
        <textarea
          rows="4"
            name="data[Message]"
          placeholder="Note"
          className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
           required
        ></textarea>
      </div>

      {/* 🔸 Button */}
      <div>
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-gradient-to-l from-fuchsia-700 to-pink-600 hover:from-fuchsia-600 hover:to-pink-600 text-white font-semibold shadow-md transition-all"
        >
          Book Now !
        </button>
      </div>
    </form>
  </motion.div>
</motion.div>


    </div>
  );
};

export default Contact;
