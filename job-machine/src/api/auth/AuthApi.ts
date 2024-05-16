import { FormLoginType } from "@/interfaces/interfaces";
import { httpApi } from "@/service/customize_axios";


export const AuthApi = {
  apiLogin: (values: FormLoginType): Promise<FormLoginType> => {
    const url = '/login';
    return new Promise((resolve, reject) => {
      httpApi
        .post(url, values)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  apiLogout: () => {
    const url = '/logout';
    return new Promise((resolve, reject) => {
      httpApi
        .post(url)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};
