import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/Conference-room.jpeg";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

const Consultation = () => {
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
      id="consultation"
      className="breakpoint relative w-screen h-auto p-2 flex items-center py-16 border-b-2 border-slate-200"
    >
      <div
        ref={ref}
        className="relative max-w-[1240px] h-auto m-auto flex flex-col xl:flex-row lg:mt-8"
      >
        <motion.div
          variants={variant1}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center justify-start text-center lg:text-left px-8 py-12 gap-y-4 lg:mt-20"
        >
          <div className="titles text-2xl text-center md:text-4xl font-bold text-[#3c68cd] mb-8">
            Paid Consultation with a Path to Savings
          </div>
          <div className="w-auto text-lg mb-4">
            At CrystaLynne LLC, we understand that investing in business
            development and software solutions is a significant decision. We
            offer paid consultations to provide valuable insights and potential
            savings.
          </div>
          <div className="w-auto text-lg mb-4">
            Your initial consultation investment reduces overall solution costs,
            demonstrating our commitment to your success and ensuring
            cost-effective value.
          </div>
          <div className="w-auto text-lg">
            Ready to take the first step towards business growth and efficiency?
          </div>
        </motion.div>
        <div className="flex md:hidden items-center justify-center text-xs">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        </div>
        <motion.div
          variants={variant2}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center px-8 py-8 lg:py-32"
        >
          <div className="text-2xl mb-8">
            <strong>Here&apos;s how it works:</strong>
          </div>
          <ol className="list-decimal ml-8 text-lg mb-4">
            <li className="mb-8">
              <strong>Book a Consultation:</strong> Schedule a 30-minute
              consultation with our experts to discuss your business&apos;s
              specific needs and challenges. A nominal consultation fee of
              [insert fee amount] applies.
            </li>
            <li className="mb-8">
              <strong>Valuable Insights:</strong> During the consultation,
              you&apos;ll gain access to our expertise and receive tailored
              recommendations for your business.
            </li>
            <li>
              <strong>Seamless Transition:</strong> If, after the consultation,
              you choose to proceed with CrystaLynne LLC&apos;s services and
              sign a contract for our business development or software
              solutions, we&apos;ll deduct the full consultation fee from the
              project&apos;s overall cost.
            </li>
          </ol>
          <Link
            href="https://calendly.com/marcbrown2024/crystallynne-llc-consultation"
            target="_blank"
            className="mt-6 inline-block bg-blue-600 text-white py-3 px-4 lg:px-6 rounded-full text-sm lg:text-lg font-semibold hover:bg-blue-800"
          >
            Schedule Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Consultation;
