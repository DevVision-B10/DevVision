import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../styles/GlobalStyle/GlobalStyle';
import '../styles/color.css';
import Menubar from './Menubar';
import { GlobalStyle } from '../styles/GlobalStyle/GlobalStyle';
function Layout() {
  return (
    <main>
      <GlobalStyle />
      <Menubar />
      <Outlet />
    </main>
  );
}

export default Layout;
