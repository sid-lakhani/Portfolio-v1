"use client";
import { Gristela, playfair } from "@/lib/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Nav from "./Nav";

export default function Idea() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const scrollTL1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "+=20%",
        scrub: true,
      },
    });
    scrollTL1.fromTo(
      navRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 4, ease: "power2.out" }
    );

    const scrollTL2 = gsap.timeline({
      scrollTrigger: {
        trigger: bodyRef.current,
        start: "top top",
        end: "+=60%",
        scrub: true,
        pin: true,
        markers: false,
        onLeave: () => {
          gsap.to(navRef.current, { opacity: 0, duration: 1 });
        },
        onEnterBack: () => {
          gsap.to(navRef.current, { opacity: 1, duration: 1 });
        },
      },
    });

    scrollTL2
      .from(
        textRef.current,
        {
          x: 350,
          duration: 12,
          ease: "slow",
        },
        "a"
      )
      .fromTo(
        descRef.current,
        {
          opacity: 0,
          scale: 1,
        },
        {
          opacity: 1,
          duration: 8,
          scale: 1.4,
          ease: "slow",
        },
        "a"
      )
      .to(bodyRef.current, {
        scale: 0.8,
        opacity: 0.2,
        duration: 8,
        ease: "slow",
      });
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full bg-gradient-to-r from-primary-midnight to-primary-dark relative z-40 select-none"
    >
      <div
        ref={navRef}
        className="sticky top-0 w-full z-50 bg-primary-midnight shadow-md border-b"
      >
        <Nav />
      </div>
      <section
        ref={bodyRef}
        className="flex flex-row items-center justify-evenly h-screen w-full relative px-10"
      >
        <p
          ref={textRef}
          className={`${Gristela.className} text-[6rem] text-white max-w-xl`}
        >
          Vision Beyond Limits
        </p>
        <p
          ref={descRef}
          className={`max-w-md p-4 rounded-[5rem] text-5xl text-white ${playfair.className} tracking-wider`}
        >
          Step into my world, where tech meets imagination and every line of
          code brings a new idea to life!
        </p>
      </section>
    </div>
  );
}
