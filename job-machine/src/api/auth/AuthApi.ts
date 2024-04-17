import { FormLoginType } from '@/interfaces/interfaces';
import { httpApi } from '@/service/customize_axios';
import { URL_LOGIN, URL_LOGOUT } from '@constants/constants';
import axios from 'axios';
export const AuthApi = {
  apiLogin: (values: FormLoginType): Promise<FormLoginType> => {
    return httpApi.post(URL_LOGIN, values);
  },

  apiLogout: () => {
    const url = '/logout';
    return httpApi.post(URL_LOGOUT);
  },
};
