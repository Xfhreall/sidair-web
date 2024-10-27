import Link from "next/link";
import React from "react";

export default function Component() {
  return (
    <header
      className="fixed top-0 w-full z-50"
      data-aos="fade-down"
      data-aos-offset="1400"
    >
      <div
        className="absolute inset-0 backdrop-blur-md pointer-events-none"
        aria-hidden="true"
      />
      <nav className="flex text-white items-center justify-around py-4 px-12 font-irish relative z-10">
        <div>
          <Link href="/">
            <h1 className="text-2xl uppercase ">Sidair</h1>
          </Link>
        </div>
        <ul className="flex ml-auto gap-20 text-xl">
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
    </header>
  );
}
