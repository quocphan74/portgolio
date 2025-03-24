import Image from "next/image";
import CommonHeroSection from "./common-hero-section";
import ItemHeaderSection from "./item-header-section";
export default function AboutSection() {
    return (
        <CommonHeroSection type="section2">
            <div className="w-full" id="about">
                 <ItemHeaderSection title="About Me" sub="Vivek Padia"/>
                <p className=" text-[19px] mb-[40px] tracking-tighter">
                    I am a skilled <strong>Full Stack Developer</strong> with a strong focus on <strong>UI/UX design</strong>. Proficient in
                    <code className="text-[#E83E8C]">HTML, CSS, JavaScript, Python, R, Node.js, Flutter, React, Angular, Android development, Java, Kotlin, Ionic Cordova , Nest,
                    </code>and <code className="text-[#E83E8C]">Tensorflow</code>.
                    I create visually stunning interfaces  and seamless user experiences across platforms. With expertise in front-end, back-end, and mobile app development, I deliver dynamic applications. I am a proactive problem solver, quick learner, and collaborative team player. Passionate about staying updated with the latest  technologies and driving business success. Download my resume to learn more.
                </p>
                <div className="w-full flex max-sm:justify-center">
                    <a
                        href="/"
                        download
                        className="bg-[#7D11F9]  px-5 py-3 text-[18px] rounded-lg flex gap-2"
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