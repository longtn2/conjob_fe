import { formatDate } from '@/constants/constants';
import { formatDayjs, formatDayjsConvertTypeDayjs } from '@/helper';
import { RangePickerType } from '@/interfaces/interfaces';
import { DatePicker, Form, FormItemProps } from 'antd';
import { Control, Controller, FieldErrors } from 'react-hook-form';

const { RangePicker } = DatePicker;

type BaseFormRangePickerType = FormItemProps & {
  control: Control<any>;
  errors?: any;
  placeholder?: [string, string];
  format?: string;
  className?: string;
  renderExtraFooter: () => React.ReactNode;
};

const BaseFormRangePicker = ({
  control,
  errors,
  placeholder,
  className = '',
  renderExtraFooter,
  format = formatDate.DATE_TIME_MINUTE_SECONDS,
  ...formItemProps
}: BaseFormRangePickerType) => {
  console.log('check error: ', errors);

  return (
    <Form.Item
      label={formItemProps.label?.toString()}
      name={formItemProps.name.toString()}
      validateStatus={
        errors && errors[formItemProps.name?.toString()] && 'error'
      }
      help={errors && errors[formItemProps.name?.toString()]?.message}
    >
      <Controller
        control={control}
        name={formItemProps.name.toString()}
        render={({ field }) => {
          const value: any = [
            field.value &&
              field.value[0] &&
              formatDayjsConvertTypeDayjs(field.value[0]),
            field.value &&
              field.value[1] &&
              formatDayjsConvertTypeDayjs(field.value[1])
          ];

          return (
            <RangePicker
              renderExtraFooter={renderExtraFooter}
              onChange={dates => field.onChange(dates)}
              defaultValue={[null, null]}
              value={field.value ? value : [null, null]}
              showTime
              className={className}
            />
          );
        }}
      />
    </Form.Item>
  );
};

export default BaseFormRangePicker;
