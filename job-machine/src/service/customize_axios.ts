<<<<<<< HEAD
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
import { responseData } from "api/mock/news.api";

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
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda

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
<<<<<<< HEAD
=======

export interface ApiErrorData {
  message: string;
}

export interface ImageUrlItem {
  img: string;
}

export const checkPost2 = () => {
  responseData.map(async (response) => {
    const responseAPI = await axios.get(
      "https://api.sightengine.com/1.0/check-workflow.json",
      {
        params: {
          url: response.img,
          workflow: "wfl_g5IE1sK45fvgtphGpahhV",
          api_user: "268568153",
          api_secret: "Rqcp8zjVp4tcwjoygwfEmUwWuqiipqrk",
        },
      }
    );
    if (responseAPI.data.summary.reject_reason[0]) {
      response.status = responseAPI.data.summary.reject_reason[0].id;
    }

    console.log("aaaaaa tôi đã ở đây rồi hello ", response.status);
  });
};
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda
