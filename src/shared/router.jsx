// import { createBrowserRouter } from 'react-router-dom';
// import Layout from '../Layout/Layout';
// import HomePage from '../pages/HomePage/HomePage';
// import LogInRedirect from '../components/LogIn/LogInRedirect';
// import MyPage from '../pages/MyPage/MyPage';

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <HomePage />
//       },
//       {
//         path: '/auth/callback',
//         element: <LogInRedirect />
//       },
//       {
//         path: '/mypage',
//         element: <MyPage />
//       }
//     ]
//   }
// ]);

// export default router;

import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import LogInRedirect from '../components/LogIn/LogInRedirect';
import MyPage from '../pages/HomePage/MyPage/Mypage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'auth/callback',
        element: <LogInRedirect />
      },
      {
        path: 'mypage',
        element: <MyPage />
      }
    ]
  }
]);

export default router;
