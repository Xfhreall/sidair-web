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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (sectionRef.current) {
        setSectionHeight(sectionRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const tanamanTranslateY = useTransform(
    scrollY,
    [0, sectionHeight, sectionHeight, sectionHeight * 2],
    [0, sectionHeight / 2, sectionHeight / 2, -sectionHeight * 2]
  );
  const tanamanTranslateX = useTransform(scrollY, [0, 200], [0, -200]);
  const tanamanScale = useTransform(scrollY, [0, sectionHeight / 2], [1, 2]);
  const gunungTranslateY = useTransform(
    scrollY,
    [0, sectionHeight],
    [0, sectionHeight / 2]
  );
  const gunungTranslateX = useTransform(scrollY, [0, 200], [0, 200]);
  const gunungScale = useTransform(scrollY, [0, sectionHeight / 2], [1, 2]);
  const textTranslateY = useTransform(
    scrollY,
    [0, sectionHeight * 0.5],
    [0, 200]
  );
  const textScale = useTransform(scrollY, [0, sectionHeight * 0.5], [1, 2]);
  const textOpacity = useTransform(scrollY, [0, sectionHeight * 0.3], [1, 0]);

  return (
    <div
      className="relative h-[200vh] overflow-hidden"
      ref={sectionRef}
      id="hero"
    >
      <ParallaxBanner className="h-full">
        {/* Background (Langit) */}
        <ParallaxBannerLayer speed={-20}>
          <Image
            src={langit}
            alt="Sky"
            className="object-cover object-center"
            fill
            priority
            quality={90}
          />
        </ParallaxBannerLayer>

        {/* Layer 1 (Gunung) */}
        <ParallaxBannerLayer speed={-15}>
          <motion.div
            className="absolute inset-x-0 bottom-[50%] sm:bottom-[40%] md:bottom-[40%]"
            style={{
              translateY: gunungTranslateY,
              translateX: gunungTranslateX,
              scale: gunungScale,
            }}
          >
            <Image
              src={gunung}
              alt="Mountain"
              layout="responsive"
              priority
              className="scale-[1.75] sm:scale-125 md:scale-125 lg:scale-100"
            />
          </motion.div>
        </ParallaxBannerLayer>

        {/* Layer 2 (Bukit) */}
        <ParallaxBannerLayer speed={-10} className="z-10">
          <motion.div
            className="absolute inset-x-0 bottom-[45%] sm:bottom-[37%] md:bottom-[37%]"
            style={{
              translateY: gunungTranslateY,
              translateX: gunungTranslateX,
              scale: gunungScale,
            }}
          >
            <Image
              src={bukit}
              alt="Hill"
              layout="responsive"
              priority
              className="scale-[1.75] sm:scale-125 md:scale-110 lg:scale-100"
            />
          </motion.div>
        </ParallaxBannerLayer>

        {/* Layer 3 (Tanaman) */}
        <ParallaxBannerLayer className="z-20">
          <motion.div
            className="absolute inset-x-0 bottom-[45%] sm:bottom-[35%] md:bottom-[40%]"
            style={{
              translateY: tanamanTranslateY,
              translateX: tanamanTranslateX,
              scale: tanamanScale,
            }}
          >
            <Image
              src={tanaman}
              alt="Plants"
              layout="responsive"
              priority
              className=" scale-[1.75] md:scale-125 lg:scale-100"
            />
          </motion.div>
        </ParallaxBannerLayer>

        {/* Text and Button Overlay */}
        <ParallaxBannerLayer className="z-30">
          <motion.div
            className="absolute inset-x-0 top-[20%] flex flex-col items-center justify-center"
            style={{
              opacity: textOpacity,
              scale: textScale,
              translateY: textTranslateY,
            }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-irish text-primary text-center drop-shadow-lg mb-4">
              SIDAIR
            </h1>
            <motion.div style={{ opacity }}>
              <Link href="#filtrasi" className="z-50">
                <Button className="text-white w-28 sm:w-40 md:w-52 h-8 sm:h-10 md:h-12 text-xs sm:text-base md:text-lg font-bold rounded-full bg-primary hover:bg-opacity-90 transition-all shadow-lg">
                  Hubungkan
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}

export default ParallaxHero;
