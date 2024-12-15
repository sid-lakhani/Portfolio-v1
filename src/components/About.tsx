"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Nav from "./Nav";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const scrollTL1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%", 
        end: "+=20%",
        scrub: true,
        // markers: true, 
      },
    });
    scrollTL1.fromTo(
      navRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 4, ease: "power2.out" }
    );
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full bg-primary-midnight relative z-50"
    >
      <div ref={navRef} className="w-full">
        <Nav />
      </div>
    </div>
  );
}
