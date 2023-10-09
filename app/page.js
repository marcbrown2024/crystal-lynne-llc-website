"use client";

import Navbar from "@/components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Services from "../components/Services";
import OurApproach from "../components/OurApproach";
import Contact from "../components/Contact";
import TogglePageTheme from "@/components/TogglePageTheme";

export default function Home() {
  return (
    <div className="w-full h-auto">
      <Navbar />
      <TogglePageTheme />
      <Main />
      <About />
      <Services />
      <OurApproach />
      <Contact />
    </div>
  );
}
