import { Form, Input } from "antd"

export const BaseFormItem = ({fieldState, label,name}) => {
  return (
    <Form.Item
    label={label}
    name={name}
    validateStatus={fieldState.error?.message ? 'error' : ''}
    help={fieldState.error?.message || null}
    style={{ padding: 0 }}
  >
    <Input />
  </Form.Item>
  )
}
