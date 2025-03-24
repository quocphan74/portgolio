
"use client"
type ClassProps = {
    type?: "section1" | "section2" 
    children: React.ReactNode; 
  };
import { getThemeClass } from "@/utils/class-names";
import { useTheme } from "@/components/theme-context";
export default function CommonHeroSection({
    type = "section1",
    children,
}:ClassProps){
    const { theme, toggleTheme } = useTheme();
    return (
        <>
        <div 
        className={getThemeClass(theme, type,"px-[130px] py-[50px] md:flex w-full max-sm:py-[15px] max-sm:px-[30px]")}
        >
            {children}
        </div>
        </>
    )
}