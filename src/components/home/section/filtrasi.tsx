"use client";

import { FC, useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import filtrasi from "@/public/background/filtrasi.svg";
import batu from "@/public/fragment/batuFil.svg";
import dino1 from "@/public/fragment/dino1.svg";
import dino2 from "@/public/fragment/dino2.svg";
import dino3 from "@/public/fragment/dino3.svg";

const Filtrasi: FC = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const values = [2, 3.5, 5, 4, 1.3];

  const getRandomValue = () => {
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
  };

  const [currentValue, setCurrentValue] = useState(getRandomValue());

  const formatTime = useCallback((seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue(getRandomValue());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const DataContent = () => {
    return (
      <div className="absolute inset-0 flex items-start pt-6 sm:pt-10 lg:pt-16 justify-center overflow-x-hidden">
        <div className="grid grid-cols-2 gap-10">
          <div className="text-[#B3A088] font-extrabold flex flex-row justify-end items-end gap-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap">
              {currentValue.toFixed(1)}
            </h2>
            <span className="font-irish text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4">
              Liter/menit
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
      className="w-full relative flex flex-col items-center justify-start h-[120vh]"
      id="filtrasi"
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
        className="z-0 scale-y-125"
      />

      {/* content */}
      <div className="relative z-10 text-center text-[#C4A484] p-4 w-full h-full mt-[35%] sm:mt-[25%] md:mt-[20%] lg:mt-[15%]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-4 font-irish bg-gradient-to-t from-[#745329] to-[#B3A088] text-transparent bg-clip-text">
          FILTRASI
        </h1>
        <button
          onClick={toggleTimer}
          className={`text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold ${
            isActive
              ? "bg-gradient-to-t from-[#745329] to-[green] text-transparent bg-clip-text "
              : "bg-gradient-to-t from-[#745329] to-[#8b0000] text-transparent bg-clip-text "
          }mb-8 cursor-pointer transition-transform hover:scale-105 focus:outline-none`}
        >
          {isActive ? "Mode Aktif" : "Mode Tidak Aktif"}
        </button>
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
      <Image
        src={dino1}
        alt="dino1"
        className="absolute h-2/3 w-auto left-0 -top-10"
      />
      <Image
        src={dino2}
        alt="dino2"
        className="absolute h-1/2 w-auto right-0 top-[10%]"
      />
      <Image
        src={dino3}
        alt="dino3"
        className="absolute h-1/4 w-auto left-0 bottom-10"
      />
    </section>
  );
};

export default Filtrasi;
