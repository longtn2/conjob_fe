import { createBrowserRouter, Navigate } from 'react-router-dom';
import NotAuth from './NotAuth';
import AuthPage from '@/pages/auth/AuthPage';
import LayoutApp from '@/layout/Layout';
import Category from '@/pages/Admin/Category/Category';
import Post from '@/pages/postManagement';
import { PATH_URL_ROUTER } from '@/constants/constants';

const AdminLayout = () => {
  return <NotAuth></NotAuth>;
};

export const router = createBrowserRouter([
  {
    path:PATH_URL_ROUTER.login,
    element: <AuthPage />,
  },
  {
    element: <AdminLayout />,
    children: [
      {
        element: <LayoutApp />,
        path: PATH_URL_ROUTER.home,
        children: [
          {
            element: <Category />,
            path: PATH_URL_ROUTER.category,
          },
          {
            element: <Post />,
            path: PATH_URL_ROUTER.post,
          },
        ],
      },
    ],
  },
]);
