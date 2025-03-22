import Image from "next/image";
import Footer from "@/components/footer"
import CommonHeader from "@/components/common-header";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <CommonHeader>
        <div className="flex pb-[48px]">
          <div className="md:w-3/5 w-full">
            <div className="w-full">
              <p className="text-lg uppercase text-[#8C89A2]">HELLO</p>
              <p className="text-5xl text-[#3F3A64] mt-[5px]">
                I'm <strong className="font-bold">Vivek Padia</strong>
              </p>
              <p className="text-[#3F3A64] border-r-2 w-[270px] mt-[8px] mb-[12px] text-5xl"><strong className="text-5xl ">a </strong>Freelancer</p>
              <p className="mt-4 text-[#3F3A64] md:w-[570px] text-[19px] tracking-tight">
                A highly <strong>organized</strong>, <strong>innovative</strong>, and <strong>goal-driven</strong> undergraduate with
                <strong> exceptional communication</strong>, <strong>problem-solving</strong>, and <strong>leadership <br /> abilities</strong>,
                coupled with a <strong>passion</strong> for exploring the vast realm of <br />
                <code className="text-[#E83E8C]"> Information Technology</code>.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex justify-center md:justify-start gap-4">
                <Link href="/projects" className="bg-[#7D11F9] text-white px-6 py-2 rounded-lg text-[18px]">
                  See Projects
                </Link>
                <Link href="/designs" className="border-2 border-purple-600 text-[#7D11F9] bg-[#FFFFFF] px-6 py-2 rounded-lg text-[18px]">
                  See Designs
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 md:block hidden">
            <Image
              className="max-sm:hidden"
              src="/images/header_secstion1.png"
              alt="Next.js logo"
              width={570}
              height={380}
            />
          </div>
        </div>
      </CommonHeader>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start px-[130px]">
        {/* About */}
        <section className="py-[49px] bg-white md:flex items-center w-full">
          <div className="w-full md:w-1/4">
            <Image
              src="/images/avt.png"
              alt="Profile Image"
              width={300}
              height={488}
              className="rounded-xl"
            />
          </div>
          <div className="w-full md:w-3/4 md:pl-2">
            <p className="text-lg uppercase text-[#8C89A2] mb-[8px]">About Me</p>
            <p className="text-[40px] text-[#3F3A64] mb-[19px]">Vivek Padia</p>
            <p className="text-[#3F3A64] text-[19px] mb-[40px] tracking-tighter">
              I am a skilled <strong>Full Stack Developer</strong> with a strong focus on <strong>UI/UX design</strong>. Proficient in  
              <code className="text-[#E83E8C]">HTML,<br/> CSS, JavaScript, Python, R, Node.js, Flutter, React, Angular, Android development, <br/> Java, Kotlin, Ionic Cordova , Nest, 
              </code>and <code className="text-[#E83E8C]">Tensorflow</code>. 
              I create visually stunning interfaces <br/> and seamless user experiences across platforms. With expertise in front-end, back-end, and mobile app development, I deliver dynamic applications. I am a proactive problem solver,<br/> quick learner, and collaborative team player. Passionate about staying updated with the latest <br/> technologies and driving business success. Download my resume to learn more.
            </p>
            <div className="">
              <a
                href="/"
                download
                className="bg-[#7D11F9] text-white px-5 py-3 text-[18px] rounded-lg"
              >
                Download My Resume
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
