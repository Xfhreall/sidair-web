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
      className="h-[50vh] w-full relative z-[45] -translate-y-12"
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
        className="object-cover h-full w-full"
        fill
      />
    </footer>
  );
};

export default Footer;
