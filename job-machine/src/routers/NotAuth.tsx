import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCookie } from '@/utils/utils';
import { pathUrlRouter } from '@/constants/constants';

const NotAuth = () => {
  const token = getCookie('token');
  const refreshToken = getCookie('refreshToken');

  const navigate = useNavigate();
  useEffect(() => {
    if (!(token && refreshToken)) {
      navigate(pathUrlRouter.LOGIN);
    }
  }, []);
  return <Outlet />;
};

export default NotAuth;
