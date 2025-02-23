"use client"; 
import { useState, useEffect } from "react";
import About from "@/components/Home/About";
import Idea from "@/components/Home/Idea";
import { SmoothScrollWrapper } from "@/components/SmoothScrollWrapper";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timer); // Cleanup in case of unmount
  }, []);

  return (
    <SmoothScrollWrapper>
      <HeroSection />
      {showContent && (
        <>
          <Idea />
          <About />
        </>
      )}
    </SmoothScrollWrapper>
  );
}
