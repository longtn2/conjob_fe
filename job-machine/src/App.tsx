import CustomLayout from 'Layout';
import CustomForm from 'components/common/BaseForm';
import { ConfigProvider } from 'antd';
import Category from 'pages/Admin/Category/Category';
import AuthPage from 'pages/auth/AuthPage';
import LayoutApp from 'layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Post from 'pages/postManagement';
import 'layout/main.css';

const App = () => {
  return (
    // <ConfigProvider
    //   theme={{
    //     token: {
    //       fontFamily: 'Montserrat',
    //     },
    //   }}
    // >
    <Routes>
      <Route path='/' element={<LayoutApp />}>
        <Route path='category' element={<Category />} />
        <Route path='post' element={<Post />} />
      </Route>
    </Routes>
    // </ConfigProvider>
  );
};

export default App;
