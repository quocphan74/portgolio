
type ClassProps = {
  number?: string;
  title?: string;
  description?: string;
};
export default function ServiceCard({
  number = "0",
  title = "",
  description = ""
}: ClassProps) {
  return (
    <>
      <div className="bg-[#F9F7FE] p-[31px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-[372px] h-[343px]">
        <div className="flex items-center justify-end mb-[7px] opacity-50">
          <span className="text-6xl font-medium text-[#3F3A64] mr-2">{number}</span>
        </div>
        <h3 className="text-2xl font-semibold text-[#3F3A64] mb-4">{title}</h3>
        <p className="text-[#696969] mb-5">{description}</p>
        <a
          href="#"
          className="text-[#3F3A64] font-medium flex flex-col"
        >
          Read More
          <div className="h-[2px] w-19 bg-[#7D11F9]"></div>
        </a>
      </div>
    </>
  )
}