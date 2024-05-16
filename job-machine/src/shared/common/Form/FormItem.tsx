import { FormItemProps, Input, Form, InputProps } from 'antd';
import { Control, Controller } from 'react-hook-form';

type BaseFormItemHookProps = FormItemProps &
  InputProps & {
    control: any;
    error?: any;
    placeholder?: string;
  };

const BaseFormItemHook = ({
  control,
  error,
  placeholder,
  ...formItemProps
}: BaseFormItemHookProps) => {
  const onTrim = value => {
    const trimmedValue = value.replace(/[ ]{2,}/gi, ' ').replace(/\n +/, '\n');
    return trimmedValue;
  };

  return (
    <Form.Item
      label={formItemProps.label}
      name={formItemProps.name.toString()}
      validateStatus={error && 'error'}
      help={error || null}
    >
      <Controller
        name={formItemProps.name.toString()}
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, ...fieldProps } }) => {
          const handleChange = e => {
            const trimmedValue = onTrim(e.target.value);
            onChange(trimmedValue);
          };

          return (
            <Input
              {...fieldProps}
              placeholder={placeholder}
              onChange={handleChange}
            />
          );
        }}
      />
    </Form.Item>
  );
};

export default BaseFormItemHook;
