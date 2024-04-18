import { FormLoginType } from '@/interfaces/interfaces';
import { httpApi } from '@/service/customize_axios';
import { PATH_URL_AUTH_API } from '@/constants/constants';
export const AuthApi = {
  apiLogin: (values: FormLoginType): Promise<FormLoginType> => {
    return httpApi.post(PATH_URL_AUTH_API.login, values);
  },

  apiLogout: () => {
    return httpApi.post(PATH_URL_AUTH_API.logout);
  },
};
