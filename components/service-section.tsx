import Head from "next/head";
import CommonHeroSection from "./common-hero-section";
import ServiceCard from "./service-card";

export default function ServiceSection() {
  const services = [
    {
      number: "01",
      title: "UI/UX Design",
      description:
        "Harnessing the power of user-centric design, I create visually striking and intuitive solutions that captivate audiences.",
    },
    {
      number: "02",
      title: "Web Development",
      description:
        "Translating designs into dynamic and interactive websites, I ensure seamless functionality and exceptional user experience.",
    },
    {
      number: "03",
      title: "Research & Analysis",
      description:
        "Uncovering valuable insights through meticulous research and analysis, I empower organizations to optimize and enhance performance.",
    },
  ];

  return (
    <CommonHeroSection bg="#FFFFFF">
      <div className=" w-full">
        <div className="text-center">
          <h2 className="text-[#8C89A2] uppercase tracking-widest font-semibold text-[18px] mb-[22px]">
            Services
          </h2>
          <h1 className="text-4xl md:text-[40px] text-[#3F3A64] mb-12">
            Turning Concepts into Tangible Solutions
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
          {services.map((service, index) => (
            <ServiceCard
            key={index}
            number={service.number}
            title={service.title}
            description={service.description}
          />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </CommonHeroSection>
  );
}