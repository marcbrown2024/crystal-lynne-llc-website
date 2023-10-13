"use client";

import React from "react";
import Main from "../components/Main";
import About from "../components/About";
import Services from "../components/Services";
import OurApproach from "../components/OurApproach";
import Consultation from "../components/Consultation";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="w-full h-auto z-0">
      <Main />
      <About />
      <Services />
      <OurApproach />
      <Consultation />
      <Contact />
    </div>
  );
}
