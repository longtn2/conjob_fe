import { FormLoginType, FormRegisterType } from '@/interfaces/interfaces';
import dayjs from 'dayjs';

export const fakeCallApi = ({
  email,
  password
}: FormLoginType): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve('Fake API response');
    if (email && password) {
      reject('Not required');
    }
  });
};

export const fakeCallApiRegister = ({
  name,
  email,
  password
}: FormRegisterType): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve('Fake API register response');
    if (name && email && password) {
      reject('Not required');
    }
  });
};

export const formatDayjs = (
  time: dayjs.Dayjs | string | undefined,
  format: string
): string => {
  return dayjs(time).format(format);
};
