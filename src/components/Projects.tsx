'use client';
import { Chiro } from "@/lib/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          markers: true,
        },
      })
      .fromTo(
        scrollableRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 1,
        }
      );
  });
  return (
    <div className="bg-primary">
      <section className="overflow-hidden">
        <div ref={triggerRef}>
          <div
            ref={scrollableRef}
            className="h-screen w-[400vw] flex flex-row relative items-center justify-evenly px-12"
          >
            <div
              className={`text-white text-7xl ${Chiro.className} whitespace-nowrap`}
            >
              <p>Hello, World!</p>
            </div>
            <div
              className={`text-white text-7xl ${Chiro.className} whitespace-nowrap`}
            >
              <p>I’m Siddhesh Lakhani</p>
            </div>
            <div
              className={`text-white text-7xl ${Chiro.className} whitespace-nowrap`}
            >
              <p>Aspiring Innovator in Tech</p>
            </div>
            <div
              className={`text-white text-7xl ${Chiro.className} whitespace-nowrap`}
            >
              <p>Exploring Web Development</p>
            </div>
            <div
              className={`text-white text-7xl ${Chiro.className} whitespace-nowrap`}
            >
              <p>Turning Ideas into Code</p>
            </div>
            <div
              className={`text-white text-7xl ${Chiro.className} whitespace-nowrap`}
            >
              <p>Passionate About Creativity</p>
            </div>
            <div
              className={`text-white text-7xl ${Chiro.className} whitespace-nowrap`}
            >
              <p>A Gamer & Problem Solver</p>
            </div>
            <div
              className={`text-white text-7xl ${Chiro.className} whitespace-nowrap`}
            >
              <p>Welcome to My Journey!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
