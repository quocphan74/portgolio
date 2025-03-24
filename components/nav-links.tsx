
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/components/theme-context";
import { Moon, Sun } from "lucide-react"; 
import { getThemeClass } from "@/utils/class-names";
export default function NavLinks() {
    const { theme, toggleTheme } = useTheme();
    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/designs", label: "Designs" },
        { href: "/contact", label: "Contact" }
    ];

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className={getThemeClass(theme, "section1","shadow-md md:px-[130px] px-[30] py-4 flex justify-between items-center border-b-2 border-purple-600 fixed inset-x-0 top-0 z-100")}
            
            // className="bg-[#000000] text-white shadow-md md:px-[130px] px-[30] py-4 flex justify-between items-center border-b-2 border-purple-600 fixed inset-x-0 top-0 z-100"
            >
                {/* Logo */}
                <div className="flex items-center">
                    <span className="text-2xl font-bold flex items-center">
                        <span className="text-xl mr-2">{"</>"}</span> V <span className="">DevStack</span>
                    </span>
                </div>
                <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(true)}>
                    <Image
                        src="/images/menu.png"
                        alt="Next.js logo"
                        width={30}
                        height={80}
                    />
                </div>
                {/* Overlay & Mobile Menu */}
                {isOpen && (<>
                    {/* Overlay */}
                    <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={() => setIsOpen(false)}></div>

                    {/* Navigation Mobile */}
                    <div className="w-[280px] h-screen bg-white fixed top-0 right-0 opacity-100 shadow-lg z-50 md:hidden" onClick={() => setIsOpen(false)}>
                        {/* Button Close */}
                        <button className="absolute top-4 left-4 hover:text-black cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 30 30"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* List menu */}
                        <ul className="flex flex-col items-start space-y-6 mt-20 pl-6">
                            {menuItems.map(({ href, label }) => (
                                <li key={href}>
                                    <Link href={href} className="text-lg hover:text-purple-600 hover:underline">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>)}
                {/* Navigation Links */}
                <div className="space-x-5 md:flex hidden">
                    <button onClick={toggleTheme} className="p-2 rounded-full">
                        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    {menuItems.map(({ href, label }) => (
                        <Link key={href} href={href} className="text-lg hover:text-purple-600 hover:underline">
                            {label}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
}