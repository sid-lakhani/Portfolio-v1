import About from "@/components/About";
import LandingPage from "@/components/LandingPage";
import { SmoothScrollWrapper } from "@/components/SmoothScrollWrapper";

export default function Home() {
  return (
    <SmoothScrollWrapper>
      <LandingPage />
      <About />
    </SmoothScrollWrapper>
  );
}
