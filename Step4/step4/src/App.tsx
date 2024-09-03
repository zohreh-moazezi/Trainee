import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './pages/Router';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './theme';
import { Global } from './global';
const App = () => {
  return (
    <ThemeProvider theme={light}>
      <Global />
     <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
