import React from "react";
import type { FC } from "react";

const About: FC = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-green-800">
          About Our Nature Reserve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
              Our Mission
            </h3>
            <p className="text-gray-700">
              We are dedicated to preserving the natural beauty of our world.
              Our nature reserve provides a sanctuary for diverse flora and
              fauna, offering visitors a chance to connect with the wonders of
              the natural world.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
              Conservation Efforts
            </h3>
            <p className="text-gray-700">
              Through sustainable practices and educational programs, we strive
              to protect endangered species and their habitats. Join us in our
              mission to ensure a greener future for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
