"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import React, { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

// import NavLogo from '../public/assets/navLogo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    const closeNavOnOutsideClick = (e) => {
      if (nav && e.target.closest("#navMenu") === null) {
        setNav(false);
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener("click", closeNavOnOutsideClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeNavOnOutsideClick);
    };
  }, [nav]);

  return (
    <header
      className={
        shadow
          ? "navbar fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-between items-center w-full h-full px-2 2xl:px-16"
      >
        <div>
          <ScrollLink to="main" smooth={true} offset={-70} duration={200}>
            {/* <Image
              src={NavLogo}
              alt='/'
              width='125'
              height='50'
              className='cursor-pointer'
            /> */}
            LOGO
          </ScrollLink>
        </div>

        <div className="flex items-center justify-center gap-x-8">
          <ul className="hidden lg:flex items-center justify-center gap-8">
            <li>
              <ScrollLink
                to="main"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="liItems relative z-50"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="liItems relative z-50"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="liItems relative z-50"
              >
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="ourApproach"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="liItems relative z-50"
              >
                Our Approach
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="consultation"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="liItems relative z-50"
              >
                Book A Consultation
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="liItems relative z-50"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
          <div className="flex items-center justify-center">
            <ThemeSwitcher />
          </div>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="relative z-50 lg:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </motion.div>
      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          id="navMenu"
          className={
            nav
              ? "navbar bg-[#ecf0f3] fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen p-8 ease-in duration-500 flex flex-col items-start gap-20"
              : "fixed left-[-300%] top-0 ease-in duration-500 h-screen"
          }
        >
          <div>
            <div className="w-full flex items-center justify-between">
              <ScrollLink
                to="main"
                smooth={true}
                offset={-70}
                duration={200}
                className="cursor-pointer flex items-center justify-center"
              >
                {/* <Image
              src={NavLogo}
              alt='/'
              width='125'
              height='50'
                          /> */}
                LOGO
              </ScrollLink>
              <div
                id="navToggle"
                onClick={handleNav}
                className="darkshadow rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-500 mt-6">
              <p className="w-auto py-4 text-center">
                Take Your Business to the Next Level
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <ul className="flex flex-col items-start justify-center uppercase">
              <ScrollLink
                to="main"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </ScrollLink>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </ScrollLink>
              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Services
                </li>
              </ScrollLink>
              <ScrollLink
                to="ourApproach"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Our Approach
                </li>
              </ScrollLink>
              <ScrollLink
                to="consultation"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Book A Consultation
                </li>
              </ScrollLink>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </ScrollLink>
            </ul>
            <div className="pt-20 flex flex-col items-center justify-center">
              <p className="uppercase tracking-widest text-[#427ed1] text-center">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-center mt-4 w-full h-full sm:w-[80%] gap-2 lg:gap-4 ">
                <a href="" target="_blank" rel="noreferrer">
                  <div className="darkshadow rounded-full shadow-md shadow-gray-700 p-3 mr-2 md:mr-0 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <div className="darkshadow rounded-full shadow-md shadow-gray-700 p-3 mr-2 md:mr-0 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <div className="darkshadow rounded-full shadow-md shadow-gray-700 p-3 mr-2 md:mr-0 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaTwitter />
                  </div>
                </a>
                <a
                  href="https://calendly.com/marcbrown2024/crystallynne-llc-consultation"
                  target="_blank"
                >
                  <div
                    onClick={() => setNav(!nav)}
                    className="darkshadow rounded-full shadow-md shadow-gray-700 p-3 mr-2 md:mr-0 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
