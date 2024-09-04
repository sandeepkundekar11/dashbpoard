import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardSkeleton } from "./Components/Skeletons/DashboardSkeleton";
const Dashboard = React.lazy(() => import("./Components/Dashboard"));
const NavigationWrapper = React.lazy(() =>
  import("./Components/HelperComponents/NavigationWrapper")
);
const Login = React.lazy(() => import("./Components/Login"));
const App = () => {
  return (
    <>
      <Suspense fallback={<DashboardSkeleton />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <NavigationWrapper>
                  <Dashboard />
                </NavigationWrapper>
              }
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};
export default App;
