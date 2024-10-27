"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import bukit from "@/public/parallax/bukit2.png";
import gunung from "@/public/parallax/gunung.png";
import langit from "@/public/parallax/langit2.jpg";
import tanaman from "@/public/parallax/tanaman.png";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const tanamanRef = useRef<HTMLDivElement>(null);
  const [tanamanHeight, setTanamanHeight] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    if (tanamanRef.current) {
      setTanamanHeight(tanamanRef.current.offsetHeight);
    }
    if (sectionRef.current) {
      setSectionHeight(sectionRef.current.offsetHeight);
    }
  }, []);

  const endPoint = sectionHeight - window.innerHeight;

  const tanamanTranslateX = useTransform(
    scrollY,
    [0, endPoint * 0.6, endPoint * 0.6 + 1, endPoint],
    [0, -160, -160, -30]
  );
  const tanamanScale = useTransform(
    scrollY,
    [0, endPoint * 0.6, endPoint * 0.6 + 1, endPoint],
    [1, 1.3, 1.3, 1.8]
  );
  const tanamanTranslateY = useTransform(
    scrollY,
    [0, endPoint * 0.6, endPoint * 0.6 + 1, endPoint, endPoint * 1.5],
    [0, 130, 130, -tanamanHeight + 100, tanamanHeight * 2],
    { clamp: true }
  );

  const textOverlayY = useTransform(
    scrollY,
    [endPoint * 0.6, endPoint * 0.9],
    [1, 0]
  );
  const descOverlayY = useTransform(
    scrollY,
    [endPoint * 0.6, endPoint * 0.9],
    [1, 0]
  );

  return (
    <div className="relative" ref={sectionRef}>
      <ParallaxBanner className="h-[120vh] md:h-[140dvh] flex justify-center items-center relative">
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
          <div className="absolute inset-x-0 md:bottom-56 lg:bottom-0 bottom-64 sm:bottom-48 scale-[1.5] sm:scale-105 lg:scale-100">
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
          <div className="absolute inset-x-0 lg:-bottom-5 sm:bottom-40 bottom-52">
            <Image src={bukit} alt="Hill" layout="responsive" priority />
          </div>
        </ParallaxBannerLayer>

        {/* Layer 3 (Tanaman) - Combined animation */}
        <ParallaxBannerLayer
          translateY={[0, 30]}
          speed={1}
          shouldAlwaysCompleteAnimation={true}
          className="z-20"
        >
          <motion.div
            ref={tanamanRef}
            className="absolute inset-x-0 bottom-32 md:bottom-36 lg:bottom-0"
            style={{
              translateX: tanamanTranslateX,
              translateY: tanamanTranslateY,
              scale: tanamanScale,
            }}
          >
            <Image
              src={tanaman}
              alt="Plants"
              layout="responsive"
              priority
              className="scale-[2.5] sm:scale-150 md:scale-125 lg:scale-100"
            />
          </motion.div>
        </ParallaxBannerLayer>

        {/* Text Overlay */}
        <ParallaxBannerLayer
          speed={-80}
          translateY={[-40, 45]}
          scale={[0.1, 2.5]}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: textOverlayY }}
          >
            <h1 className="text-6xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-9xl font-irish text-primary text-center drop-shadow-lg">
              SIDAIR
            </h1>
          </motion.div>
        </ParallaxBannerLayer>

        {/* Button Layer */}
        <ParallaxBannerLayer className="z-40">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div style={{ opacity }}>
              <Link href="#about" className="z-50">
                <Button className="text-white w-[150px] sm:w-[180px] md:w-[200px] h-10 sm:h-11 md:h-12 text-sm sm:text-base md:text-lg font-bold rounded-full bg-primary hover:bg-opacity-90 transition-all shadow-lg mt-8 md:mt-0">
                  Hubungkan
                </Button>
              </Link>
            </motion.div>
          </div>
        </ParallaxBannerLayer>

        {/* Description Text */}
        <ParallaxBannerLayer
          speed={1}
          opacity={[0.8, 1]}
          shouldAlwaysCompleteAnimation={false}
          className="z-[5]"
        >
          <motion.div
            className="absolute bottom-80 md:bottom-96 lg:bottom-80 w-full text-center px-4"
            style={{ opacity: descOverlayY }}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-irish text-primary drop-shadow-md">
              Sistem Deteksi Air Filtrasi Irigasi
            </p>
          </motion.div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}

export default ParallaxHero;
