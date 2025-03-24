import AboutSection from "@/components/about-section";
import ProfileIntro from "@/components/profile-intro";
import Skills from "@/components/skills";
import ExperienceSection from "@/components/experience-section";
import WorkSection from "@/components/work-section";
import ContactSection from "@/components/contact-section";
export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <ProfileIntro/>
      <main className="flex flex-col row-start-2 items-center sm:items-start ">
        <AboutSection/>
        <Skills/>
        <ExperienceSection/>
        <WorkSection/>
      </main>
      <ContactSection/>
    </div>
  );
}
