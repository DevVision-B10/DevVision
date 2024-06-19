import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../components/HomePage/HomePage';
import LogInRedirect from '../components/LogIn/LogInRedirect';
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
        path: '*',
        element: <UnknownPage />
      }
    ]
  }
]);
export default router;

/**
 * 검색이랑
 * 로그인안했을때 마이페이지가는거 막는거요 ??
 *
 */
