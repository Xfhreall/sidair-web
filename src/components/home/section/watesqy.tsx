"use client";

import React, { useState, useEffect } from "react";
import type { FC } from "react";
import Image, { StaticImageData } from "next/image";
import soil from "@/public/background/watesqy.svg";

const Summary: FC = () => {
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = (soil as StaticImageData).src;
    img.onload = () => {
      setImageHeight(img.height);
    };
  }, []);

  return (
    <section
      className="w-full relative overflow-hidden -mt-48 flex items-center"
      style={{ minHeight: imageHeight ? `${imageHeight}px` : "100vh" }}
    >
      <Image
        src={soil}
        alt="Soil background"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        quality={100}
        priority
        className="z-0"
      />
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center py-16 sm:py-24 lg:py-32">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Summary</h2>
          <p className="text-lg">
            Add your summary content here. This text will be displayed over the
            soil background.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
