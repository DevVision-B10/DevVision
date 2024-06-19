import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../styles/GlobalStyle/GlobalStyle';
import '../styles/color.css';
import Menubar from './Menubar';
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
