"use client";
import { playfair, poppins } from "@/lib/font";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Header from "../Header";
import KnowMeCards from "./KnowMeCards";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const knowRef = useRef<HTMLParagraphElement>(null);
  
  useGSAP(() => {
    if (textRef.current) {
      const split = new SplitType(textRef.current, { types: "words" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bodyRef.current, 
          start: "top top", 
          end: "+=100%", 
          scrub: true,
          pin: true,
          markers: false,
        },
      });

      tl.fromTo(
        split.words,
        {
          opacity: 0.2,
        },
        {
          opacity: 1,
          duration: 2,
          stagger: 0.8, 
        }
      )
        .to(
          textRef.current,
          {
            width: "60vh",
            duration: 15,
            x: "-10vh",
          },
          "a"
        )
        .to(
          imgRef.current,
          {
            scale: 1.5,
            ease: "slow",
            duration: 15,
            x: "10vh",
          },
          "a"
        )
        .to([textRef.current, imgRef.current], {
          y: "-100vh",
          opacity: 0.4,
          duration: 15,
          delay: 15,
          ease: "power3.out",
        })
        .from(knowRef.current, {
          opacity: 0,
          y: "-100vh",
          duration: 6,
          ease: "power3.out",
        });
    }
  });

  return (
    <section
      ref={bodyRef}
      className="relative flex items-center justify-center h-[100vh] w-full px-10 bg-primary z-50 select-none gap-4"
    >
      <Header />
      <p
        className={`reveal-type text-4xl font-bold ${poppins.className} leading-relaxed text-white text-center`}
        ref={textRef}
      >
        Hi, I'm Siddhesh Lakhani, a passionate full-stack developer and a
        Computer Engineering student. I love building intuitive web applications
        and exploring the latest technologies.
      </p>
      <div ref={imgRef} className="h-[300px] w-[300px]">
        <video
          src="./clouds.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute w-full h-full object-cover rounded-3xl z-0"
          preload="metadata"
        />
        <Image
          src="./hero.svg"
          alt="me"
          width={300}
          height={300}
          className="absolute top-10 z-50"
        />
      </div>
      <div ref={knowRef} className={`w-full h-screen leading-relaxed absolute flex flex-col gap-[6vh] justify-center items-center py-[12vh]`}>
        <p
          className={`text-5xl font-bold ${playfair.className} text-white text-center capitalize`}
        >
          Get to know me
        </p>
        <KnowMeCards />
      </div>
    </section>
  );
}
