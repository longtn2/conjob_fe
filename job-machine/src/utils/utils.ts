import { convertTypeDayjs, formatDayjs } from '@/helper';
import { REGEX_BASE_64 } from '@/constants/constants';
import { FileType, axiosApi } from '@/interfaces/index';
import { DateErrors, DatesInterfaces } from '@/interfaces/interfaces';
import { AxiosResponse } from 'axios';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import { useMediaQuery } from 'react-responsive';

export const getTokenAsync = async () => {
  try {
    const token = await getCookie('token');

    if (token) {
      return token;
    } else {
      throw new Error('Token not found');
    }
  } catch (error) {
    handleErrorShow(error);
  }
};

export const getCookie = (str: string) => {
  switch (str) {
    case 'roles':
      return JSON.parse(Cookies.get('roles') || '[]');
    case 'token':
      return Cookies.get('token');
    case 'refreshToken':
      return Cookies.get('refreshToken');
    default:
      throw new Error('Not Found Cookies');
  }
};

export const handleSuccess = (response: AxiosResponse<axiosApi>) => {
  const { data } = response;

  const status = data.status;
  const message = data.message;

  return { status, message };
};

export const handleError = (error: any) => {
  if (typeof error.message === 'object' && error?.message) {
    const { message } = error;
    return { message };
  }

  const { response } = error;

  if (response?.data) {
    const { data } = response;
    const { message, status } = data;

    if (typeof data === 'object' && data !== null) {
      const { errors } = data;

      if (Array.isArray(errors)) {
        if (errors.length > 0) {
          const { error } = errors[0];
          return { status, message, error };
        }
      } else if (typeof errors === 'object' && errors !== null) {
        const { error } = errors;
        return { status, message, error };
      } else if (typeof errors === 'string') {
        return { status: status, message: errors, error: null };
      }
    }
  }

  return { status: '', message: '', error: null };
};

export const handleErrorShow = (error: any) => {
  const { message, error: errorDetails }: any = handleError(error);
  let errorMessage = '';

  if (message) {
    errorMessage += message;
  }

  if (errorDetails) {
    if (errorMessage) {
      errorMessage += ' - ';
    }
    errorMessage += errorDetails;
  }
};

export const handleSuccessShow = (response: AxiosResponse<axiosApi>) => {
  const { message } = handleSuccess(response);
};

export const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export const convertUrlToBase64 = (url: string) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';

    xhr.onload = () => {
      if (xhr.status === 200) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = (reader.result as string).split(',')[1];
          resolve(base64String);
        };
        reader.onerror = reject;
        reader.readAsDataURL(xhr.response);
      } else {
        reject(new Error('Failed to load URL'));
      }
    };
    xhr.onerror = reject;
    xhr.send();
  });
};

export const isBase64String = str => {
  return REGEX_BASE_64.test(str);
};

export const dateIsValid = (value: string) => {
  const today = new dayjs.Dayjs();
  return !value || convertTypeDayjs(value) <= today;
};

export const handleLogout = () => {
  const cookies = Cookies.get();
  localStorage.removeItem('firstName');
  localStorage.removeItem('lastName');
  localStorage.removeItem('avatar');
  for (const cookie in cookies) {
    Cookies.remove(cookie);
  }
};
