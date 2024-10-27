"use client";

import type { FC } from "react";
import Image from "next/image";
import soil from "@/public/background/watesqy.svg";

const Watesqy: FC = () => {
  return (
    <section className="w-full relative flex flex-col items-center h-screen">
      <Image
        src={soil}
        alt="Soil background"
        fill
        objectPosition="center"
        sizes="100vw"
        objectFit="cover"
        quality={100}
        priority
        className="z-50"
      />

      {/* content */}
    </section>
  );
};

export default Watesqy;
