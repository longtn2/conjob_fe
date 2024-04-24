import { ProfileAdminType } from '@/interfaces/interfaces';
import { Form, FormItemProps, Select } from 'antd';
import { Control, Controller, FieldErrors } from 'react-hook-form';

type BaseFormSelectionType = FormItemProps & {
  control: Control<ProfileAdminType, any>;
  errors?: FieldErrors<ProfileAdminType>;
  options: Array<{ value: string; label: string }>;
};

const { Option } = Select;

const BaseFormSelection = ({
  control,
  errors,
  options,
  ...formItemProps
}: BaseFormSelectionType) => {
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
            <Select {...field} {...formItemProps} status={undefined}>
              {options.map(option => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          );
        }}
      />
    </Form.Item>
  );
};

export default BaseFormSelection;
