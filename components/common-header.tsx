export default function CommonHeader({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <>
        <div className="md:px-[130px] px-[30px] bg-[#F9F7FE]">
            {children}
        </div>
        </>
    )
}