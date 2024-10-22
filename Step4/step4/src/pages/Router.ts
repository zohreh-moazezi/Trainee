import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./login";

import OverviewPage from "./overview/OverviewPage";
import ProtectedLayout from "@api/layout/protectedLayout";
const router = createBrowserRouter([
  { path: "/", Component: LoginPage },
 {path:"/overview", Component:OverviewPage},
  {
    path:"/overview",
    Component:ProtectedLayout,
    children:[
      {
        index:true,
        Component:OverviewPage
      }
    ]
  }
]);

export default router;
