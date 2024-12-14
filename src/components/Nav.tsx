import React from "react";
import Docker from "./Docker";
import { Froles } from "@/lib/font";

export default function Nav() {
  return (
    <div className="bottom-0 left-0 z-50 flex flex-row justify-between w-full p-8 text-white items-center">
      <div className={`text-[6rem] ${Froles.className} text-white tracking-wide`}>
        Siddhesh Lakhani
      </div>
      <div>
      <Docker />
      </div>
    </div>
  );
}