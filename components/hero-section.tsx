import Image from "next/image";
import CommonHeroSection from "./common-hero-section";
export default function HeroSection() {
    return (
        <CommonHeroSection bg="#F9F7FE"> 
            <div className="max-w-5xl">
                <h3 className="text-[18px] font-semibold text-[#8C89A2] uppercase mb-[8px]">Professional Portfolio</h3>
                <h1 className="text-[40px] text-[#3F3A64] mb-[19px]">Transforming Ideas into Reality</h1>
                <p className="text-[#696969] text-[19px] mb-[49px]">
                    As a highly skilled graphic designer and full stack developer, I have been passionately pursuing my career since 2019. With a strong focus on
                    visual aesthetics and cutting-edge technologies, I have consistently delivered captivating designs and seamless user experiences. My portfolio
                    showcases a diverse range of successful projects, demonstrating my expertise in both design and development. I invite you to explore my
                    resume to gain a comprehensive understanding of my professional journey. Let's collaborate and bring your ideas to life!
                </p>
                <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 mt-6 text-white bg-[#7D11F9] rounded-lg hover:bg-purple-700"
                >
                    Check Out
                    <Image
                        src="/images/linkedin.svg"
                        alt="Profile Image"
                        width={15}
                        height={15}
                        className="rounded-xl max-sm:mx-auto"
                    />
                </a>
            </div>
        </CommonHeroSection>
    );
}