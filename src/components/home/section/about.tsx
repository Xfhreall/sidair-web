import React from "react";
import type { FC } from "react";
const About: FC = () => {
  return (
    <section
      className="py-20 bg-primary h-[80vh] md:h-screen relative w-full rounded-t-4xl -translate-y-6 z-20"
      id="about"
    >
      <div className="container mx-auto px-4 my-auto h-full flex flex-col justify-center">
        <h2 className="md:text-8xl sm:text-7xl text-5xl font-irish text-center mb-10 bg-gradient-to-t from-[#2A503B] to-[#CFFF75] text-transparent bg-clip-text drop-shadow-[0_4px_4px_rgba(42,80,59,0.8)]">
          ABOUT SIDAIR
        </h2>
        <div className="p-4 ">
          <p className="text-white md:text-2xl sm:text-xl text-lg text-center">
            Lorem ipsum dolor sit amet consectetur. Nunc nisi enim porttitor
            adipiscing malesuada euismod sit nunc malesuada. Orci mauris
            fermentum nisl vel. Aliquam arcu pellentesque turpis scelerisque
            posuere est urna integer habitant. Sit turpis morbi at mi leo in.
            Viverra aliquam nisi maecenas amet id etiam urna id ut urna.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
