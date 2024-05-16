
import { getCookie } from '@/utils';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const AdminRoute = () => {
  const token = getCookie('token');
  return token ? <Outlet /> : <Navigate to='/login' />;
};

export default AdminRoute;
