import axios, { AxiosError } from 'axios';
import { ApiError } from '../api/ApiError';
import { getCookie } from '../utils/utils';

export interface ApiErrorData {
  message: string;
}

const readToken = getCookie('token');

export const httpApi = axios.create({
  baseURL: 'https://maggot-intent-cicada.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

httpApi.interceptors.request.use(config => {
  const headers = config.headers;
  if (readToken) {
    headers['Authorization'] = `Bearer ${readToken}`;
  }
  headers['ngrok-skip-browser-warning'] = true;
  headers['Accept'] = 'application/json';
  return config;
});

httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
  if (error.response) {
    const responseData = error.response.data as ApiErrorData;
    throw new ApiError<ApiErrorData>(
      responseData.message || error.message,
      responseData
    );
  } else {
    throw new ApiError<ApiErrorData>(error.message, undefined);
  }
});
