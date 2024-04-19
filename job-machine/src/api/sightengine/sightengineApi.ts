import { URL_IMG_API_SIGHTENGINE } from "constants/constants";
import { config } from "service/customize_sightengine";
import { httpApi } from "service/customize_axios";

export const SightengineApi = {
  getImg: (values: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const valuesConfig = config(URL_IMG_API_SIGHTENGINE, values);
      httpApi(valuesConfig)
        .then((res) => resolve(res.data.summary))
        .catch((err) => {
          if (err.response) reject(err.response.data);
          reject(err.message);
        });
    });
  },
};
