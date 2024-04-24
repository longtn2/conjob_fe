import axios, { AxiosError } from 'axios';
import { ApiError } from '@/api/ApiError';
import { AuthApi } from '@/api/auth/AuthApi';
import { getCookie, getTokenAsync } from '@/utils/utils';
import Cookies from 'js-cookie';

export interface ApiErrorData {
  message: string;
  status_code: number;
  errors: any;
}

export const httpApi = axios.create({
  baseURL: 'https://0625-210-245-110-144.ngrok-free.app/'
});

httpApi.interceptors.request.use(
  function (config) {
    const readToken = getCookie('token');
    if (readToken) {
      config.headers['Authorization'] = `Bearer ${readToken}`;
    }
    config.headers['ngrok-skip-browser-warning'] = true;
    config.headers['Access-Control-Allow-Origin'] = '*';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

httpApi.interceptors.response.use(
  response => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response) {
      const responseData = error.response.data as ApiErrorData;
      const { status_code } = responseData;
      if (status_code === 401) {
        AuthApi.apiRefreshToken().then((res: any) => {
          Cookies.set('token', res.token);
        });
      }

      throw new ApiError<ApiErrorData>(
        responseData.message || error.message,
        responseData.errors
      );
    } else {
      throw new ApiError<ApiErrorData>(error.message, undefined);
    }
  }
);
