"use client";
import React, { useRef } from "react";
import ServiceCard from "./ServiceCard";
import { motion, useInView } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Custom Software Solution",
    description:
      "Our team of experts specializes in creating custom software that aligns perfectly with your business objectives. From streamlining operations to enhancing customer experiences, we design software that works for you.",
    image: "/assets/Custom.png",
  },
  {
    id: 2,
    title: "Systems Automation",
    description:
      "Say goodbye to manual, time-consuming tasks. We implement systems automation solutions that optimize your workflows, improve accuracy, and free up your valuable resources.",
    image: "/assets/automation.png",
  },
  {
    id: 3,
    title: "Chatbots and AI-driven solution",
    description:
      "Harness the power of artificial intelligence with our chatbot and AI-driven solutions. Enhance customer support, automate routine inquiries, and deliver exceptional user experiences.",
    image: "/assets/chatbots.jpg",
  },
  {
    id: 4,
    title: "Vendor and Technology Partner Selection",
    description:
      "We work with a range of reputable software technology companies. Leveraging our expertise, we carefully match your business with the most suitable technology partner, ensuring a mutually beneficial relationship.",
    image: "/assets/vendors.jpg",
  },
  {
    id: 5,
    title: "Consultations",
    description:
      "Our journey begins with a 30-minute consultation. During this session, we use a comprehensive 10-question questionnaire to delve into your business specific needs. This forms the foundation of our partnership.",
    image: "/assets/consulting.png",
  },
];
const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div id="services" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <div id="projects">
          <h2 className="text-center text-4xl font-bold text-[#3c68cd] mt-4 mb-12">
            Our Services
          </h2>
          <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 p-4">
            {ServicesData.map((service, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
                className={
                  index >= ServicesData.length - 2 ? "md:relative md:left-52" : ""
                }
              >
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  imgUrl={service.image}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
