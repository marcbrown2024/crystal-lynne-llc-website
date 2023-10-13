"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Services from "../components/Services";
import OurApproach from "../components/OurApproach";
import Consultation from "../components/Consultation";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div>
        <Navbar />
      </div>
      <div>
        <Main />
        <About />
        <Services />
        <OurApproach />
        <Consultation />
        <Contact />
      </div>
    </div>
  );
}
