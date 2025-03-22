// components/TrackRecord.js
import { FaCode, FaHourglassHalf, FaGift, FaSmile } from "react-icons/fa";
import CommonHeroSection from "./common-hero-section";
export default function TrackRecordSection() {
  const stats = [
    {
      icon: <FaCode className="text-purple-600 text-3xl" />,
      label: "Completed Projects",
    },
    {
      icon: <FaHourglassHalf className="text-purple-600 text-3xl" />,
      label: "Projects in Progress",
    },
    {
      icon: <FaGift className="text-purple-600 text-3xl" />,
      label: "Awards Received",
    },
    {
      icon: <FaSmile className="text-purple-600 text-3xl" />,
      label: "Satisfied Clients",
    },
  ];

  return (
    <CommonHeroSection bg="#F9F7FE">
      <div className="w-full mx-auto">
        <h2 className="text-center text-[#8C89A2] uppercase tracking-widest font-semibold text-[18px]">
          Impressive Track Record
        </h2>
        <h1 className="text-center text-4xl md:text-5xl text-gray-800 mb-10">
          Demonstrating Excellence
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-24">{stat.icon}</div>
              <p className="text-[#696969] text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </CommonHeroSection>
  );
};
