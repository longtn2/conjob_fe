import { FormLoginType } from '@/interfaces/interfaces';
import { httpApi } from '@/service/customize_axios';
import axios from 'axios';
export const AuthApi = {
  apiLogin: (values: FormLoginType): Promise<FormLoginType> => {
    const url = 'api/v1/auth/login';
    return httpApi.post(url, values);
  },

  apiLogout: () => {
    const url = '/logout';
    return httpApi.post(url);
  },
};
