import { pathUrlProfileApi } from '@/constants/constants';
import { ProfileAdminType, valueGetUrlS3 } from '@/interfaces/interfaces';
import { httpApi } from '@/service/customize_axios';
import { convertUrlToBase64, isBase64String } from '@/utils/utils';

export const ProfileApi = {
  getProfile: () => {
    return httpApi.get(pathUrlProfileApi.GET_PROFILE);
  },
  postProfileAdmin: (values: valueGetUrlS3) => {
    return httpApi.post(pathUrlProfileApi.POST_PROFILE_IMAGE, values);
  },
  putDataProfile: (values: ProfileAdminType) => {
    return httpApi.put(pathUrlProfileApi.POST_PROFILE_CHANGE, values);
  }
};
