import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Bharatconnectlogo from "../../assets/icons/images/Bharatconnectlogo.png";

const menuItems = [
  { to: "/", label: "Home", icon: "🏠" },
  { to: "/qr", label: "QR", icon: "🔳" },
  {
    to: "/history",
    label: "History",
    icon: "🕘",
    hasDropdown: true,
    submenus: [
      { label: "Transaction History", to: "/history/transactions" },
      { label: "Settlement History", to: "/history/settlements" }
    ]
  },
  { to: "/profile", label: "Profile", icon: "👤" },
];

function SideNavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-sidebar') && !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleMenuClick = (item) => {
    if (item.hasDropdown) {
      toggleDropdown(item.label);
    } else {
      setOpenDropdown(null);
      // Close mobile menu when navigating
      if (isMobile) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // Mobile Menu Button - Updated with better alignment and styling
  const MobileMenuButton = () => (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="mobile-menu-button md:hidden fixed top-4 left-4 z-50 p-2 bg-white text-gray-700 rounded-md shadow-sm hover:bg-gray-50 transition-all duration-200 border border-gray-200"
      aria-label="Toggle menu"
    >
      {isMobileMenuOpen ? (
        <X size={18} className="text-gray-600" />
      ) : (
        <Menu size={18} className="text-gray-600" />
      )}
    </button>
  );

  // Sidebar Content Component - Updated with minimal background
  const SidebarContent = ({ className }) => (
    <aside className={className}>
      {/* Mobile Header */}
      {isMobile && (
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <img
            src={Bharatconnectlogo}
            alt="Bharat Connect"
            className="h-8 object-contain"
          />
          <button
            onClick={closeMobileMenu}
            className="text-gray-500 hover:text-gray-700 bg-white focus:outline-none border border-transparent rounded-lg"
          >
            <X size={20} />
          </button>
        </div>
      )}

      <nav className="flex-1 px-4 pt-6 pb-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === "/"}
              onClick={() => handleMenuClick(item)}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 group
                ${isActive
                  ? isMobile 
                    ? "bg-green-50 text-green-700 shadow-sm border border-green-200"
                    : "bg-white text-[#2D5A3D] shadow-sm"
                  : isMobile
                    ? "hover:bg-gray-50 text-gray-700 hover:text-gray-900"
                    : "hover:bg-white/10 text-white/90 hover:text-white"
                }`
              }
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </div>
              {item.hasDropdown && (
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </NavLink>
            {item.hasDropdown && openDropdown === item.label && (
              <div className={`ml-10 mt-2 space-y-1 rounded-lg p-2 shadow-sm ${
                isMobile 
                  ? "bg-gray-50 border border-gray-200" 
                  : "bg-white"
              }`}>
                {item.submenus.map((sub, idx) => (
                  <NavLink
                    key={idx}
                    to={sub.to}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block text-sm px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                        isActive
                          ? isMobile
                            ? "bg-green-100 text-green-800"
                            : "bg-[#4A8B5C] text-white"
                          : isMobile
                            ? "text-gray-600 hover:bg-gray-100"
                            : "text-[#2D5A3D] hover:bg-[#f2f2f2]"
                      }`
                    }
                  >
                    {sub.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer Logo */}
      <div className={`w-full px-6 py-4 flex items-center justify-center ${
        isMobile ? "bg-gray-50 border-t border-gray-200" : "bg-white"
      }`}>
        <img
          src={Bharatconnectlogo}
          alt="Bharat Connect"
          className="h-8 object-contain"
        />
      </div>
    </aside>
  );

  return (
    <>
      <MobileMenuButton />
      
      {/* Desktop Sidebar - Keep original styling */}
      <SidebarContent className="hidden md:flex w-64 ml-8 bg-gradient-to-b from-[#4A8B5C] to-[#2D5A3D] text-white rounded-2xl flex-col overflow-hidden shadow-lg h-[calc(100vh-6rem)] sticky top-6" />
      
      {/* Mobile Sidebar Overlay - Updated with minimal background */}
      {isMobile && isMobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-30" onClick={closeMobileMenu} />
          
          {/* Mobile sidebar with minimal background */}
          <SidebarContent className="mobile-sidebar fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-white text-gray-900 flex flex-col overflow-hidden shadow-xl transform transition-transform duration-300 ease-in-out z-50" />
        </>
      )}
    </>
  );
}

export default SideNavBar;