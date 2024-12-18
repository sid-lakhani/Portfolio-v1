import About from "@/components/About";
import Idea from "@/components/Idea";
import LandingPage from "@/components/LandingPage";
import { SmoothScrollWrapper } from "@/components/SmoothScrollWrapper";

export default function Home() {
  return (
    <SmoothScrollWrapper>
      <LandingPage />
      <Idea />
      <About />
      {/* <Projects /> */}
    </SmoothScrollWrapper>
  );
}
