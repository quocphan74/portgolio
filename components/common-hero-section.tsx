
type ClassProps = {
    bg?: string; 
    children: React.ReactNode; 
  };
export default function CommonHeroSection({
    bg = "F9F7FE",
    children,
}:ClassProps){
    return (
        <>
        <div className="px-[130px] py-[50px] md:flex w-full max-sm:py-[15px] max-sm:px-[30px]"
            style={{ backgroundColor: bg }}
        >
            {children}
        </div>
        </>
    )
}