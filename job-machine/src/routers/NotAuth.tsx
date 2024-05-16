import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCookie } from '@/utils/utils';

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
