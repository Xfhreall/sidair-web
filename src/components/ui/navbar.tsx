import Link from "next/link";
import React from "react";
import { useNavbar } from "../hooks/useNav";

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
      <div className="flex text-white items-center justify-around py-4 px-12 font-irish relative z-10">
        <Link href="#hero">
          <h1 className="text-2xl uppercase ">Sidair</h1>
        </Link>
        <nav className="md:block hidden ml-auto">
          <ul className="flex  gap-20 text-xl">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#watesqy">Watesqy</Link>
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
