import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contactUS.jpeg";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <h2 className="py-8 text-2xl text-center md:text-left md:text-5xl font-bold text-[#3c68cd]">
          Get In Touch
        </h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="contactForm col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
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
                    <div className="socials rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/fireclint"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="socials rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="socials rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <Link href="/resume">
                    <div className="socials rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="contactForm col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
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
                <button className="contactForm w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-95">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#main">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
