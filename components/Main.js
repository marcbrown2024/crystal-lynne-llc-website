import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div
      id="main"
      className="breakpoint w-screen h-screen flex flex-col space-y-8 items-center justify-center text-center border-b-2 border-slate-200"
    >
      <div className="max-w-[1240px] h-screen mx-auto p-2 flex justify-center items-center">
        <motion.div
          initial={{ y: 500, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="py-4 ">
            <span
              className={`titles text-[#3c68cd] text-5xl sm:text-5xl md:text-8xl font-bold`}
            >
              CrystalLynne LLC
            </span>
          </h1>
          <p className="sm:text-lg md:text-3xl text-center font-bold py-4 sm:max-w-[70%] m-auto">
            Your Partner in Business Development and Software Solutions.
          </p>
          <div className="flex items-center justify-between w-[240px] md:w-[350px] mx-[18rem] py-4 gap-4 ">
            <a href="" target="_blank" rel="noreferrer">
              <div className="darkshadow text-xl md:text-2xl rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <div className="darkshadow text-xl md:text-2xl rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <div className="darkshadow text-xl md:text-2xl rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTwitter />
              </div>
            </a>
            <Link href="/#contact">
              <div className="darkshadow text-xl md:text-2xl rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link
              href="https://calendly.com/marcbrown2024/crystallynne-llc-consultation"
              target="_blank"
            >
              <div className="darkshadow text-xl md:text-2xl rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="hidden xl:flex skewdiv w-full absolute -z-10 top-[13%] bg-[#bebbbb38] left-0 h-[600px] lg:h-[700px] -skew-y-3"></div>
      <div className="hidden xl:flex skewdiv w-full absolute -z-10 top-[10%] bg-[#bebbbb38] left-0 h-[660px] lg:h-[760px] -skew-y-3"></div>
    </div>
  );
};

export default Main;
