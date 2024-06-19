import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import LogInRedirect from '../components/LogIn/LogInRedirect';
import HomePage from '../pages/HomePage';
import MyPage from '../pages/Mypage';
import PlayListDetail from '../pages/PlayListDetail/PlayListDetail';
import UnknownPage from '../pages/UnknownPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/auth/callback',
        element: <LogInRedirect />
      },
      {
        path: '/playlist/:id',
        element: <PlayListDetail />
      },
      {
        path: '/mypage',
        element: <MyPage />
      },
      {
        path: '*',
        element: <UnknownPage />
      }
    ]
  }
]);

export default router;
