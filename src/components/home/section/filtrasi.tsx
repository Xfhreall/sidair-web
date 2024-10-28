"use client";

import { FC, useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import filtrasi from "@/public/background/filtrasi.svg";
import batu from "@/public/fragment/batuFil.svg";

const Filtrasi: FC = () => {
  const [time, setTime] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const formatTime = useCallback((seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }, []);

  useEffect(() => {
    const totalTime = 5 * 3600;
    const animationDuration = 5000;

    let animationInterval: NodeJS.Timeout;
    let countdownInterval: NodeJS.Timeout;

    if (isAnimating) {
      const startTime = Date.now();

      animationInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const currentProgress = Math.min(elapsedTime / animationDuration, 1);
        const animatedTime = Math.floor(currentProgress * totalTime);
        setTime(animatedTime);

        if (elapsedTime >= animationDuration) {
          clearInterval(animationInterval);
          setIsAnimating(false);
        }
      }, 16);
    } else if (time > 0) {
      countdownInterval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) return prevTime - 1;
          clearInterval(countdownInterval);
          return 0;
        });
      }, 1000);
    }

    return () => {
      clearInterval(animationInterval);
      clearInterval(countdownInterval);
    };
  }, [isAnimating]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimating(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.9 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const DataContent = () => {
    return (
      <div className="absolute inset-0 flex items-start pt-6 sm:pt-10 lg:pt-16 justify-center">
        <div className="grid grid-cols-2 gap-10">
          <div className="text-[#B3A088] font-extrabold flex flex-row justify-end items-end gap-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap">
              3
            </h2>
            <span className="font-irish text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2">
              Liter/detik
            </span>
          </div>
          <div className="text-[#B3A088] text-center space-y-2 min-w-28 md:min-w-72">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-irish mx-auto">
              Timer
            </h2>
            <div>
              <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold whitespace-nowrap">
                {formatTime(time)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="w-full relative flex flex-col items-center justify-start h-screen"
    >
      <Image
        src={filtrasi}
        alt="filtrasi background"
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
      <div className="relative z-10 text-center text-[#C4A484] p-4 w-full h-full mt-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl mb-4 font-irish bg-gradient-to-t from-[#745329] to-[#B3A088] text-transparent bg-clip-text">
          FILTRASI
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold bg-gradient-to-t from-[#745329] to-[#B3A088] text-transparent bg-clip-text mb-8">
          Mode Aktif
        </p>
        <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-9/12 xl:w-9/12 mx-auto relative aspect-video">
          <Image
            src={batu}
            alt="batu"
            fill
            style={{ objectFit: "contain" }}
            objectPosition="top"
            priority
          />
          <DataContent />
        </div>
      </div>
    </section>
  );
};

export default Filtrasi;
