import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../components/HomePage/HomePage';
import LogInRedirect from '../components/LogIn/LogInRedirect';
import Detail from '../pages/Detail';
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
        path: '/detail',
        element: <Detail />
      }
    ]
  }
]);
export default router;
