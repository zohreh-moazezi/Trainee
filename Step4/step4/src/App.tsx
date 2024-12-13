import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./pages/router";
import { ThemeProvider } from "styled-components";
import { light } from "./theme";
import { Global } from "./global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={light}>
      <Global />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
