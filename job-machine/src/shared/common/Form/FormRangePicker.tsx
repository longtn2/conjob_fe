import { useState } from 'react';
import { formatDate } from '@/constants/constants';
import { formatDayjsConvertTypeDayjs } from '@/helper';
import { DatePicker, Form, FormItemProps } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { Controller } from 'react-hook-form';

type BaseFormDatePickerType = FormItemProps & {
  control: any;
  errors?: any;
  format?: string;
  placeholder?: string;
};
const { RangePicker } = DatePicker;
const BaseFormRangePicker = ({
  control,
  errors,
  format = formatDate.DATE,
  placeholder,
  ...formItemProps
}: BaseFormDatePickerType) => {
  return (
    <Form.Item
      name={formItemProps.name}
      label={formItemProps.label}
      validateStatus={errors && errors[formItemProps.name] && 'error'}
      help={errors && errors[formItemProps.name]?.[0]?.message}
    >
      <Controller
        name={formItemProps.name.toString()}
        control={control}
        rules={{ required: true }}
        defaultValue={[null, null]}
        render={({ field }) => {
          const value: [Dayjs | null, Dayjs | null] = [
            field.value && typeof field.value[0] === 'string'
              ? formatDayjsConvertTypeDayjs(
                  field.value[0],
                  formatDate.DATE_TIME_SECONDS
                )
              : field.value
              ? field.value[0]
              : null,
            field.value && typeof field.value[1] === 'string'
              ? formatDayjsConvertTypeDayjs(
                  field.value[1],
                  formatDate.DATE_TIME_SECONDS
                )
              : field.value
              ? field.value[1]
              : null
          ] || [null, null];

          return (
            <RangePicker
              showTime
              style={{ width: '80%' }}
              value={value}
              onChange={value => {
                field.onChange(value);
              }}
              onBlur={() => field.onBlur()}
            />
          );
        }}
      />
    </Form.Item>
  );
};

export default BaseFormRangePicker;
