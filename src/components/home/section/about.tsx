import React from "react";
import type { FC } from "react";

const About: FC = () => {
  return (
    <section className="py-20 bg-primary h-screen">
      <div className="container mx-auto px-4 my-auto h-full flex flex-col justify-center">
        <h2 className="text-8xl font-irish text-center mb-10 bg-gradient-to-t from-[#2A503B] to-[#CFFF75] text-transparent bg-clip-text drop-shadow-[0_4px_4px_rgba(42,80,59,0.8)]">
          ABOUT SIDAIR
        </h2>
        <div className="p-4 ">
          <p className="text-white text-2xl text-center">
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
