import Image from "next/image";
import CommonHeroSection from "./common-hero-section";
export default function AboutSection() {
    return (
        <CommonHeroSection bg="#FFFFFF">
            <div className="w-full md:w-1/4">
                <Image
                    src="/images/avt.png"
                    alt="Profile Image"
                    width={300}
                    height={488}
                    className="rounded-xl max-sm:mx-auto"
                />
            </div>
            <div className="w-full md:w-3/4 md:pl-2">
                <p className="text-lg uppercase text-[#8C89A2] mb-[8px] max-sm:text-center">About Me</p>
                <p className="text-[40px] text-[#3F3A64] mb-[19px] max-sm:text-center">Vivek Padia</p>
                <p className="text-[#3F3A64] text-[19px] mb-[40px] tracking-tighter max-sm:text-center">
                    I am a skilled <strong>Full Stack Developer</strong> with a strong focus on <strong>UI/UX design</strong>. Proficient in
                    <code className="text-[#E83E8C]">HTML, CSS, JavaScript, Python, R, Node.js, Flutter, React, Angular, Android development, Java, Kotlin, Ionic Cordova , Nest,
                    </code>and <code className="text-[#E83E8C]">Tensorflow</code>.
                    I create visually stunning interfaces  and seamless user experiences across platforms. With expertise in front-end, back-end, and mobile app development, I deliver dynamic applications. I am a proactive problem solver, quick learner, and collaborative team player. Passionate about staying updated with the latest  technologies and driving business success. Download my resume to learn more.
                </p>
                <div className="w-full flex max-sm:justify-center">
                    <a
                        href="/"
                        download
                        className="bg-[#7D11F9] text-white px-5 py-3 text-[18px] rounded-lg flex gap-2"
                    >
                        <Image
                            src="/images/download.svg"
                            alt="Profile Image"
                            width={30}
                            height={30}
                            className="rounded-xl max-sm:mx-auto"
                        />
                        Download My Resume
                    </a>
                </div>
            </div>
        </CommonHeroSection>
    );
}