import { Froles } from '@/lib/font';
import Image from 'next/image';
import Nav from './Nav';

export default function LandingPage() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col-reverse items-start justify-between pt-4 px-8 bg-primary overflow-hidden">
      <Nav />
      <div className="relative w-full h-[60vh] md:h-[75vh]">
        <video
          src="./clouds.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover md:object-fill rounded-3xl"
        />
        <div
          className={`absolute z-20 left-1/2 transform -translate-x-1/2 top-[16dvh] text-overlay ${Froles.className} text-2xl md:text-4xl lg:text-[5.5rem] tracking-wider font-bold whitespace-nowrap`}
        >
          <p>Welcome to My Portfolio!</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-center">
        <Image
          src="/hero.svg"
          alt="hero"
          width={800}
          height={800}
          className="max-h-[60vh] md:max-h-[75vh]"
        />
      </div>
    </div>
  );
}
