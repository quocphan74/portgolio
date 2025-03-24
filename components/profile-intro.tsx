import { FaMapMarkerAlt, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import CommonHeroSection from "./common-hero-section";
import Image from "next/image";

export default function ProfileIntro() {

    return (
        <CommonHeroSection type="section1">
            <div className="sm:w-full md:w-3/4  md:pr-20">
                <h1 className="text-4xl font-bold flex items-center gap-2">
                    Hi, I'm Jamison 👋
                </h1>
                <p className="mt-4 ">
                    I'm a full stack developer (React.js & Node.js) with a focus on
                    creating (and occasionally designing) exceptional digital experiences
                    that are fast, accessible, visually appealing, and responsive.
                </p>
                <p className="mt-2 ">
                    Even though I have been creating web applications for over 7 years, I
                    still love it as if it was something new.
                </p>
                <div className="mt-4 flex items-center gap-3">
                    <FaMapMarkerAlt className="" />
                    <span>C306, Quarter 5, Linh Trung, Thu Duc</span>
                </div>
                <div className="mt-2 flex items-center gap-3">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span>Available for new projects</span>
                </div>
                <div className="mt-4 flex gap-4 text-xl">
                    <a href="#" className="hover:text-blue-400">
                        <FaTwitter />
                    </a>
                    <a href="#" className="hover:">
                        <FaGithub />
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className="max-sm:hidden w-1/4">
                <div className="relative w-[200px] mt-4">
                    <div className="absolute -bottom-7 -right-7 w-[200px]  h-[200px] bg-gray-700"></div>
                    <Image
                        src="/images/profile.jfif"
                        alt="Profile Image"
                        width={200}
                        height={300}
                        className="shadow-lg relative"
                    />
                </div>
            </div>
        </CommonHeroSection>
    );
}