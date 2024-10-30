import React, { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

type ProtectedLayoutProps = {
  isAuthenticated: boolean;
  children?: ReactNode;
};

export const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({
  isAuthenticated,
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
