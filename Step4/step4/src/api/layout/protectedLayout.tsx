import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import OverviewPage from "@pages/overview/OverviewPage";

const Redirecting = () => {
  return (
    <>
      <h1>Redirecting</h1>
      <Outlet />
    </>
  );
};

const ProtectedLayout = () => {
  const refreshToken = localStorage.getItem("access_token");

  return refreshToken ? <OverviewPage /> : <Navigate to="/" />;
};

export default ProtectedLayout;
