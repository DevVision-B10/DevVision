import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../components/HomePage/HomePage';
import LogInRedirect from '../components/LogIn/LogInRedirect';
import MyPage from '../pages/MyPage/MyPage';
import TestPage from '../pages/TestPage/TestPage';

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
        path: '/mypage',
        element: <MyPage />
      },
      {
        path: '/test',
        element: <TestPage />
      }
    ]
  }
]);
export default router;
