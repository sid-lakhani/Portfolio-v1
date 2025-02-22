import About from "@/components/Home/About";
import Idea from "@/components/Home/Idea";
import LandingPage from "@/components/Home/LandingPage";
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
