import React from "react";

const ServiceCard = ({ imgUrl, title, description }) => {
  return (
    <div className="hover:scale-105 ease-in duration-300">
      <div
        className="h-72 rounded-t-xl relative group bg-no-repeat"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
      </div>
      <div className=" h-[20rem] lg:h-[18rem] text-white rounded-b-xl bg-[#4f4f4f] py-6 px-4">
        <h5 className="text-xl font-semibold mb-8 text-center">{title}</h5>
        <p className="text-[#ADB7BE] leading-6">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
