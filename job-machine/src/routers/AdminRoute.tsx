import { getCookie } from '@/utils/utils';
import { pathUrlRouter } from '@/constants/constants';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const AdminRoute = () => {
  const token = getCookie('token');
  return token ? <Outlet /> : <Navigate to={pathUrlRouter.LOGIN} />;
};

export default AdminRoute;
