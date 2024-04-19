<<<<<<< Updated upstream
import axios, { AxiosError } from 'axios';
import { ApiError } from '@/api/ApiError';

export interface ApiErrorData {
  message: string;
}

const readToken = undefined;

export const httpApi = axios.create({
  baseURL: 'https://maggot-intent-cicada.ngrok-free.app/',
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
=======
import axios, { AxiosError } from "axios";
import { ApiError } from "../api/ApiError";

const readToken = "";

export const httpApi = axios.create({
  baseURL: "",
});

export const sightengineApi = axios.create({
  baseURL: "",
});

httpApi.interceptors.request.use((config) => {
  const headers = config.headers;
  headers["Authorization"] = `Bearer ${readToken}`;
  return config;
});
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
export interface ApiErrorData {
  message: string;
}
export interface ImageUrlItem {
  img: string;
}

>>>>>>> Stashed changes
