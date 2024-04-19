import axios, { AxiosError } from 'axios';
import { ApiError } from '@/api/ApiError';
import { AuthApi } from '@/api/auth/AuthApi';
import { getCookie } from '@/utils/utils';
import Cookies from 'js-cookie';

export interface ApiErrorData {
  message: string;
  status: number;
}

const readToken = undefined;

export const httpApi = axios.create({
  baseURL: 'https://maggot-intent-cicada.ngrok-free.app/'
});

httpApi.interceptors.request.use(
  function (config) {
    let token = readToken;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.headers['Access-Control-Allow-Origin'] = '*';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
  if (error.response) {
    const responseData = error.response.data as ApiErrorData;
    const { status } = responseData;
    if (status === 401) {
      AuthApi.apiRefreshToken().then((res: any) => {
        Cookies.set('token', res.token);
      });
    }
    throw new ApiError<ApiErrorData>(
      responseData.message || error.message,
      responseData
    );
  } else {
    throw new ApiError<ApiErrorData>(error.message, undefined);
  }
});
