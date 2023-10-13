"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

// import NavLogo from '../public/assets/navLogo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const pathname = usePathname();

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

  // Event listener to close the navigation when clicking anywhere on the screen
  useEffect(() => {
    const closeNavOnOutsideClick = (e) => {
      if (nav && e.target !== document.getElementById("navToggle")) {
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
          <Link href="/">
            {/* <Image
              src={NavLogo}
              alt='/'
              width='125'
              height='50'
              className='cursor-pointer'
            /> */}
            LOGO
          </Link>
        </div>

        <div>
          <ul className="hidden lg:flex items-center justify-center gap-8">
            <li>
              <Link className="liItems relative z-50" href="/#main">
                Home
              </Link>
            </li>
            <li>
              <Link className="liItems relative z-50" href="/#about">
                About
              </Link>
            </li>
            <li>
              <Link className="liItems relative z-50" href="/#services">
                Services
              </Link>
            </li>
            <li>
              <Link className="liItems relative z-50" href="/#ourApproach">
                Our Approach
              </Link>
            </li>
            <li>
              <Link className="liItems relative z-50" href="/#consultation">
                Book A Consultation
              </Link>
            </li>
            <li>
              <Link className="liItems relative z-50" href="/#contact">
                Contact
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <ThemeSwitcher />
            </li>
          </ul>

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
          className={
            nav
              ? "navbar bg-[#ecf0f3] fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen p-10 ease-in duration-500"
              : "fixed left-[-300%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="w-full flex items-center justify-between">
              <Link href="/">
                {/* <Image
                    src={NavLogo}
                    width='87'
                    height='35'
                    alt='/'
                  /> */}
              </Link>

              <div className="w-72 flex items-center justify-center p-2 gap-x-20 ">
                <div className="relative top-2 right-8">
                  <ThemeSwitcher />
                </div>
                <div
                  id="navToggle"
                  onClick={handleNav}
                  className="darkshadow rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
            </div>
            <div className="border-b border-gray-500 my-6">
              <p className="w-[85%] md:w-[90%] py-4 text-center">
                Take Your Business to the Next Level
              </p>
            </div>
          </div>
          <div className="pt-8 flex flex-col">
            <ul className="uppercase">
              <Link href="/#main">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#services">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Services
                </li>
              </Link>
              <Link href="/#ourApproach">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Our Approach
                </li>
              </Link>
              <Link href="/#consultation" target="_blank">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Book A Consultation
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
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
                <Link href="/consultation">
                  <div
                    onClick={() => setNav(!nav)}
                    className="darkshadow rounded-full shadow-md shadow-gray-700 p-3 mr-2 md:mr-0 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
