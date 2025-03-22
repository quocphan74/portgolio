export default function NavLinks() {
    return (
        <>
        <footer className="w-full bg-white border-t border-gray-200 py-4 px-[130px] flex justify-between items-center text-gray-600 text-sm">
            <div>
                © 2023 <span className="font-bold text-gray-800">V DevStack</span>. Designed by{" "}
                <a href="#" className="text-purple-500 hover:underline">
                Vivek Padia
                </a>
            </div>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                <i className="fab fa-instagram"></i>
                </a>
            </div>
        </footer>
        </>
    )
}