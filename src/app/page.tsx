import About from "@/components/About";
import Idea from "@/components/Idea";
import LandingPage from "@/components/LandingPage";
import { SmoothScrollWrapper } from "@/components/SmoothScrollWrapper";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <SmoothScrollWrapper>
      <LandingPage />
      <Idea />
      <About />
    </SmoothScrollWrapper>
  );
}
