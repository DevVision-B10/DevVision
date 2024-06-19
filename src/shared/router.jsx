import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import LogInRedirect from '../components/LogIn/LogInRedirect';
import HomePage from '../pages/HomePage';
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
