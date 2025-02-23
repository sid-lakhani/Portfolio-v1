import { poppins } from '@/lib/font';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function KnowMeCards() {
    const cards = [
        {
            title: "About Me",
            img: "/about.webp", 
            link: "/about" 
        },
        {
            title: "Projects",
            img: "/projects.webp",
            link: "/projects" 
        },
        {
            title: "Skills",
            img: "/skills.webp",
            link: "/skills" 
        },
        {
            title: "Contact",
            img: "/contact.webp",
            link: "/contact"
        },
    ];

    return (
        <div className="flex flex-row gap-8 p-6 text-white text-center w-full justify-center items-center h-full">
            {cards.map((card, index) => (
                <Link
                    href={card.link}
                    key={index}
                    className="w-1/4 h-[50vh] cursor-pointer rounded-lg shadow-sm hover:shadow-md shadow-white/50 hover:shadow-white/50 transition-shadow duration-300 bg-gradient-radial from-primary to-primary-dark flex flex-col justify-between group overflow-hidden relative"
                >
                    <h3 className={`text-3xl text-white ${poppins.className} font-bold p-4 items-center flex justify-center`}>
                        {card.title}
                    </h3>
                    
                    <div className="absolute bottom-0 w-full h-auto">
                        <Image
                            src={card.img}
                            alt={card.title}
                            width={700}
                            height={700}
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </Link>
            ))}
        </div>
    );
}
