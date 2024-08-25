import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import OverviewPage from './pages/OverviewPage';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './theme';
import { Global } from './global';
const App = () => {
  return (
    <ThemeProvider theme={light}>
      <Global />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/overview" element={<OverviewPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
