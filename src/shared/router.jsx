import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../components/HomePage/HomePage';
import LogInRedirect from '../components/LogIn/LogInRedirect';
import MyPage from '../pages/HomePage/MyPage/Mypage';
import VideoPage from '../pages/VideoPage';

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
        path: '/video/:videoId',
        element: <VideoPage />
      }
    ]
  }
]);

export default router;
