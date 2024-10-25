"use client";

import React, { useState, useEffect } from "react";
import type { FC } from "react";
import Image from "next/image";
import soil from "@/public/background/watesqy.svg";

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
      className="w-full relative overflow-hidden -mt-48 flex flex-col items-center"
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
    </section>
  );
};

export default Watesqy;