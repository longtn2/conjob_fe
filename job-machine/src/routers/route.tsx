import { createBrowserRouter, Navigate } from 'react-router-dom';
import NotAuth from './NotAuth';
import AuthPage from '@/pages/auth/AuthPage';
import LayoutApp from '@/layout/Layout';
import Category from '@/pages/Admin/Category/Category';
import { pathUrlAuthApi, pathUrlRouter } from '@/constants/constants';
import PostContent from '@/pages/Admin/PostManage/Post';
import AdminProfile from '@/pages/Admin/Profile/AdminProfile';
import HistoryVIdeoPage from '@/pages/Admin/historyVIdeo/HistoryVIdeoPage';

const AdminLayout = () => {
  return <NotAuth></NotAuth>;
};

export const router = createBrowserRouter([
  {
    path: pathUrlRouter.LOGIN,
    element: <AuthPage />
  },
  {
    element: <AdminLayout />,
    children: [
      {
        element: <LayoutApp />,
        path: pathUrlRouter.HOME,
        children: [
          {
            element: <Category />,
            path: pathUrlRouter.CATEGORY
          },
          {
            element: <PostContent />,
            path: pathUrlRouter.POST
          },
          {
            element: <AdminProfile />,
            path: pathUrlRouter.PROFILE
          },
          {
            element: <HistoryVIdeoPage />,
            path: pathUrlRouter.HISTORY_VIDEO
          }
        ]
      }
    ]
  }
]);
