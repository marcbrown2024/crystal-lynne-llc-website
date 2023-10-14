import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div
      id="main"
      className="breakpoint w-full h-screen flex items-center justify-center text-center mb-12 border-b-2 border-slate-200 "
    >
      <div className="w-full h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ y: 500, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="h-[25%] sm:h-2/6 flex flex-col items-center justify-between"
        >
          <div
            className={`titles text-[#3c68cd] text-xl sm:text-4xl md:text-6xl lg:text-8xl font-bold`}
          >
            CrystalLynne LLC
          </div>
          <div className="text-lg sm:text-lg lg:text-2xl">
            Your Partner in Business Development and Software Solutions.
          </div>
          <div className="flex items-center justify-center gap-4 lg:gap-8">
            <Link
              href="https://calendly.com/marcbrown2024/crystallynne-llc-consultation"
              target="_blank"
              className="group relative flex items-center justify-between"
            >
              <div className="darkshadow text-xl md:text-2xl rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
              <p className="absolute left-12 w-60 -skew-y-3 p-4 hidden group-hover:block">Book a consultation</p>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="skewdiv w-full fixed -z-10 bg-[#bebbbb38] left-0 h-[500px] lg:h-[750px] -skew-y-3"></div>
      <div className="skewdiv w-full fixed -z-20 bg-[#bebbbb38] left-0 h-[560px] lg:h-[810px] -skew-y-3"></div>
    </div>
  );
};

export default Main;
