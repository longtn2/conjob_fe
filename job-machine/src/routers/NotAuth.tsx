import { getCookie } from 'utils/utils';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NotAuth = () => {
  const token = getCookie('token');
  const refreshToken = getCookie('refreshToken');

  const navigate = useNavigate();
  useEffect(() => {
    if (!(token && refreshToken)) {
      navigate('/login');
    }
  }, []);
  return <Outlet />;
};

export default NotAuth;
