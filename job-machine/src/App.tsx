import CustomForm from 'components/common/BaseForm';
import { ConfigProvider } from 'antd';
import Category from 'pages/Admin/Category/Category';
import AuthPage from 'pages/auth/AuthPage';
import LayoutApp from 'layout/Layout';
import { Route, Routes } from 'react-router-dom';

import 'layout/main.css';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<AuthPage />} />
      <Route path='/' element={<LayoutApp />}>
        <Route path='category' element={<Category />} />
      </Route>
    </Routes>
  );
};

export default App;
