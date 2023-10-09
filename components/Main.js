import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] h-full mx-auto p-2 flex justify-center items-center">
        <div className="p-2 ">
          <h1 className="py-4 text-[#232323]">
            <span className="text-[#3c68cd] text-5xl sm:text-5xl md:text-8xl font-bold"> CrystalLynne LLC</span>
          </h1>
          <p className="sm:text-lg md:text-3xl text-center font-bold py-4 text-gray-600 sm:max-w-[70%] m-auto">
            Your Partner in Business Development and Software Solutions.
          </p>
          <div className="flex items-center justify-between w-[240px] md:w-[350px] m-auto py-4 ">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <div className="text-xl md:text-2xl rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <div className="text-xl md:text-2xl rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="text-xl md:text-2xl rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/consultation">
              <div className="text-xl md:text-2xl rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
