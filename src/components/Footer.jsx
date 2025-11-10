import { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import FooterImg from "../assets/Footer.webp";
import Logo from "../assets/loggo.png"; // <-- Import your logo

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="relative w-full text-white bg-black py-12  overflow-hidden">
      {/* Background image */}
      <img
        src={FooterImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Blur overlay */}
      <div className="absolute inset-0 bg-[#070202]/80 z-0"></div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"
      >
        <div className="flex flex-col sm:flex-col md:flex-row gap-10 justify-between items-start">
          
          {/* Logo Section */}
          <motion.div variants={childVariants} className="flex flex-col items-start">
            <img
              src={Logo}
              alt="Saurabh Jage Interior Logo"
              className="w-36 md:w-44 mb-6"
            />
            <p className="text-gray-300 text-base md:text-lg font-inter leading-relaxed max-w-xs">
              Our team at LorinzaZenix - Where vision meets execution.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={childVariants}>
            <h3 className="uppercase font-semibold mb-6 text-lg md:text-xl tracking-wide font-spectral-sc-regular">
              Quick Links
            </h3>
            <ul className="space-y-3 text-base md:text-lg font-inter">
              {[
                { name: "Home", path: "/" },
                 { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact Us", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="uppercase hover:text-gray-300 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
{/* Head Office */}
<motion.div variants={childVariants}>
  <h3 className="uppercase font-semibold mb-6 text-lg md:text-xl tracking-wide font-spectral-sc-regular">
    Head Office
  </h3>
  <div className="text-base md:text-lg space-y-3 font-inter">
    <p>
      <span className="font-semibold uppercase">Address: </span>
      1311, Marathon Millenium,
      <br />
      LBS Road, Beside Nirmal Lifestyle Mall, Mulund West, <br /> Mumbai (400080).
    </p>
    <p>
      <span className="font-semibold uppercase">Phone: </span>
      +91 22-45199483
    </p>
    <p>
      <span className="font-semibold uppercase">E-mail: </span>
   contact@lorinzazenixpostproduction.com
    </p>
  </div>

  {/* Social Icons (no motion.div wrapper) */}
  <div className="flex gap-4 my-6 text-2xl">
    <a
      href="https://www.instagram.com/saurabhjageinterior?utm_source=qr&igsh=ZGgybnNmNXkxYWdi"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-300 transition-colors duration-200"
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.linkedin.com/company/saurabh-jage-interior/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-300 transition-colors duration-200"
    >
      <FaLinkedin />
    </a>
  </div>
</motion.div>

        </div>
      </motion.div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 font-spectral-sc-regular mt-10 px-2 pt-6 text-center text-lg md:text-xl text-gray-400 relative z-10">
        &copy; {new Date().getFullYear()} LorinzaZenix Post Production. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
