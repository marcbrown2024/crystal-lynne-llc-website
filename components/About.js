import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/Conference-room.jpeg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] h-full m-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center p-4 ">
          <div className="text-4xl font-bold flex flex-col text-center py-8 md:py-8 gap-0 md:gap-4">
            Why Choose
            <span className="text-4xl text-[#3c68cd] font-bold">
              CrystaLynne LLC?
            </span>
          </div>
          <p className="py-2 text-gray-600 leading-8">
            At CrystaLynne LLC, we specialize in driving business growth and
            efficiency through tailored software solutions. Whether you&apos;re
            a small, medium, or large enterprise, we are here to assist you in
            optimizing your operations, automating processes, and achieving your
            goals. With years of experience and a strong network of reputable
            technology partners, we provide innovative solutions that cater to
            your unique business needs.
          </p>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-[4px] hover:scale-105 ease-in duration-300">
            <Image src={AboutImg} className="rounded-xl" alt="/" />
          </div>
        </div>
        <div className="w-full h-auto p-8 -mt-12 md:mt-8">
          <div>
            <div className="my-8 flex flex-col gap-8 border-b border-slate-300 pb-4">
              <h1 className="text-lg md:text-xl font-bold ">Expertise</h1>
              <p className="text-sm md:text-lg">
                Our team of seasoned professionals brings a wealth of experience
                to the table.
              </p>
            </div>
            <div className="my-8 flex flex-col gap-8 border-b border-slate-300 pb-4">
              <h1 className="text-lg md:text-xl font-bold ">Partnerships</h1>
              <p className="text-sm md:text-lg">
                We collaborate with renowned technology companies, ensuring
                top-notch solutions.
              </p>
            </div>
            <div className="my-8 flex flex-col gap-8 border-b border-slate-300 pb-4">
              <h1 className="text-lg md:text-xl font-bold ">Tailored Approach</h1>
              <p className="text-sm md:text-lg">
                We collaborate with renowned technology companies, ensuring
                top-notch solutions.
              </p>
            </div>
            <div className="my-8 flex flex-col gap-8">
              <h1 className="text-lg md:text-xl font-bold ">Consultation Scheduling</h1>
              <p className="text-sm md:text-lg">
                Book a 30-minute consultation with us to kickstart your journey
                to success
              </p>
              <Link href="/#consultation">
                <p className="py-2 text-gray-600 underline cursor-pointer">
                  Book a consultation.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
