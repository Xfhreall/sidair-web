"use client";

import React, { useState, useEffect } from "react";
import type { FC } from "react";
import Image from "next/image";
import soil from "@/public/background/watesqy.svg";
import alat1 from "@/public/fragment/alat1.svg";

const Watesqy: FC = () => {
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = soil.src;
    img.onload = () => {
      setImageHeight(img.height);
    };
  }, []);

  return (
    <section
      className="w-full relative overflow-hidden flex items-center justify-center z-30 -translate-y-56"
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

      {/* content */}
      <div className="text-white z-[31] w-full grid grid-cols-2 text-center items-center mx-20 ">
        <Image src={alat1} alt="alat1" className="h-2/3" />
        <div className="text-start space-y-4">
          <h1 className="text-7xl font-irish bg-gradient-to-t from-[#080502] to-[#472812] text-transparent bg-clip-text drop-shadow-">
            WATESQY
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur. Nunc nisi enim porttitor
            adipiscing malesuada euismod sit nunc malesuada. Orci mauris
            fermentum nisl vel. Aliquam arcu pellentesque turpis scelerisque
            posuere est urna integer habitant.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Watesqy;
