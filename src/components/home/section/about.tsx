import React from "react";
import type { FC } from "react";
const About: FC = () => {
  return (
    <section
      className="py-20 bg-primary h-[80vh] md:h-screen relative w-full rounded-t-4xl -translate-y-6 z-20"
      id="about"
    >
      <div className="container mx-auto my-auto px-8 h-full flex flex-col justify-center">
        <h2 className="lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-irish text-center lg:mb-10 md:mb-8 sm:mb-5 mb-2 bg-gradient-to-t from-[#2A503B] to-[#CFFF75] text-transparent bg-clip-text drop-shadow-[0_4px_4px_rgba(42,80,59,0.8)]">
          ABOUT SIDAIR
        </h2>
        <div className="p-4 ">
          <p className="text-white lg:text-xl md:text-base sm:text-sm text-xs text-center">
            Welcome to SIDAIR: Intelligent Water Quality Detection System and
            Advanced Catalytic Filtration with a Reticulation Model for
            Agricultural Irrigation - an innovative web-based system designed to
            monitor and enhance irrigation water quality through advanced
            detection and catalytic filtration. Our mission is to support
            agricultural productivity and sustainability by ensuring water used
            for irrigation meets high-quality standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
