import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import LogInRedirect from '../components/LogIn/LogInRedirect';
import MyPage from '../pages/MyPage/MyPage';
import PlayListDetail from '../pages/PlayListDetail/PlayListDetail';
import TestPage from '../pages/TestPage/TestPage';
import VideoPage from '../pages/VideoPage';
import useCourses from '../hooks/useCourses';
import HomePage from '../pages/HomePage';
import UnknownPage from '../pages/UnknownPage';
import useLogStore from '../zustand/user-log';

const ProtectRoute = ({ element }) => {
  const user = useLogStore((state) => state.user);
  return user ? element : <UnknownPage />;
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: useCourses
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
        path: '/watch/:id',
        element: <div>페이지 이동 확인</div>
      },
      {
        path: '/test',
        element: <TestPage />
      },
      {
        path: '/video/:videoId',
        element: <VideoPage />
      },
      {
        path: '/mypage',
        element: <ProtectRoute element={<MyPage />} />
      },
      {
        path: '*',
        element: <UnknownPage />
      }
    ]
  }
]);

export default router;
