"use client"
import CommonHeroSection from "./common-hero-section";
import Image from "next/image";
import ItemHeaderSection from "./item-header-section";
import { getThemeClass } from "@/utils/class-names";
import { useTheme } from "@/components/theme-context";
export default function ExperienceSection() {
    const { theme, toggleTheme } = useTheme();
    const experiences = [
        {
            company: "Upwork",
            logo: "/icons/upwork.svg", // Đường dẫn logo
            role: "Sr. Frontend Developer",
            date: "Nov 2021 - Present",
            details: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Ut pretium arcu et massa semper, id fringilla leo semper.",
                "Sed quis justo ac magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ],
        },
        {
            company: "Upwork",
            logo: "/icons/upwork.svg",
            role: "Team Lead",
            date: "Jul 2017 - Oct 2021",
            details: [
                "Sed quis justo ac magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Sed quis justo ac magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ],
        },
        {
            company: "Upwork",
            logo: "/icons/upwork.svg",
            role: "Full Stack Developer",
            date: "Dec 2015 - May 2017",
            details: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ],
        },
    ];

    return (
        <CommonHeroSection type="section2">
            <div className="w-full ">
                <ItemHeaderSection title="Experience" sub="Here is a quick summary of my most recent experiences:"/>
                <div className="space-y-6 max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`${theme == "dark" ? "bg-[#1F2937]" :"bg-[#FFFFFF]" } p-6 rounded-lg flex flex-col md:flex-row items-start justify-between shadow-lg`}
                            
                        >
                            <div className="flex items-start space-x-4">
                                <Image
                                    src={exp.logo} 
                                    alt={exp.company}
                                    width={80}
                                    height={300}
                                    className="object-contain -mt-[27px]"
                                />
                                <div className="text-left">
                                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                                    <ul className=" mt-2 list-disc list-inside">
                                        {exp.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <span className="text-sm mt-4 md:mt-0 md:text-right">
                                {exp.date}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </CommonHeroSection>
    );
}
