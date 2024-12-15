import React from "react";
import Docker from "./Docker";
import { Froles } from "@/lib/font";
import Sections from "./Sections";

export default function Nav() {
  return (
    <div className="top-0 md:bottom-0 left-0 z-50 flex flex-col md:flex-row md:gap-0 gap-4 md:justify-evenly w-full p-4 text-white items-center">
      <p
        className={`text-6xl md:text-[5.5rem] ${Froles.className} text-white tracking-wide whitespace-nowrap`}
      >
        Siddhesh Lakhani
      </p>
      <Sections />
      <Docker />
    </div>
  );
}

export function NavHome() {
  return (
    <div className="top-0 md:bottom-0 left-0 z-50 flex flex-col md:flex-row md:gap-0 gap-4 md:justify-between w-full p-4 md:pb-12 text-white items-center">
      <p
        className={`text-6xl md:text-[5.5rem] ${Froles.className} text-white tracking-wide whitespace-nowrap`}
      >
        Siddhesh Lakhani
      </p>
      <Docker />
    </div>
  );
}
