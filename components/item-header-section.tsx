
type ClassProps = {
    title?: string;
    sub?: string;
};
export default function ItemHeaderSection({ title = "", sub = "" }: ClassProps) {

    return (
        <>
            <div className="text-center mb-10">
                <span className="bg-gray-700 px-3 py-1 rounded-lg uppercase text-sm tracking-wide !text-white">
                    {title}
                </span>
                <h2 className="text-xl font-semibold mt-4">
                    {sub}
                </h2>
            </div>
        </>
    );
}