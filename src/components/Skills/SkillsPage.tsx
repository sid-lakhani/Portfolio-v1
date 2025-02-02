"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { skills } from "../../lib/skills.js";
import { Gristela, poppins } from "@/lib/font";

export default function SkillsPage() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(sectionRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-r from-primary via-primary-midnight to-primary-dark text-white overflow-hidden ${poppins.className}`}
    >
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <h1
          ref={titleRef}
          className={`text-5xl md:text-7xl font-light text-center mb-4 ${Gristela.className}`}
        >
          Tech Stack
        </h1>
        <p className="text-center text-gray-400 text-lg mb-16">
          The tech, dev tools, and apps I use.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl mb-8">Dev & Design</h2>
            <div
              ref={sectionRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-black/40 rounded-lg p-6 flex flex-col items-center justify-center text-center"
                >
                  <h1 className="text-xl font-light">{skill.name}</h1>
                  <div className="w-12 h-12 text-blue-400 mb-4">
                    {skill.logo}
                  </div>
                  <p className="mt-2 text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                    {skill.category}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
