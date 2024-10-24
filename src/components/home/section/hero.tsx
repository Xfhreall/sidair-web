"use client";

import React from "react";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import bukit from "@/public/parallax/bukit.png";
import gunung from "@/public/parallax/gunung.png";
import langit from "@/public/parallax/langit2.jpg";
import tanaman from "@/public/parallax/tanaman.png";
import { Button } from "@/components/ui/button";

const ParallaxHero: React.FC = () => {
  return (
    <ParallaxProvider>
      <Content />
    </ParallaxProvider>
  );
};

function Content() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 50], [1, 0]);

  return (
    <div className="relative">
      <ParallaxBanner className="h-[140vh] flex justify-center items-center relative">
        {/* Background (Langit) */}
        <ParallaxBannerLayer speed={-20}>
          <Image
            src={langit}
            alt="Sky"
            className="object-cover"
            fill
            priority
          />
        </ParallaxBannerLayer>

        {/* Layer 1 (Gunung) */}
        <ParallaxBannerLayer
          translateX={[0, 90]}
          scale={[1, 3]}
          translateY={[0, 60]}
          speed={-15}
          shouldAlwaysCompleteAnimation={true}
        >
          <div className="absolute inset-x-0 bottom-8">
            <Image src={gunung} alt="Mountain" layout="responsive" priority />
          </div>
        </ParallaxBannerLayer>

        {/* Layer 2 (Bukit) */}
        <ParallaxBannerLayer
          speed={-10}
          translateY={[0, 80]}
          shouldAlwaysCompleteAnimation={true}
          className="z-10"
        >
          <div className="absolute inset-x-0 bottom-5">
            <Image src={bukit} alt="Hill" layout="responsive" priority />
          </div>
        </ParallaxBannerLayer>

        {/* Layer 3 (Tanaman) */}
        <ParallaxBannerLayer
          translateX={[0, -50]}
          translateY={[0, 30]}
          scale={[1, 3]}
          speed={1}
          shouldAlwaysCompleteAnimation={true}
          className="z-10"
        >
          <div className="absolute inset-x-0 bottom-0 ">
            <Image src={tanaman} alt="Plants" layout="responsive" priority />
          </div>
        </ParallaxBannerLayer>

        {/* Text Overlay */}
        <ParallaxBannerLayer
          speed={-80}
          translateY={[-38, 45]}
          scale={[0.1, 2.5]}
          className="z-20"
        >
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <h1 className="text-8xl font-irish text-primary text-center drop-shadow-lg">
              SIDAIR
            </h1>
            <motion.div style={{ opacity }}>
              <Button className="text-white w-[200px] h-12 font-bold mt-6 rounded-full scale-105 bg-primary hover:bg-opacity-90 transition-all shadow-lg">
                Hubungkan
              </Button>
            </motion.div>
          </div>
        </ParallaxBannerLayer>

        {/* Description Text */}
        <ParallaxBannerLayer
          speed={1}
          opacity={[0.8, 1]}
          shouldAlwaysCompleteAnimation={false}
          className="z-0"
        >
          <div className="absolute bottom-80 w-full text-center">
            <p className="text-5xl font-irish text-primary drop-shadow-md">
              Sistem Deteksi Air Filtrasi Irigasi
            </p>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}

export default ParallaxHero;
