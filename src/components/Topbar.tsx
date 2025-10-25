import { FaChevronDown } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-black py-2 min-h-14 flex items-center px-6">
      <div className="flex justify-end items-center text-gray-400 w-full mr-16 space-x-3">
        {/* Email Link */}
        <a
          href="mailto:hello@lurity.com"
          className="hover:text-white transition-colors"
        >
          hello@lurity.com
        </a>

        {/* Separator */}
        <span className="mx-1 text-gray-600">|</span>

        {/* Language Dropdown Button */}
        <button
          type="button"
          className="flex items-center text-gray-400 hover:text-white transition-colors"
        >
          en
          <FaChevronDown className="ml-2 text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
