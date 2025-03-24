import { FaEnvelope, FaPhone, FaTwitter, FaGithub, FaLinkedin, FaRegCopy } from "react-icons/fa";
import CommonHeroSection from "./common-hero-section";

export default function ContactSection() {
    const email = "reachsagarshah@gmail.com";
    const phone = "+91 8980500565";

    const copyToClipboard = (text: string) => {
        // navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    };

    return (
        <CommonHeroSection type="section2">
            <div className="w-full  text-center" id="contact">
                <button className="bg-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition !text-white">
                    Get in touch
                </button>
                <p className="text-gray-400 mt-4">
                    What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                </p>
                <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-center gap-3 text-lg">
                        <FaEnvelope />
                        <span className="font-semibold">{email}</span>
                        <FaRegCopy className="cursor-pointer hover:text-gray-400" />
                    </div>
                    <div className="flex items-center justify-center gap-3 text-lg">
                        <FaPhone />
                        <span className="font-semibold">{phone}</span>
                        <FaRegCopy className="cursor-pointer hover:text-gray-400"/>
                    </div>
                </div>
                <p className="text-gray-500 mt-6">You may also find me on these platforms!</p>
                <div className="flex justify-center gap-5 mt-3 text-xl">
                    <FaTwitter className="cursor-pointer hover:text-gray-400" />
                    <FaGithub className="cursor-pointer hover:text-gray-400" />
                    <FaLinkedin className="cursor-pointer hover:text-gray-400" />
                </div>
            </div>
        </CommonHeroSection>
    );
}
