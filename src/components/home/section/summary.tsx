"use client";

import type { FC } from "react";
import Image from "next/image";
import quake from "@/public/background/summary.svg";

const Summary: FC = () => {
  return (
    <section
      className="w-full relative overflow-hidden -mt-80 flex flex-col items-center"
      style={{ minHeight: "100vh" }}
    >
      <Image
        src={quake}
        alt="quake background"
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

export default Summary;
