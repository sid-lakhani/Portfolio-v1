import React from 'react'
import Nav from './Nav'
import Image from 'next/image'

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

        <div className={`absolute top-36 left-44 z-20 text-primary font-testimonial italic font-bold text-4xl md:text-6xl lg:text-7xl tracking-wide`}>
          <p >Welcome to</p>
          <p className="ml-28 mt-4">My Portfolio</p>
        </div>

        <div className="absolute bottom-0 right-0 font-testimonial z-20 text-white text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-2xl px-4">
          <p className="text-black p-8">
            I'm a{" "}
            <span className="text-accent-dark">
              Computer Engineering student
            </span>{" "}
            with a passion for coding and a deep interest in emerging
            technologies. Currently, I'm focused on
            <span className="text-accent-dark"> web development</span> and
            excited to build innovative solutions that push the boundaries of
            what's possible.
          </p>
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
    )
}
