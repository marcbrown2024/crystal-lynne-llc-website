import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";

const OurApproach = () => {
  const projects = [
    {
      id: 1,
      image: "/assets/organization.jpg",
      title: "Understanding Your Business",
      description:
        "We take the time to understand your business inside and out, gaining insights into your challenges, objectives, and unique requirements.",
    },
    {
      id: 2,
      image: "/assets/research.jpg",
      title: "Thorough Research",
      description:
        "Research is at the core of our process. We delve into industry trends, competitor analysis, and emerging technologies to develop a holistic understanding of your market.",
    },
    {
      id: 3,
      image: "/assets/tailored.jpg",
      title: "Tailored Solutions",
      description:
        "We believe in one-size-fits-none. Our solutions are customized to address your specific pain points, ensuring maximum impact and ROI.",
    },
    {
      id: 4,
      image: "/assets/partner.jpg",
      title: "Technology Partner Selection",
      description:
        "Leveraging our partnerships with leading software technology companies, we carefully match you with the right partner based on your needs, budget, and timeline.",
    },
    {
      id: 5,
      image: "/assets/support.jpg",
      title: "Ongoing Support",
      description:
        "We foster a long-term relationship with both parties involved. Our commitment doesn't end with implementation; we provide continuous support and improvements.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [currentProject, setCurrentProject] = useState(0);

  const handleNextProject = () => {
    setCurrentProject((prevProject) =>
      prevProject < projects.length - 1 ? prevProject + 1 : 0
    );
  };

  const handlePrevProject = () => {
    setCurrentProject((prevProject) =>
      prevProject > 0 ? prevProject - 1 : projects.length - 1
    );
  };

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
      id="ourApproach"
      className="breakpoint relative w-screen h-full text-center border-b-2 border-slate-200"
    >
      <div
        ref={ref}
        className="relative max-w-[1240px] h-full mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-x-8"
      >
        <div className="w-2/6 h-auto flex flex-col items-center justify-center">
          <motion.div
            variants={variant1}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="titles text-2xl text-center md:text-6xl font-bold text-[#3c68cd] my-12">
              Our Approach
            </div>

            <div className="sm:w-[250px] md:w-full flex items-center justify-between gap-8">
              <div className="btn hover:text-[#3c68cd] text-[50px]" onClick={handlePrevProject}>
                <HiArrowLeftCircle/>
              </div>
              {currentProject + 1} of {projects.length}
              <div className="btn hover:text-[#3c68cd] text-[50px]" onClick={handleNextProject}>
                <HiArrowRightCircle/>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={variant2}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-full flex flex-col"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={variant2}
              initial="initial"
              animate={index === currentProject ? "animate" : "initial"}
              transition={{ duration: 1, delay: 0.5 }}
              exit="exit"
              className={`w-full h-full flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-44 ${
                index !== currentProject ? "hidden" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                priority
              />
              <div>
                <h4 className="text-3xl font-semibold text-center mb-8">
                  {project.title}
                </h4>
                <p className="text-lg text-center md:text-left px-4">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="hidden xl:flex skewdiv w-full absolute -z-10 top-[13%] bg-[#d0cdcd38] left-0 h-[600px] lg:h-[700px] skew-y-3"></div>
      <div className="hidden xl:flex skewdiv w-full absolute -z-20 top-[10%] bg-[#d0cdcd38] left-0 h-[660px] lg:h-[760px] skew-y-3"></div>
    </div>
  );
};

export default OurApproach;
