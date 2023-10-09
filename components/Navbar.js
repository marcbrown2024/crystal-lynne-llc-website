"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

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

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className="fixed w-full h-20 shadow-2xl z-[100] bg-[#ecf0f3]"
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
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
        <div>
          <ul className="hidden lg:flex">
            <li className="ml-10 text-sm uppercase hover:border-b border-[#000]">
              <Link href="/#main">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#000]">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#000]">
              <Link href="/#services">Services</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#000]">
              <Link href="/#ourApproach">Our Approach</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#000]">
              <Link href="/consultation">Book A Consultation</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#000]">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor} mr-12` }}
            onClick={handleNav}
            className="lg:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
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
              ? " fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
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
              <div
                onClick={handleNav}
                className="relative bottom-4 left-8 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-500 my-6">
              <p className="w-[85%] md:w-[90%] py-4 text-[#000] text-center">
                Take Your Business to the Next Level
              </p>
            </div>
          </div>
          <div className="pt-8 flex flex-col">
            <ul className="uppercase text-[#000]">
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
              <Link href="/consultation">
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
              <div className="flex items-center justify-center my-8 sm:my-4 w-full h-auto sm:w-[80%] ">
                <a href="" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-800 p-3 mr-2 md:mr-0 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-800 p-3 mr-2 md:mr-0 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-800 p-3 mr-2 md:mr-0 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-800 p-3 mr-2 md:mr-0 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
