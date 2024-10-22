import Link from "next/link";
import React from "react";
import type { FC } from "react";
const Navbar: FC = () => {
  return (
    <main className="text-primary fixed top-0 bg-transparent w-full z-10">
      <nav className="flex  items-center justify-around py-4 px-12 font-irish relative">
        <div>
          <h1 className="text-2xl uppercase">Sidair</h1>
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
    </main>
  );
};

export default Navbar;
