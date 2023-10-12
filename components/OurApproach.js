import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

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

  const variant1 = {
    initial: { x: -500, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const variant2 = {
    initial: { y: 500, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div id="ourApproach" className="breakpoint h-screen relative text-center border-b-2 border-slate-200">
      <div
        ref={ref}
        className="relative z-20 max-w-[1240px] m-h-full mx-auto p-2 flex flex-col lg:flex-row justify-center items-center"
      >
        <motion.div
          variants={variant1}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 1, delay: 0.5 }}
          className="titles py-8 text-2xl text-center md:text-5xl font-bold text-[#3c68cd]"
        >
          Our Approach
        </motion.div>
        <motion.div
          variants={variant2}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-full flex overflow-x-scroll z-10 custom-scrollbar"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full h-full flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                priority
              />
              <div>
                <h4 className="text-4xl font-semibold text-center mb-4">
                  {project.title}
                </h4>
                <p className="text-lg text-center md:text-left mb-4">
                  {project.description}
                </p>
              </div>
              <div>{project.id} of 5</div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="skewdiv w-full absolute z-0 top-[10%] bg-[#d0cdcd38] left-0 h-[600px] lg:h-[700px] skew-y-6"></div>
    </div>
  );
};

export default OurApproach;
