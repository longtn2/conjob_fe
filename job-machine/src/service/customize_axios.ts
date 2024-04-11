import axios, { AxiosError } from 'axios';
import { ApiError } from '../api/ApiError';

const readToken = '';

export const httpApi = axios.create({
  baseURL: '',
});

httpApi.interceptors.request.use(config => {
  const headers = config.headers;
  headers['Authorization'] = `Bearer ${readToken}`;
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

export interface ApiErrorData {
  message: string;
}
