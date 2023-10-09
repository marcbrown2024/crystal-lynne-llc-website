"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const TogglePageTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-[45%] left-4 group">
      {theme === "dark" ? (
        <button
          className="flex justify-center p-4"
          onClick={() => setTheme("light")}
        >
          <RiSunLine className="hover:text-[#61e2e7] cursor-pointer text-[2rem] md:text-[2.5rem]" />
        </button>
      ) : (
        <button
          className="flex justify-center p-4"
          onClick={() => setTheme("dark")}
        >
          <RiMoonLine className="hover:text-[#61e2e7] cursor-pointer text-[2rem] md:text-[2.5rem]" />
        </button>
      )}
      <span className={`absolute right-28 top-16 w-32 h-6 flex items-center justify-center p-4 ${
        theme ==="dark" ? "bg-[#A0A0A0] text-[#000]" : "bg-[#00040f] text-[#fff]"} rounded-md opacity-0 group-hover:opacity-100 transition-opacity`}>
        {theme == "dark" ? "light" : "dark"} mode
        <div className={`rotate-45 border-solid ${theme ==="dark" ? "border-l-[#A0A0A0]" : "border-l-[#00040f]"}  border-l-8 border-y-transparent border-y-[16px] border-r-0 absolute bottom-4 right-0`}></div>
      </span>
    </div>
  );
};

export default TogglePageTheme;
