import { poppins } from "@/lib/font";
import Link from "next/link";

export default function Sections() {
  const sections = [
    {
      id: 1,
      title: "About",
      link: "#about",
    },
    {
      id: 2,
      title: "Skills",
      link: "#skills",
    },
    {
      id: 3,
      title: "Projects",
      link: "#projects",
    },
    {
      id: 4,
      title: "Contact",
      link: "#contact",
    },
  ];

  return (
    <div className="flex gap-8">
      {sections.map((section) => (
        <Link href={section.link} key={section.id} className={`text-white text-md hover:border-b border-white ${poppins.className}`} >
          {section.title}
        </Link>
      ))}
    </div>
  );
}
