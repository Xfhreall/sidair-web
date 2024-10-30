"use client";

import React, { useState, useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import soil from "@/public/background/watesqy.svg";
import alat1 from "@/public/fragment/alat1.svg";
import alat2 from "@/public/fragment/alat2.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Watesqy() {
  const [imageHeight, setImageHeight] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = soil.src;
    img.onload = () => {
      setImageHeight(img.height);
    };
  }, []);

  const slides = [
    {
      image: alat1,
      title: "SIDAIR",
      description:
        "Real-Time Water Monitoring using SIDAIR, a multi-parameter device that measures: Temperature, pH levels, Turbidity, Electrical Conductivity, Total Dissolved Solids (TDS), Automated Data Transmission through Bluetooth and GSM for immediate feedback and alerts.",
    },
    {
      image: alat2,
      title: "DMI-65",
      description:
        "Advanced Filtration Technology using DMI-65 to remove iron, manganese, and particulate matter from water sources without chemical additives, ensuring optimal filtration with minimal environmental impact.",
    },
  ];

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden flex items-center justify-center z-30 -translate-y-32"
      style={{
        minHeight: imageHeight ? `${imageHeight}px` : "100vh",
        objectFit: "contain",
      }}
      id="watesqy"
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

      <div className="text-white z-[31] w-full md:w-11/12 relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={100}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mySwiper h-max"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-center items-center">
                <div className="flex justify-center">
                  <Image
                    src={slide.image}
                    alt={`alat${index + 1}`}
                    className="h-auto w-3/4 md:w-2/3 object-center"
                  />
                </div>
                <div className="md:text-start text-center space-y-4 flex flex-col px-12 md:px-0">
                  <h2 className="text-4xl sm:text-6xl md:text-7xl font-irish bg-gradient-to-t from-[#080502] to-[#472812] text-transparent bg-clip-text drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl">
                    {slide.description}
                  </p>
                  <div className="flex justify-center items-center mt-4 md:mt-8">
                    <button onClick={handlePrev}>
                      <ChevronLeft
                        className="cursor-pointer"
                        width={18}
                        height={18}
                      />
                    </button>
                    <div className="flex mx-4">
                      {slides.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${
                            index === activeIndex
                              ? "bg-[#472812]"
                              : "bg-white/60"
                          }`}
                          onClick={() => goToSlide(index)}
                        />
                      ))}
                    </div>
                    <button onClick={handleNext}>
                      <ChevronRight
                        className="cursor-pointer"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        .swiper-pagination-bullet {
          display: none !important;
        }
      `}</style>
    </section>
  );
}
