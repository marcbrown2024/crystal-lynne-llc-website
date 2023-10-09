import React from "react";

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
  return (
    <div
      id="ourApproach"
      className="h-screen relative text-center"
    >
      <div className="relative z-20 max-w-[1240px] m-h-full mx-auto p-2 flex justify-center items-center">
        <h2 className="py-8 text-2xl text-center md:text-5xl font-bold">
          Our Approach
        </h2>
        <div className="w-full h-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10">
          {projects.map((project) => (
            <div className="w-full h-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44">
              <img src={project.image} />
              <div>
                <h4 className="text-4xl font-semibold text-center">
                  {project.title}
                </h4>
                <p className="text-lg text-center md:text-left">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full absolute z-0 top-[10%] bg-[#d0cdcd38] left-0 h-[650px] skew-y-6"></div>
    </div>
  );
};

export default OurApproach;
