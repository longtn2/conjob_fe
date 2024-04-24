import { pathUrlHistoryApi } from '@/constants/constants';
import { ParamsPostVideo, ResponseDataPost } from '@/interfaces/interfaces';
import { httpApi } from '@/service/customize_axios';


export const historyApi = {
  apiGetAll: (params?: ParamsPostVideo): Promise<ResponseDataPost> => {
    return httpApi.get(pathUrlHistoryApi.GET_HISTORY_POST, { params: params });
  }
};
