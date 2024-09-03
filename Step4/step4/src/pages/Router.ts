import { createBrowserRouter } from "react-router-dom";
import OverviewPage from "./OverviewPage";
import LoginPage from "./LoginPage";

export const router = createBrowserRouter([
  { path: "/", Component: LoginPage },
  {
    path: "/overview",
    Component: OverviewPage,
  },
]);
