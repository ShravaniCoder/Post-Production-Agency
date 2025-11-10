import React, { useRef, useState, useEffect } from "react";
import Logo from "../assets/loggo.png";
import { TbMenu } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <motion.div className="fixed top-0 left-0 bg-black w-full z-50 py-4 font-medium px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex justify-center lg:justify-start">
            <img src={Logo} alt="logo" className="w-32" />
          </div>

          <ul className="hidden lg:flex gap-5 text-base font-cormorant-text font-bold text-white">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/about">ABOUT US</a>
            </li>
            <li>
              <a href="/services">SERVICES</a>
            </li>
            <li>
              <a href="/contact">CONTACT US</a>
            </li>
          </ul>

          <button onClick={openMenu} className="block lg:hidden ml-3">
            <TbMenu className="text-2xl text-[#D9C590]" />
          </button>

          <ul
            ref={sideMenuRef}
            className="flex lg:hidden uppercase text-white flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-[60] h-screen bg-black transition-transform duration-500 translate-x-full"
          >
            <div className="absolute right-6 top-14">
              <RxCross2
                onClick={closeMenu}
                className="text-xl cursor-pointer"
              />
            </div>
            <a onClick={closeMenu} href="/">
              HOME
            </a>
            <a onClick={closeMenu} href="/about">
              ABOUT US
            </a>
            <a onClick={closeMenu} href="/services">
              SERVICES
            </a>
            <a onClick={closeMenu} href="/contact">
              CONTACT US
            </a>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;