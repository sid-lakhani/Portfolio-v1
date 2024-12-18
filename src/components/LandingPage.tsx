"use client";
import { Chiro, Froles, Gristela, playfair, poppins } from "@/lib/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { NavHome } from "./Nav";


export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const vidRef = useRef<HTMLVideoElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (!containerRef.current) return;

    const initialTL = gsap.timeline();

    initialTL
      .fromTo(
        vidRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" },
        "a"
      )
      .fromTo(
        imgRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
        "a"
      )
      .fromTo(
        navRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
        "a"
      )
      .fromTo(
        containerRef.current,
        { backgroundColor: "#102A43" },
        { backgroundColor: "#0B1120", duration: 0.5 },
        "a"
      );

    const scrollTL1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=20%",
        scrub: true,
        pin: true,
        // markers: true,
      },
    });

    scrollTL1
      .to(
        imgRef.current,
        {
          scale: 1.3,
        },
      );

    const scrollTL2 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=80%",
        scrub: true,
        // markers: true,
      },
    });

    scrollTL2
      .to(
        imgRef.current,
        {
          y: 200,
          scale: 0.5,
        },
        "c"
      )
      .to(
        vidRef.current,
        {
          scale: 0.4,
          y: 300,
        },
        "c"
      )
      .to(
        navRef.current,
        {
          y: -100,
          scale: 0.4,
          opacity: 0,
        },
        "c"
      );
  });

  return (
    <div
      ref={containerRef}
      className="select-none min-h-screen min-w-screen flex flex-col gap-4 md:gap-0 md:flex-col-reverse items-start md:justify-between md:pt-4 px-8 bg-primary overflow-hidden"
    >
      <div className="w-full z-50" ref={navRef}>
        <NavHome />
      </div>
      <div className="relative w-full h-[60vh] md:h-[75vh]">
        <video
          src="./clouds.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover md:object-fill rounded-3xl"
          ref={vidRef}
          preload="metadata"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-40 w-full flex justify-center">
        <Image
          src="/hero.svg"
          alt="hero"
          width={800}
          height={800}
          className="max-h-[50vh] md:max-h-[60vh] lg:max-h-[75vh]"
          ref={imgRef}
          priority
        />
      </div>
    </div>
  );
}
