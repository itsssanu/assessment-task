import { Routes, Route, Navigate } from "react-router-dom";
import TopNavBar from "./groupComponents/TopNavBar";
import SideNavBar from "./groupComponents/SideNavBar";
// Import your page components
import Dashboard from "./pageComponents/Home/Dashboard";
import QR from "./pageComponents/QR/QR";
import History from "./pageComponents/History/History";
import Profile from "./pageComponents/Profile/Profile";

function MasterLayout() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Fixed Top Navbar */}
      <TopNavBar />

      {/* Sidebar + Main Content */}
      <div className="flex flex-1 overflow-hidden bg-gray-50">
        {/* Fixed Sidebar */}
        <SideNavBar />

        {/* Scrollable Main Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/qr" element={<QR />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
            {/* Fallback redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default MasterLayout;
