import { FaMapMarkerAlt, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import CommonHeroSection from "./common-hero-section";
import ItemHeaderSection from "./item-header-section";
export default function Skills() {
    const skills = [
        { name: "Javascript", img: "/icons/javascript.svg" },
        { name: "Typescript", img: "/icons/typescript.svg" },
        { name: "React", img: "/icons/react.svg" },
        { name: "Next.js", img: "/icons/next.svg" },
        { name: "Node.js", img: "/icons/nodejs.svg" },
        { name: "Express.js", img: "/icons/javascript.svg" },
        { name: "Nest.js", img: "/icons/javascript.svg" },
        { name: "Socket.io", img: "/icons/javascript.svg" },
        { name: "PostgreSQL", img: "/icons/javascript.svg" },
        { name: "MongoDB", img: "/icons/javascript.svg" },
        { name: "Sass/Scss", img: "/icons/javascript.svg" },
        { name: "Tailwindcss", img: "/icons/javascript.svg" },
        { name: "Figma", img: "/icons/javascript.svg" },
        { name: "Cypress", img: "/icons/javascript.svg" },
        { name: "Git", img: "/icons/javascript.svg" },
      ];
    return (
        <CommonHeroSection type="section1">
            <div className="w-full">
                <ItemHeaderSection title="Skills" sub="The skills, tools and technologies I am really good at:"/>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center items-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={skill.img}
                                alt={skill.name}
                                className="w-14 h-14 object-contain"
                            />
                            <p className="mt-2 text-gray-300">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </CommonHeroSection>
    );
}