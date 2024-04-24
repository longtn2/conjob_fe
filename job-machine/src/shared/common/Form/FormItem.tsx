import { FormItemProps, Input, Form } from "antd";
import { Control, Controller } from "react-hook-form";

type BaseFormItemHookProps = FormItemProps & {
  control:  Control;
  error: any;
};

const BaseFormItemHook = ({ control, error, ...formItemProps }: BaseFormItemHookProps) => {
  return (
    <Form.Item 
    label={formItemProps.label?.toString()} 
    name={formItemProps.name.toString()}  
    validateStatus={error && "error"}
    help={error || null} >
      <Controller
        name={formItemProps.name.toString()}
        control={control}
        rules={{required: true}}
        render={({ field }) => {
          return(
            <Input {...field}/>
          )
        }}
      />

    </Form.Item>
  );
};

export default BaseFormItemHook;