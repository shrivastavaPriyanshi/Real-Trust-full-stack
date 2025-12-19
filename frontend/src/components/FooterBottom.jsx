import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/realtrust-logo.png";   // adjust path if needed

const FooterBottom = () => {
  return (
    <div className="bg-black text-white py-4 px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT */}
        <p className="text-sm">
          © 2025 Real Trust. All Rights Reserved
        </p>

        {/* CENTER LOGO */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Real Trust Logo"
            className="w-8 h-8"
          />
          <h2 className="text-lg font-bold">
            Real Trust
          </h2>
        </div>

        {/* RIGHT SOCIAL ICONS */}
        <div className="flex gap-4 text-lg">
          <FaTwitter className="cursor-pointer hover:text-gray-400 transition" />
          <FaInstagram className="cursor-pointer hover:text-gray-400 transition" />
          <FaFacebookF className="cursor-pointer hover:text-gray-400 transition" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-400 transition" />
        </div>

      </div>
    </div>
  );
};

export default FooterBottom;
