"use client";

import React from "react";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import Image from "next/image";

import bukit from "@/public/parallax/bukit.png";
import gunung from "@/public/parallax/gunung.png";
import langit from "@/public/parallax/langit.png";
import tanaman from "@/public/parallax/tanaman.png";

const ParallaxHero: React.FC = () => {
  return (
    <ParallaxProvider>
      <Content />
    </ParallaxProvider>
  );
};

function Content() {
  return (
    <div className="relative">
      <ParallaxBanner className="h-[140vh] flex justify-center items-center">
        {/* Background (Langit) */}
        <ParallaxBannerLayer speed={-20}>
          <Image
            src={langit}
            alt="Sky"
            className="object-contain"
            fill
            priority
          />
        </ParallaxBannerLayer>

        {/* Layer 1 (Gunung) */}
        <ParallaxBannerLayer
          translateX={[0, 30]}
          scaleX={[1, 1.1]}
          scale={[1, 1.5]}
          speed={-15}
          shouldAlwaysCompleteAnimation={true}
        >
          <div className="absolute inset-x-0 bottom-20 overflow-hidden">
            <Image src={gunung} alt="Mountain" layout="responsive" priority />
          </div>
        </ParallaxBannerLayer>

        {/* Layer 2 (Bukit) */}
        <ParallaxBannerLayer
          speed={-10}
          translateY={[0, 40]}
          shouldAlwaysCompleteAnimation={true}
        >
          <div className="absolute inset-x-0 bottom-10">
            <Image src={bukit} alt="Hill" layout="responsive" priority />
          </div>
        </ParallaxBannerLayer>

        {/* Layer 3 (Tanaman) */}
        <ParallaxBannerLayer
          translateX={[0, -20]}
          scaleX={[1, 1.3]}
          scale={[1, 1.1]}
          speed={-5}
          shouldAlwaysCompleteAnimation={true}
        >
          <div className="absolute inset-x-0 bottom-12 overflow-hidden">
            <Image src={tanaman} alt="Plants" layout="responsive" priority />
          </div>
        </ParallaxBannerLayer>

        {/* Text Overlay */}
        <ParallaxBannerLayer speed={-10}>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl font-bold font-irish text-primary text-center shadow-lg">
              SIDAIR
            </h1>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}

export default ParallaxHero;
