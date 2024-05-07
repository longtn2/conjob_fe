import { pathUrlProfileApi } from '@/constants/constants';
import { ProfileAdminType } from '@/interfaces/interfaces';
import { httpApi } from '@/service/customize_axios';
import { convertUrlToBase64, isBase64String } from '@/utils/utils';

export const ProfileApi = {
  getProfile: () => {
    return httpApi.get(pathUrlProfileApi.GET_PROFILE);
  },
  postProfileImage: async (url: string) => {
    const base64String = await convertUrlToBase64(url);
    if (isBase64String(base64String)) {
      return httpApi.post(pathUrlProfileApi.POST_PROFILE_IMAGE, {
        params: {
          image: base64String
        }
      });
    } else {
      return Promise.reject('Url không hợp lệ');
    }
  },
  postDataProfile: (values: ProfileAdminType) => {
    return httpApi.post(pathUrlProfileApi.POST_PROFILE_CHANGE, values);
  }
};
