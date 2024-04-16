import { createBrowserRouter, Navigate } from 'react-router-dom';
import NotAuth from './NotAuth';
import AuthPage from '../pages/auth/AuthPage';
import LayoutApp from '../layout/Layout';
import Category from '../pages/Admin/Category/Category';
import Post from '../pages/postManagement';

const AdminLayout = () => {
  return <NotAuth></NotAuth>;
};

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <AuthPage />,
  },
  {
    element: <AdminLayout />,
    children: [
      {
        element: <LayoutApp />,
        path: '/',
        children: [
          {
            element: <Category />,
            path: '/category',
          },
          {
            element: <Post />,
            path: '/post',
          },
        ],
      },
    ],
  },
]);
