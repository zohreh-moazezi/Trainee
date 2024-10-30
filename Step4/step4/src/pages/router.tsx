import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./login";
import OverviewPage from "./overview/OverviewPage";
import { ProtectedLayout } from "layout/protectedLayout";
import { getAccessToken } from "@utils/token";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  {
    path: "/overview",
    element: (
      <ProtectedLayout isAuthenticated={!!getAccessToken()}>
        <OverviewPage />
      </ProtectedLayout>
    ),
  },
]);

export default router;
