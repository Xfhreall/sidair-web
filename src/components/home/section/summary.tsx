"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import quake from "@/public/background/summary.svg";

const DataSummary = () => {
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = quake.src;
    img.onload = () => {
      setImageHeight(img.height);
    };
  }, []);

  return (
    <section
      className="w-full relative overflow-hidden -translate-y-1/3 flex flex-col items-center justify-center z-40"
      style={{ minHeight: imageHeight ? `${imageHeight}px` : "100vh" }}
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

      <div className="relative z-10 text-center text-[#C4A484] p-4">
        <h1 className="text-4xl md:text-7xl mb-4 font-irish bg-gradient-to-t from-[#745329] to-[#B3A088] text-transparent bg-clip-text">
          DATA SUMMARY
        </h1>
        <p className="text-3xl md:text-5xl font-bold text-[#B3A088] mb-8">
          36.5 C
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl text-[#B3A088]">
          <div className="bg-[#3D2B1F] bg-opacity-95 p-4 rounded-lg transform rotate-3">
            <h2 className="text-xl md:text-2xl font-irish mb-2">pH</h2>
            <p className="text-3xl md:text-5xl font-extrabold">4.57</p>
          </div>
          <div className="bg-[#3D2B1F] bg-opacity-95 p-4 rounded-lg transform -rotate-3">
            <h2 className="text-xl md:text-2xl mb-2 font-irish">
              Electrical Conductivity
            </h2>
            <p className="text-3xl md:text-5xl font-extrabold">0.11</p>
          </div>
          <div className="bg-[#3D2B1F] bg-opacity-95 p-4 rounded-lg transform -rotate-3">
            <h2 className="text-xl md:text-2xl mb-2 font-irish">TDS Meter</h2>
            <p className="text-3xl md:text-5xl font-extrabold">121.87</p>
          </div>
          <div className="bg-[#3D2B1F] bg-opacity-95 p-4 rounded-lg transform rotate-3">
            <h2 className="text-xl md:text-2xl mb-2 font-irish">PPM</h2>
            <p className="text-3xl md:text-5xl font-extrabold">100.57</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSummary;
