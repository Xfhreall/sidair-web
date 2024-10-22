"use client";

import React from "react";
import {
  ParallaxProvider,
  Parallax,
  ParallaxBanner,
} from "react-scroll-parallax";
import { motion } from "framer-motion";

export default function Component() {
  return (
    <ParallaxProvider>
      <NatureParallax />
    </ParallaxProvider>
  );
}

function NatureParallax() {
  return (
    <div className="relative">
      <ParallaxBanner
        layers={[
          { image: "/placeholder.svg?height=1080&width=1920", speed: -20 },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <h1 className="text-6xl font-bold text-white text-center shadow-lg">
                  Welcome to Natures Beauty
                </h1>
              </div>
            ),
          },
          { image: "/placeholder.svg?height=1080&width=1920", speed: -10 },
          {
            speed: -5,
            children: (
              <div className="absolute inset-0 flex items-end justify-center pb-20">
                <motion.div
                  className="w-32 h-32 bg-green-400 rounded-full opacity-75"
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />
              </div>
            ),
          },
        ]}
        className="h-[200vh]"
      />
      <Parallax
        translateY={[0, 100]}
        className="absolute inset-x-0 bottom-0 h-32"
      >
        <div className="h-full bg-gradient-to-t from-green-800 to-transparent" />
      </Parallax>
      <AboutUs />
      <Projects />
    </div>
  );
}

function AboutUs() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-green-800">
          About Our Nature Reserve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Parallax speed={5}>
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
          </Parallax>
          <Parallax speed={-5}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-700">
                Conservation Efforts
              </h3>
              <p className="text-gray-700">
                Through sustainable practices and educational programs, we
                strive to protect endangered species and their habitats. Join us
                in our mission to ensure a greener future for generations to
                come.
              </p>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}

function Projects() {
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
            <Parallax key={index} speed={index % 2 === 0 ? 5 : -10}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-green-700">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
}
