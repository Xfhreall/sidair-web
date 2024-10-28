"use client";

import React, { useState, useEffect } from "react";
import type { FC } from "react";
import Image from "next/image";
import filtrasi from "@/public/background/filtrasi.svg";

const Filtrasi: FC = () => {
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = filtrasi.src;
    img.onload = () => {
      setImageHeight(img.height);
    };
  }, []);

  return (
    <section
      className="w-full relative overflow-hidden -mt-[800px] flex flex-col items-center -translate-y-1/2 z-[45]"
      style={{ minHeight: imageHeight ? `${imageHeight}px` : "100vh" }}
    >
      <Image
        src={filtrasi}
        alt="filtrasi background"
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

export default Filtrasi;
