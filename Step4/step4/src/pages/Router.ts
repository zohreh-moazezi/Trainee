import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./login";

// import OverviewPage from "./overview/OverviewPage";
const router = createBrowserRouter([
  { path: "/", Component: LoginPage },
  // {
  //   path: "/overview",
  //   Component: OverviewPage,
  // },
]);

export default router;
