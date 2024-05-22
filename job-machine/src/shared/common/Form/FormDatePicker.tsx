import { formatDate } from '@/constants/constants';
import { formatDayjs, formatDayjsConvertTypeDayjs } from '@/helper';
import { ProfileAdminType } from '@/interfaces/interfaces';
import { DatePicker, Form, FormItemProps } from 'antd';
import { Control, Controller, FieldErrors } from 'react-hook-form';

type BaseFormDatePickerType = FormItemProps & {
  control: Control<ProfileAdminType, any>;
  errors?: FieldErrors<ProfileAdminType>;
  format?: string;
  placeholder?: string;
};

const BaseFormDatePicker = ({
  control,
  errors,
  placeholder,
  format = formatDate.DATE,
  ...formItemProps
}: BaseFormDatePickerType) => {
  return (
    <Form.Item
      label={formItemProps.label}
      name={formItemProps.name.toString()}
      validateStatus={errors && errors[formItemProps.name] && 'error'}
      help={errors && errors[formItemProps.name]?.message}
    >
      <Controller
        name={formItemProps.name.toString()}
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          return (
            <DatePicker
              defaultValue={
                field.value && formatDayjsConvertTypeDayjs(field.value, format)
              }
              onChange={date => field.onChange(date && date.format(format))}
              onBlur={field.onBlur}
              placeholder={placeholder}
              style={{ width: '100%' }}
            />
          );
        }}
      />
    </Form.Item>
  );
};

export default BaseFormDatePicker;
