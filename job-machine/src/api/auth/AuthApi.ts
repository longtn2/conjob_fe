import { FormLoginType } from '@/interfaces/interfaces';
import { httpApi } from '@/service/customize_axios';
import { pathUrlAuthApi } from '@/constants/constants';
import { getCookie } from '@/utils/utils';

const refreshToken = getCookie('refreshToken');

export const AuthApi = {
  apiLogin: (values: FormLoginType): Promise<FormLoginType> => {
    return httpApi.post(pathUrlAuthApi.LOGIN, values);
  },

  apiLogout: () => {
    return httpApi.post(pathUrlAuthApi.LOGOUT);
  },

  apiRefreshToken: () => {
    return httpApi.get(pathUrlAuthApi.REFRESH_TOKEN, {
      params: {
        token: refreshToken,
      },
    });
  },
};
