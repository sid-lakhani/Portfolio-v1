"use client";
import { useRef, useEffect, useState } from "react";
import {
  FileText,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";

type Logo = {
  id: number;
  icon: JSX.Element | null;
  text: string;
  link: string;
};

function useDockFunctionality() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (index: number, element: HTMLDivElement) => {
    setHoveredIndex(index);
    gsap.to(element, { scale: 1.2, duration: 0.3, ease: "power3.out" });
  };

  const handleMouseLeave = (element: HTMLDivElement) => {
    setHoveredIndex(null);
    gsap.to(element, { scale: 1, duration: 0.3, ease: "power3.out" });
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const icons =
      containerRef.current.querySelectorAll<HTMLDivElement>(".icon");

    icons.forEach((icon, index) => {
      gsap.to(icon, {
        x:
          hoveredIndex === null
            ? 0
            : index < hoveredIndex
            ? -20
            : index > hoveredIndex
            ? 20
            : 0,
        duration: 0.5,
        ease: "power3.out",
      });
    });
  }, [hoveredIndex]);

  return { hoveredIndex, containerRef, handleMouseEnter, handleMouseLeave };
}

export default function Dock() {
  const { hoveredIndex, containerRef, handleMouseEnter, handleMouseLeave } =
    useDockFunctionality();

  const logos: Logo[] = [
    {
      id: 1,
      icon: <Github size={24} />,
      text: "Github",
      link: "https://github.com/sid-lakhani",
    },
    {
      id: 2,
      icon: <Linkedin size={24} />,
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/siddhesh-lakhani/",
    },
    {
      id: 3,
      icon: <Instagram size={24} />,
      text: "Instagram",
      link: "https://www.instagram.com/sidlakhani_",
    },
    {
      id: 4,
      icon: <Twitter size={24} />,
      text: "Twitter",
      link: "https://twitter.com/sidlakhani_",
    },
    { id: 5, icon: <FileText size={24} />, text: "Resume", link: "/resume.pdf" },
    { id: 6, icon: <UserPlus size={24} />, text: "Hire me", link: "/contact" },
  ];

  return (
    <>
      <div
        className="max-h-40 max-w-screen-sm md:flex justify-center items-center relative hidden"
        ref={containerRef}
      >
        <div className="flex space-x-6 relative z-10">
          {logos.map((logo, index) => (
            <div
              key={logo.id}
              className="relative flex justify-center items-center icon"
              onMouseEnter={(e) =>
                handleMouseEnter(index, e.currentTarget as HTMLDivElement)
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e.currentTarget as HTMLDivElement)
              }
            >
              <Link
                href={logo.link}
                className={`w-12 h-12 ${
                  hoveredIndex === index ? "bg-gray-800" : "bg-gray-800/20"
                } rounded-full flex justify-center items-center shadow-lg`}
              >
                {logo.icon}
              </Link>
              {hoveredIndex === index && (
                <div
                  className="absolute top-[3.5rem] text-white text-xs"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {logo.text}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center space-x-6 md:hidden">
        {logos.map((logo, index) => (
          <div
            key={logo.id}
            className="relative flex justify-center items-center"
          >
            <Link
              href={logo.link}
              className={`w-10 h-10 bg-gray-800/20 rounded-full p-2 flex justify-center items-center shadow-lg`}
            >
              {logo.icon}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
