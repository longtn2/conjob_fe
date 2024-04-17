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
