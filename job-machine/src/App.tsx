import CustomLayout from 'Layout';
import CustomForm from 'components/common/BaseForm';
import { ConfigProvider } from 'antd';
import Category from 'pages/Admin/Category/Category';
import AuthPage from 'pages/auth/AuthPage';
import LayoutApp from 'layout/Layout';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import Post from 'pages/postManagement';
import 'layout/main.css';
import AdminRoute from 'routers/AdminRoute';
import NotAuth from 'routers/NotAuth';
import { router } from 'route';

const App = () => {
  return (
    // <ConfigProvider
    //   theme={{
    //     token: {
    //       fontFamily: 'Roboto',
    //     },
    //   }}
    // >
    <>
      <RouterProvider router={router} />
      {/* <Routes>
        <Route path='/' element={<NotAuth />}>
          <Route path='/login' element={<AuthPage />} />
        </Route>
      </Routes>
      <Routes>
        <Route element={<AdminRoute />}>
          <Route path='/' element={<LayoutApp />}>
            <Route path='category' element={<Category />} />
            <Route path='post' element={<Post />} />
          </Route>
        </Route>
      </Routes> */}
    </>
    // </ConfigProvider>
  );
};

export default App;
