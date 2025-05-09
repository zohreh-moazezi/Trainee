import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './login';
import OverviewPage from './overview/index';
import { ProtectedLayout } from 'layout/protectedLayout';

const router = createBrowserRouter([
  { path: '/', element: <LoginPage /> },
  {
    path: '/overview',
    element: (
      <ProtectedLayout>
        <OverviewPage />
      </ProtectedLayout>
    ),
  },
]);

export default router;
