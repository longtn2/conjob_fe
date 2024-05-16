import {
  FormLoginType,
  FormRegisterType,
  MessageStatusType
} from '@/interfaces/interfaces';
import { getCookie } from '@/utils/utils';
import { message } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

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

export const getMessageStatus = (
  messageResponse: string,
  status: MessageStatusType
) => {
  message.open({
    type: status,
    content: messageResponse
  });
};

export const getTokenAsync = async () => {
  const token = await getCookie('token');
  if (token) {
    return token;
  } else {
    throw new Error('Token not found');
  }
};

export const formatDayjs = (
  time: dayjs.Dayjs | string | undefined,
  format?: string
) => {
  return time ? dayjs(time).format(format) : '';
};

export const formatDayjsConvertTypeDayjs = (
  time: dayjs.Dayjs | string | undefined,
  format?: string
) => {
  return time ? dayjs(time, format) : '';
};
export const formatConvert = (values: string) => {
  values.replace('T', '');
};

export const convertTypeDayjs = (time: string) => {
  return dayjs(time);
};

export const getStatusPost = (
  isDeleted: boolean,
  isActive: boolean
): string => {
  if (isActive) {
    return 'active';
  } else if (isDeleted) {
    return 'reject';
  } else {
    return 'noAction';
  }
};

export const statusCode = {
  active: {
    message: 'Được Duyệt',
    color: '#52C41A'
  },
  reject: {
    message: 'Vi phạm',
    color: '#FF4D4F'
  },
  noAction: {
    message: 'Chưa duyệt',
    color: '#FF85C0'
  }
};

export const jobTypeStatusCode = {
  remote: {
    message: 'REMOTE',
    color: '#007bff'
  },
  fulltime: {
    message: 'FULL TIME',
    color: '#ffc107'
  },
  parttime: {
    message: 'Part Time',
    color: '#563dc1'
  },
  onsite: {
    message: 'ONSITE',
    color: '#28a745'
  },
  hybrid: {
    message: 'Hybrid',
    color: '#cfe2f3'
  },
  freelance: {
    message: 'Freelancer',
    color: '#03AC13'
  }
};

export const getJobTypeStatusCode = (jobType: string | undefined) => {
  if (jobType) {
    return jobTypeStatusCode[jobType] || '';
  } else {
    return { message: '', color: '' };
  }
};

// export const formatRangeValues = (
//   values: dayjs.Dayjs[] | undefined,
//   format: string
// ): dayjs.Dayjs[] | undefined => {
//   if (!values) return undefined;
//   return values.map(value => formatDayjs(value, format));
// };

export const formatDayjsArray = (
  value: Dayjs | [Dayjs, Dayjs],
  format?: string
): string | [string, string] => {
  if (Array.isArray(value)) {
    return [value[0]?.format(format) || '', value[1]?.format(format) || ''];
  } else {
    return value?.format(format) || '';
  }
};

export const formatStringArrayToDayjsArray = (
  value: (string | undefined)[],
  format?: string
): (Dayjs | '')[] => {
  if (!Array.isArray(value)) {
    throw new Error('Invalid input: Expected an array of strings');
  }

  return value.map(str => formatDayjsConvertTypeDayjs(str, format));
};
