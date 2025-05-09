import { getAccessToken } from '@utils/token';
import React, { ReactNode } from 'react';
import { Navigate} from 'react-router-dom';

type ProtectedLayoutProps = {
  children?: ReactNode;
};

export const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({
  children,
}) => {
  const isAuthenticated = !!getAccessToken();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};
