import { useState, useEffect } from "react";
import logo from "../../assets/icons/images/logo.png";
import AdminProfile from "../../assets/icons/images/AdminProfile.png";

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
    <header className="h-16 border-b bg-white flex items-center justify-between px-4 md:px-14 relative shadow-sm">
      {/* Left side - Logo with proper spacing for mobile menu button */}
      <div className={`flex items-center gap-2 ${isMobile ? 'ml-12' : ''} transition-all duration-200`}>
        <img src={logo} alt="QPay Logo" className="h-8 md:h-10 w-auto" />
      </div>

      {/* Right side - Profile section */}
      <div className="flex items-center gap-3 md:gap-3">
        {/* Profile Image */}
        <div className="flex items-center">
          <img 
            src={AdminProfile} 
            alt="Admin Profile" 
            className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
          />
        </div>

        {/* Greeting text and name */}
        <div className="text-left">
          <p className="text-sm text-gray-400 leading-tight mb-0">Hello</p>
          <p className="text-base font-medium text-gray-900 leading-tight">
            <span className="hidden sm:inline">Thomas Shelby</span>
            <span className="sm:hidden">Thomas</span>
          </p>
        </div>

        {/* Dropdown arrow */}
        <button className="text-gray-400 hover:text-gray-600  bg-white hover:bg-gray-50 hover:border-gray-200 transition-all duration-200 border border-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default TopNavBar;