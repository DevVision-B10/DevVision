import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../components/HomePage/HomePage';
import LogInRedirect from '../components/LogIn/LogInRedirect';
import WatchPage from '../pages/WatchPage/WatchPage';
import PlayListDetail from '../pages/PlayListDetail/PlayListDetail';
import VideoPage from '../pages/VideoPage';

// cSpell:ignore watchpage

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
        path: '/video/:videoId',
        element: <VideoPage />
      },
      {
        path: '/watchpage',
        element: <WatchPage />
      }
    ]
  }
]);

export default router;
