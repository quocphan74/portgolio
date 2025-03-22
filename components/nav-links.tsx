
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function NavLinks() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="bg-white shadow-md md:px-[130px] px-[30] py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <span className="text-purple-600 text-2xl font-bold flex items-center">
                        <span className="text-xl mr-2">{"</>"}</span> V <span className="text-gray-900">DevStack</span>
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
                        <button className="absolute top-4 left-4 text-gray-600 hover:text-black cursor-pointer">
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
                            <li>
                                <Link href="/" className="text-lg text-purple-600 font-semibold hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-lg text-gray-700 hover:text-purple-600 hover:underline">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-lg text-gray-700 hover:text-purple-600 hover:underline">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/designs" className="text-lg text-gray-700 hover:text-purple-600 hover:underline">
                                    Designs
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-lg text-gray-700 hover:text-purple-600 hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </>)}
                {/* Navigation Links */}
                <div className="space-x-5 md:flex hidden">
                    <Link href="/" className="text-purple-600 font-semibold">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-purple-600">
                        About
                    </Link>
                    <Link href="/projects" className="text-gray-700 hover:text-purple-600">
                        Projects
                    </Link>
                    <Link href="/designs" className="text-gray-700 hover:text-purple-600">
                        Designs
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-purple-600">
                        Contact
                    </Link>
                </div>
            </nav>
        </>
    );
}