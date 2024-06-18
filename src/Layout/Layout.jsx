import { Outlet } from 'react-router-dom';
import '../styles/color.css';
import Menubar from './Menubar';
function Layout() {
  return (
    <main>
      <Menubar />
      <Outlet />
    </main>
  );
}

export default Layout;
