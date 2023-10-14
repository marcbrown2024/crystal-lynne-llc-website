import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import AboutImg from "../public/assets/Conference-room.jpeg";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

const About = () => {
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

  return (
    <div
      id="about"
      className="breakpoint relative w-screen h-auto flex items-center border-b-2 border-slate-200"
    >
      <div
        ref={ref}
        className="max-w-[1240px] lg:h-screen m-auto grid grid-cols-1 md:grid-cols-2 items-center"
      >
        <motion.div
          variants={variant1}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center justify-center p-4"
        >
          <div className="text-4xl font-bold flex flex-col text-center gap-0 md:gap-2 mb-8">
            Why Choose
            <span className="titles text-4xl text-[#3c68cd] font-bold">
              CrystaLynne LLC?
            </span>
          </div>
          <div className="relative w-[20rem] lg:w-[30rem] h-[18rem] darkshadow shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
            <Image
              className="rounded-xl"
              src={AboutImg}
              alt="/"
              fill={true}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
              priority
            />
          </div>
          <p className="leading-8 p-4 lg:p-12">
            CrystaLynne LLC specializes in custom software solutions to boost
            business growth and efficiency for enterprises of all sizes. We
            optimize operations, automate processes, and help you achieve your
            goals with our extensive experience and top-tier technology
            partners.
          </p>
        </motion.div>
        <div className="flex md:hidden items-center justify-center text-xs">
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</div>
        <motion.div
          variants={variant2}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 1, delay: 1 }}
          className="h-auto p-8 "
        >
          <div>
            <div className="mb-8 flex flex-col gap-8">
              <h1 className="text-lg md:text-xl font-bold ">Expertise</h1>
              <p className="text-sm md:text-lg">
                Our team of seasoned professionals brings a wealth of experience
                to the table.
              </p>
            </div>
            <div className="my-8 flex flex-col gap-8">
              <h1 className="text-lg md:text-xl font-bold ">Partnerships</h1>
              <p className="text-sm md:text-lg">
                We collaborate with renowned technology companies, ensuring
                top-notch solutions.
              </p>
            </div>
            <div className="my-8 flex flex-col gap-8">
              <h1 className="text-lg md:text-xl font-bold ">
                Tailored Approach
              </h1>
              <p className="text-sm md:text-lg">
                We collaborate with renowned technology companies, ensuring
                top-notch solutions.
              </p>
            </div>
            <div className="my-8 flex flex-col gap-8">
              <h1 className="text-lg md:text-xl font-bold ">
                Consultation Scheduling
              </h1>
              <p className="text-sm md:text-lg">
                Book a 30-minute consultation with us to kickstart your journey
                to success
              </p>
              <Link
                href="https://calendly.com/marcbrown2024/crystallynne-llc-consultation"
                className="flex items-center justify-left gap-4 text-xl"
                target="_blank"
              >
                <HiChatBubbleLeftRight />
                <p className="titles py-2 text-[#3c68cd] cursor-pointer animate-pulse">
                  <span className="text-opacity-100">Book a consultation.</span>
                </p>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
