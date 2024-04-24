import { formatDate } from '@/constants/constants';
import { formatDayjs } from '@/helper';
import { ProfileAdminType } from '@/interfaces/interfaces';
import { DatePicker, Form, FormItemProps } from 'antd';
import { Control, Controller, FieldErrors } from 'react-hook-form';

type BaseFormDatePickerType = FormItemProps & {
  control: Control<ProfileAdminType, any>;
  errors?: FieldErrors<ProfileAdminType>;
  placeholder?: string;
};

const BaseFormDatePicker = ({
  control,
  errors,
  placeholder,
  ...formItemProps
}: BaseFormDatePickerType) => {
  return (
    <Form.Item
      label={formItemProps.label?.toString()}
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
                field.value ? formatDayjs(field.value, formatDate.DATE) : null
              }
              onChange={date =>
                field.onChange(date && formatDayjs(date, formatDate.DATE))
              }
              onBlur={field.onBlur}
              placeholder={placeholder}
            />
          );
        }}
      />
    </Form.Item>
  );
};

export default BaseFormDatePicker;
