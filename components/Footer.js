import React from "react";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="w-full h-20 flex items-center justify-center ">
      <div className="w-full flex items-center justify-center ">NEAM Technology Solutions, L.L.C.</div>
      <Link className=" flex items-center justify-end p-4 " href="/#main">
        <div className="darkshadow rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
          <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
        </div>
      </Link>
    </div>
  );
};

export default Footer;
