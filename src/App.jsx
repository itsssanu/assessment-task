import React from "react";
import DashboardRoutes from "./components/Routes";
import MasterLayout from "./components/MasterLayout";

const App = () => {
  return (
      <MasterLayout>
        <DashboardRoutes />
      </MasterLayout>
  );
};

export default App;