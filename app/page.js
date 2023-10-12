"use client";

import React from "react";
import Main from "../components/Main";
import About from "../components/About";
import Services from "../components/Services";
import OurApproach from "../components/OurApproach";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="w-full h-auto z-0 overflow-hidden">
      <Main />
      <About />
      <Services />
      <OurApproach />
      <Contact />
    </div>
  );
}
