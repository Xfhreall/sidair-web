import React from "react";
import type { FC } from "react";

const Summary: FC = () => {
  return (
    <section className="py-20 bg-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-green-800">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Reforestation",
              description:
                "Planting thousands of native trees to restore our forests.",
            },
            {
              title: "Wildlife Protection",
              description: "Creating safe habitats for endangered species.",
            },
            {
              title: "Eco-Education",
              description:
                "Teaching visitors about the importance of conservation.",
            },
          ].map((project, index) => (
            <div key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-green-700">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Summary;
