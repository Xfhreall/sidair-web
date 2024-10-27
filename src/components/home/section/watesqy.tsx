"use client";

import type { FC } from "react";
import Image from "next/image";
import soil from "@/public/background/watesqy.svg";

const Watesqy: FC = () => {
  return (
    <section
      className="w-full relative overflow-hidden -mt-48 flex flex-col items-center"
      style={{ minHeight: "100vh" }}
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
