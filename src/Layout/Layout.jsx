import { Outlet } from 'react-router-dom';
import LogIn from '../components/LogIn/LogIn';
import { GlobalStyle } from '../styles/GlobalStyle/GlobalStyle';
import '../styles/color.css';
import useModalStore from '../zustand/modal';
import Menubar from './Menubar';

function Layout() {
  const { isVisible } = useModalStore();
  return (
    <main>
      <GlobalStyle visible={isVisible} />
      {isVisible && <LogIn />}
      <Menubar />
      <Outlet />
    </main>
  );
}

export default Layout;
