"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import quake from "@/public/background/summary.svg";
import ph from "@/public/fragment/batuPh.svg";
import ec from "@/public/fragment/batuEc.svg";
import tds from "@/public/fragment/batuTds.svg";
import ppm from "@/public/fragment/batuPpm.svg";

export default function Component() {
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = quake.src;
    img.onload = () => {
      setImageHeight(img.height);
    };
  }, []);

  const DataBlock = ({
    image,
    title,
    value,
    className,
  }: {
    image: string;
    title: string;
    value: string;
    className?: string;
  }) => {
    return (
      <div className={`relative ${className}`}>
        <Image src={image} alt={title} layout="fill" objectFit="contain" />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-0 sm:space-y-2">
          <h2 className="text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-irish text-[#C4A484]">
            {title}
          </h2>
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#C4A484]">
            {value}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section
      className="w-full relative overflow-hidden flex flex-col items-center justify-center z-40 -translate-y-1/3"
      style={
        {
          minHeight: imageHeight ? `${imageHeight}px` : "100vh",
          "--block-base-size": "min(20vw, 200px)",
        } as React.CSSProperties
      }
    >
      <Image
        src={quake}
        alt="Cracked earth background"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        quality={100}
        priority
        className="z-0"
      />

      <div className="relative z-10 text-center text-[#C4A484] p-4 w-full h-full-translate-y-1/2">
        <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl mb-4 font-irish bg-gradient-to-t from-[#745329] to-[#B3A088] text-transparent bg-clip-text">
          DATA SUMMARY
        </h1>
        <p className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-[#B3A088] mb-8">
          36.5 C
        </p>
        <div className="grid grid-cols-2 w-11/12 sm:w-10/12 md:w-9/12 lg:w-9/12 xl:w-9/12 mx-auto">
          <DataBlock
            image={ph}
            title="pH"
            value="4.57"
            className="aspect-square w-[calc(var(--block-base-size)*2)] h-[calc(var(--block-base-size))]"
          />
          <DataBlock
            image={ec}
            title="Electrical Conductivity"
            value="0.11"
            className="aspect-[3/2] w-[calc(var(--block-base-size)*3)] h-[calc(var(--block-base-size))] -translate-x-8"
          />
          <DataBlock
            image={tds}
            title="TDS Meter"
            value="121.87"
            className="aspect-square w-[calc(var(--block-base-size)*2)] h-[calc(var(--block-base-size))]"
          />
          <DataBlock
            image={ppm}
            title="PPM"
            value="100.57"
            className="aspect-square w-[calc(var(--block-base-size)*2.2)] h-[calc(var(--block-base-size))]"
          />
        </div>
      </div>
    </section>
  );
}
