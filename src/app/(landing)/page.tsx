"use client";
import React from "react";
import Hero from "@/components/home/section/hero";
import About from "@/components/home/section/about";
import Watesqy from "@/components/home/section/watesqy";
import Summary from "@/components/home/section/summary";
import Filtrasi from "@/components/home/section/filtrasi";
export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Watesqy />
      {/* <Summary />
      <Filtrasi /> */}
    </>
  );
}
