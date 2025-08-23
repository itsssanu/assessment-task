import { useState } from "react";
import { NavLink } from "react-router-dom";
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
      { label: "Transaction History" },
      { label: "Settlement History" }
    ]
  },
  { to: "/profile", label: "Profile", icon: "👤" },
];

function SideNavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleMenuClick = (item) => {
    if (item.hasDropdown) {
      toggleDropdown(item.label);
    } else {
      setOpenDropdown(null);
    }
  };

  return (
    <aside className="w-64 ml-8 bg-gradient-to-b from-[#4A8B5C] to-[#2D5A3D] text-white rounded-2xl flex flex-col overflow-hidden shadow-lg h-[calc(100vh-6rem)] sticky top-6">
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
                  ? "bg-white text-[#2D5A3D] shadow-sm"
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
              <div className="ml-10 mt-2 space-y-1 bg-white rounded-lg p-2 shadow-sm">
                {item.submenus.map((sub, idx) => (
                  <div
                    key={idx}
                    className="text-[#2D5A3D] text-sm px-3 py-2 rounded-lg cursor-pointer hover:bg-[#f2f2f2] transition-colors"
                  >
                    {sub.label}
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </nav>
    <div className="bg-white w-full px-6 py-4 flex items-center justify-center">
      <img
        src={Bharatconnectlogo}
        alt="Bharat Connect"
        className="h-8 object-contain"
      />
    </div>
  </aside>
  );
}

export default SideNavBar;
  