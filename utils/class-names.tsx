import clsx from "clsx";

export const getThemeClass = (
    theme: "dark" | "light",
    section: "section1" | "section2",
    extraClasses = ""
) => {
    const sectionColors = {
        dark: {
            section1: "bg-[#000000] text-white",
            section2: "bg-[#111827] text-white",
        },
        light: {
            section1: "bg-[#FFFFFF] text-black",
            section2: "bg-[#F9FAFB] text-black",
        },
    };

    return clsx(extraClasses, sectionColors[theme][section]);
};
