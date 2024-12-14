'use client';
import { motion } from "framer-motion";
import { FileText, Github, Instagram, Linkedin, Twitter, UserPlus } from 'lucide-react';
import Link from "next/link";
import { useState } from "react";

export default function Docker() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const logos = [
    { id: 1, icon: <Instagram size={24} />, text: "Instagram", link: "https://www.instagram.com/sidlakhani_"},
    { id: 2, icon: <Twitter size={24} />, text: "Twitter", link: "https://twitter.com/sidlakhani_"},
    { id: 3, icon: <Linkedin size={24} />, text: "LinkedIn", link: "https://www.linkedin.com/in/siddhesh-lakhani/"},
    { id: 4, icon: <Github size={24} />, text: "Github", link: "https://github.com/sid-lakhani" },
    { id: 5, icon: <FileText size={24} />, text: "Resume", link: "/resume" },
    { id: 6, icon: <UserPlus size={24} />, text: "Hire me", link: "/contact" },
  ];

  return (
    <div className="max-h-40 max-w-screen-sm flex justify-center items-center relative">
      <motion.div className="flex space-x-6 relative z-10">
        {logos.map((logo, index) => (
          <motion.div
            key={logo.id}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.5 }}
            animate={{
              x: hoveredIndex === null
                ? 0
                : hoveredIndex === index
                ? 0
                : index < hoveredIndex
                ? -20
                : 20,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
            }}
            className="relative flex justify-center items-center"
          >
            <Link href={logo.link}
              className={`w-12 h-12 ${hoveredIndex === index ? "bg-gray-800" : "bg-gray-800/20"} rounded-full flex justify-center items-center shadow-lg`}
            >
              {logo.icon}
            </Link>
            {hoveredIndex === index && (
              <motion.div
                className="absolute top-12 text-white text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {logo.text}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
