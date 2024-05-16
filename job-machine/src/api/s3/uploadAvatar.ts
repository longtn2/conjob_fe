import axios from 'axios';

export const uploadAvatarApi = {
  uploadAvatar: (url: string, values: string, fileLength: number) => {
    return axios.put(url, values, {
      headers: {
        'Content-Type': 'image/*',
        'Content-Length': fileLength,
        'Access-Control-Allow-Origin': 'PUT'
      }
    });
  }
};
