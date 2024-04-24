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
  return (
    <Form.Item
      label={formItemProps.label?.toString()}
      name={formItemProps.name.toString()}
      validateStatus={error && 'error'}
      help={error || null}
    >
      <Controller
        name={formItemProps.name.toString()}
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          return <Input {...field} placeholder={placeholder} />;
        }}
      />
    </Form.Item>
  );
};

export default BaseFormItemHook;
