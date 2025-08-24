import { Routes, Route } from "react-router-dom";
import MasterLayout from "./MasterLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<MasterLayout />} />
    </Routes>
  );
}
