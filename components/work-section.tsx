"use client"
import Link from "next/link";
import CommonHeroSection from "./common-hero-section";
import ItemHeaderSection from "./item-header-section";
import Image from "next/image";
import { getThemeClass } from "@/utils/class-names";
import { useTheme } from "@/components/theme-context";
export default function WorkSection() {
    const { theme, toggleTheme } = useTheme();
    const projects = [
        {
            title: "Fiskil",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.",
            image: "/images/project.png", // Thay đường dẫn hình ảnh
            tags: [
                "React",
                "Next.js",
                "Typescript",
                "Nest.js",
                "PostgreSQL",
                "Tailwindcss",
                "Figma",
                "Cypress",
                "Storybook",
                "Git",
            ],
            link: "#", // Thay bằng URL thực tế
        },
        {
            title: "Fiskil",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.",
            image: "/images/project.png",
            tags: [
                "React",
                "Next.js",
                "Typescript",
                "Nest.js",
                "PostgreSQL",
                "Tailwindcss",
                "Figma",
                "Cypress",
                "Storybook",
                "Git",
            ],
            link: "#",
        },
    ];

    return (
        <CommonHeroSection type="section1">
            <div className="w-full" id="projects">
                <ItemHeaderSection title="Work" sub="Some of the noteworthy projects I have built:"/>
                <div className="space-y-10 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={getThemeClass(theme, "section2",`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                } p-6 rounded-lg shadow-lg`)}
                        >
                            <div className="w-full md:w-1/2">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded-lg"
                                    width={455}
                                    height={100}
                                />
                            </div>
                            <div className="w-full md:w-1/2 p-6">
                                <h3 className="text-2xl font-semibold">{project.title}</h3>
                                <p className="mt-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className={`${theme == "dark" ? "bg-[#374151]" :"bg-[#E5E7EB]" } shadow-lg px-3 py-1 rounded-full text-sm`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4">
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover: transition"
                                    >
                                        🔗 View Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </CommonHeroSection>
    );
}
