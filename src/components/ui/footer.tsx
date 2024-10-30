"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import bg from "@/public/background/footer.svg";
import type { FC } from "react";

const Footer: FC = () => {
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = bg.src;
    img.onload = () => {
      setImageHeight(img.height);
    };
  }, []);
  return (
    <footer
      className="h-[60vh] w-full relative scale-y-105 -translate-y-4"
      style={
        {
          minHeight: imageHeight ? `${imageHeight}px` : "100vh",
          "--block-base-size": "min(20vw, 200px)",
        } as React.CSSProperties
      }
    >
      <Image
        src={bg}
        alt="bg footer"
        className="object-cover absolute h-full w-full scale-y-110 z-0"
        fill
      />
      <div className="relative z-20 flex flex-col items-center md:items-start justify-center h-full text-center md:text-start ml-[10%] text-[#B6A396]">
        <h1 className="font-irish text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2">
          SIDAIR
        </h1>
        <p className="font-irish text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-md">
          Sistem Deteksi Air Filtrasi Irigasi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
