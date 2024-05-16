import {
  EMAIL_REGEX,
  NOT_NUMBER_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX
} from '@/constants/constants';
import dayjs from 'dayjs';
import * as yup from 'yup';

export const schemaRegister = yup.object().shape({
  name: yup.string().min(8).max(32).required(),
  email: yup
    .string()
    .required('Email is required')
    .matches(EMAIL_REGEX, 'Email invalid '),

  password: yup.string().min(8).max(32).required()
});

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(EMAIL_REGEX, 'Email invalid '),

  password: yup
    .string()
    .min(8)
    .max(32)
    .required()
    .matches(PASSWORD_REGEX, 'Password invalid')
});

export const datesSchema = yup.object().shape({
  start_date: yup
    .string()
    .test('start-date-test', 'Ngày bắt đầu không hợp lệ', function (value) {
      const { end_date } = this.parent;
      if (!value || !end_date) return true;
      return dayjs(value) <= end_date;
    }),

  end_date: yup
    .string()
    .test('end-date-test', 'Ngày kết thúc không hợp lệ', function (value) {
      const { start_date } = this.parent;
      if (!value || !start_date) return true;
      return value >= start_date;
    })
});

//maybe change type schemaHistoryVideo late
export const schemaHistoryVideo: any = yup.object().shape({
  // dates: yup.object({
  //   start_date: yup.date().nullable(),
  //   end_date: yup.date().nullable()
  // }),
  dates: yup.lazy(values => {
    return yup.array().of(
      yup
        .string()
        .test(
          'date-test',
          'The start date cannot be greater than the end date',
          function (value) {
            if (values[0] || values[1]) return true;
            return dayjs(value) >= values[0] && dayjs(value) <= values[1];
          }
        )
    );
  }),
  id_content: yup.string(),
  name_author: yup.string(),
  id_censor: yup.string(),
  status_censor: yup.string()
});

export const schemaProfile: any = yup.object().shape({
  first_name: yup
    .string()
    .matches(NOT_NUMBER_REGEX, 'First Name should not contain numbers')
    .required('First Name is required'),
  last_name: yup
    .string()
    .matches(NOT_NUMBER_REGEX, 'Last Name should not contain numbers')
    .required('Last Name is required'),
  dob: yup.date().required('Day of Birth is required'),
  address: yup.string().required('Address is required'),
  phone_number: yup
    .string()
    .matches(PHONE_REGEX, 'Invalid phone number')
    .required('Phone Number is required'),
  gender: yup.string().required('Gender is required')
});
