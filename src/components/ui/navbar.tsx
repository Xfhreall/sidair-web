import Link from "next/link";
import React from "react";
import { useNavbar } from "../hooks/useNav";
import Image from "next/image";
import hamburger from "@/public/fragment/hamburger.png";
import close from "@/public/fragment/close-btn.svg";
import style from "@/components/style/navbar.module.css";

export default function Component() {
  const { isOpen, toggleSlide } = useNavbar();
  return (
    <header
      className="fixed top-0 w-full z-50"
      data-aos="fade-down"
      data-aos-offset="1700"
    >
      <div
        className="absolute inset-0 backdrop-blur-md pointer-events-none"
        aria-hidden="true"
      />
      <div className="flex text-white items-center justify-around py-4 px-6 md:px-12 font-irish relative z-10">
        <Link href="#hero">
          <h1 className="text-2xl uppercase ">Sidair</h1>
        </Link>
        <span
          className="flex justify-center h-8 p-1 cursor-pointer w-9 md:hidden ml-auto bg-primary rounded-md"
          onClick={toggleSlide}
        >
          <div className="relative overflow-hidden p-1">
            <Image src={hamburger} alt="hamburger" className="object-cover" />
          </div>
        </span>
        {/*nav mobile */}
        <div
          className={`md:hidden font-jaoren bg-black/20 fixed z-30 inset-0 right-0 flex justify-end w-full h-full transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={toggleSlide}
        >
          <div
            className={`z-50 flex flex-col w-1/2 h-full p-8 text-2xl md:text-3xl tracking-wider text-end ${style.slideNav}`}
            onClick={toggleSlide}
          >
            <div className="flex justify-start">
              <span className="cursor-pointer w-max" onClick={toggleSlide}>
                <Image src={close} alt="X" className="h-4 self-start" />
              </span>
            </div>
            <ul className="flex flex-col space-y-4 sm:space-y-8 mb-auto mt-8">
              <li className="py-2 border-b-1.5 border-white font-jaoren">
                <Link
                  className={`cursor-pointer text-base sm:text-2xl`}
                  href="#about"
                  onClick={toggleSlide}
                >
                  About
                </Link>
              </li>
              <li className="py-2 border-b-1.5 border-white">
                <Link
                  className={`cursor-pointer text-base sm:text-2xl`}
                  href="#watesqy"
                  onClick={toggleSlide}
                >
                  Tools
                </Link>
              </li>
              <li className="py-2 border-b-1.5 border-white">
                <Link
                  className={`cursor-pointer text-base sm:text-2xl`}
                  href="#summary"
                  onClick={toggleSlide}
                >
                  Summary
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/*nav desktop */}
        <nav className="md:block hidden ml-auto">
          <ul className="flex  gap-20 text-xl">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#watesqy">Tools</Link>
            </li>
            <li>
              <Link href="#summary">Summary</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
