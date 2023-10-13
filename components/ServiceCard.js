import React from "react";
import Image from "next/image";

const ServiceCard = ({ imgUrl, title, description }) => {
  return (
    <div className="hover:scale-90 ease-in duration-300 rounded-xl p-8">
      <div className="relative w-[20rem] h-[14rem]">
        <Image
          className="rounded-t-xl"
          src={imgUrl}
          alt={title}
          fill={true}
          priority
        ></Image>
      </div>
      <div className="w-[20rem] h-[14rem] flex flex-col items-center justify-center text-white rounded-b-xl bg-[#4f4f4f] p-4 gap-y-4">
        <div className="text-lg font-semibold text-center">{title}</div>
        <div className="leading-6 text-[13px]">{description}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
