import { FormLoginType } from 'interfaces/interfaces';
import { httpApi } from 'service/customize_axios';

export const AuthApi = {
  apiLogin: (values: FormLoginType): Promise<FormLoginType> => {
    const url = '/login';
    return httpApi.post(url, values);
  },

  apiLogout: () => {
    const url = '/logout';
    return httpApi.post(url);
  },
};
