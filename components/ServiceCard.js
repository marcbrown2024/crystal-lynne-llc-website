import React from "react";
import Link from "next/link";

const ServiceCard = ({ imgUrl, title, description }) => {
  return (
    <div className="hover:scale-105 ease-in duration-300">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group bg-no-repeat bg-center"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
      </div>
      <div className="h-72 text-white rounded-b-xl bg-[#4f4f4f] py-6 px-4">
        <h5 className="text-xl font-semibold mb-8">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
