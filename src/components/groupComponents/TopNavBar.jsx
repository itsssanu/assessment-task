import { useState, useEffect } from "react";
import logo from "../../assets/icons/images/logo.png";

function TopNavBar() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-4 md:px-14 relative">
      {/* Left side - Logo with proper spacing for mobile menu button */}
      <div className={`flex items-center gap-2 ${isMobile ? 'ml-12' : ''} transition-all duration-200`}>
        <img src={logo} alt="QPay Logo" className="h-8 md:h-10 w-auto" />
      </div>

      {/* Right side - Responsive layout */}
      <div className="flex items-center gap-3 md:gap-6">
        {/* Greeting - Hide text on very small screens, show abbreviated on small screens */}
        <div className="text-right">
          <p className="text-xs md:text-sm text-gray-400 hidden xs:block">Hello</p>
          <p className="text-sm md:text-base font-medium text-gray-700 truncate max-w-[120px] md:max-w-none">
            <span className="hidden sm:inline">Thomas Shelby</span>
            <span className="sm:hidden">Thomas</span>
          </p>
        </div>

        {/* Dropdown arrow - Smaller on mobile */}
        <button className="text-gray-500 hover:text-gray-700 p-1 md:p-2 rounded-md hover:bg-gray-50 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 md:h-4 md:w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default TopNavBar;