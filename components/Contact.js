import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contactUS.jpeg";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variant1 = {
    initial: { x: -500, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const variant2 = {
    initial: { x: 500, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const variant3 = {
    initial: { y: 500, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div id="contact" className="relative w-screen h-auto">
      <div className="max-w-[1240px] h-auto m-auto px-2 pt-12 pb-4">
        <h2 className="titles py-8 mt-8 text-2xl text-center md:text-left md:text-5xl font-bold text-[#3c68cd]">
          Get In Touch
        </h2>
        <div ref={ref} className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <motion.div
            variants={variant1}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1, delay: 0.5 }}
            className="darkshadow col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4"
          >
            <div>
              <div>
                <div className="mb-4">LOGO</div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h1 className="py-8 text-2xl font-bold">CrystalLynne LLC</h1>
                <p>------------- </p>
                <p className="py-4">Some statement here.</p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Us</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/clint-briley-50056920a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="darkshadow rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/fireclint"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="darkshadow rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a href="" target="_blank" rel="noreferrer">
                    <div className="darkshadow text-xl md:text-2xl rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaTwitter />
                    </div>
                  </a>
                  <Link href="/resume">
                    <div className="darkshadow rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* right */}
          <motion.div
            variants={variant2}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1, delay: 0.5 }}
            className="darkshadow col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4"
          >
            <div className="p-4">
              <form action="" method="POST" encType="multipart/form-data">
                <div className="flex items-center justify-between gap-4 w-full py-2">
                  <div className="w-full flex flex-col">
                    <label className="w-full uppercase text-sm py-2">
                      Name
                      <input
                        className="contactLabels w-full border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="name"
                        autoComplete="off"
                      />
                    </label>
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="w-full uppercase text-sm py-2">
                      Phone Number
                      <input
                        className="contactLabels w-full border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="phone"
                        autoComplete="off"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 w-full py-2">
                  <div className="w-full flex flex-col py-2">
                    <label className=" w-full uppercase text-sm py-2">
                      Email
                      <input
                        className="contactLabels w-full border-2 rounded-lg p-3 flex border-gray-300"
                        type="email"
                        name="email"
                        autoComplete="off"
                      />
                    </label>
                  </div>
                  <div className="w-full flex flex-col py-2">
                    <label className="w-full uppercase text-sm py-2">
                      Subject
                      <input
                        className="contactLabels w-full border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="subject"
                        autoComplete="off"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="contactLabels border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    autoComplete="off"
                  ></textarea>
                </div>
                <button className="darkshadow w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-95">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={variant3}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center pt-4"
        >
          <Link href="/#main">
            <div className="darkshadow rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </motion.div>
      </div>
      <div className="hidden xl:flex skewdiv w-full absolute -z-10 top-[15%] bg-[#bebbbb38] left-0 h-[750px] lg:h-[850px] skew-y-6"></div>
      <div className="hidden xl:flex skewdiv w-full absolute -z-20 top-[10%] bg-[#bebbbb38] left-0 h-[850px] lg:h-[950px] skew-y-6"></div>
    </div>
  );
};

export default Contact;
