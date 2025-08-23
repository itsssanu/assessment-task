import React from "react";
import { BsGrid1X2Fill, BsBuildingsFill } from "react-icons/bs"; // Missing imports

export const DashboardSideMenus = () => {
  const allMenus = [
    {
      path: "/home",
      title: "Home",
      icon: <BsGrid1X2Fill className="w-5 h-5" />,
    },
    {
      path: "/history", // Fixed path case consistency
      title: "Accounts",
      icon: <BsBuildingsFill className="w-5 h-5" />, // Added missing icon
    },
    {
      path: "/profile",
      title: "Profile",
      icon: <BsBuildingsFill className="w-5 h-5" />,
    },
  ];

  return allMenus;
};
