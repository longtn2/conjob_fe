import { useEffect } from 'react';
import { Button, Col, Form, Row, Upload } from 'antd';
import { Card } from '@/components/common/BaseCard/Card';
import { SaveOutlined } from '@ant-design/icons';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import { PROFILE_ADMIN } from '@/constants/constants';
import { useForm } from 'react-hook-form';
import BaseFormItemHook from '@/shared/common/Form/FormItem';

type FieldType = {
  userName?: string;
  password?: string;
  remember?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  avatar?: string;
};

const ContentProfile = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty, errors },
  } = useForm<FieldType>({
    defaultValues: {
      userName: 'Admin Đat',
      firstName: 'Ngô',
      lastName: 'Đức Phan Tiến Đạt',
      company: 'Rikkeisoft',
      email: 'kelvin.kiprop96@gmail.com',
    },
  });

  const onFinish = (values: FieldType) => {
    //Todo finish
  };

  const onFinishFailed = (errorInfo: any) => {
    // Todo failed
  };

  useEffect(() => {
    reset(PROFILE_ADMIN);
  }, []);


  return (
    <Card style={{ padding: '0 24px' }}>
      <Form
        name="user-profile-details-form"
        layout="vertical"
        initialValues={PROFILE_ADMIN}
        onFinish={handleSubmit(onFinish)}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        requiredMark={false}
      >
        <Row gutter={[32, 0]}>
          <Col sm={24} lg={24}>
            <Form.Item
              label="Avatar"
              name="avatar"
              rules={[{ required: true, message: 'Please input your image!' }]}
            >
              <Upload action="http://localhost:3000/profile">
                <Button>Upload</Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col sm={24} lg={12}>
            <BaseFormItemHook control={control} name="firstName" label="First Name: " error={errors["firstName"]}/>
          </Col>

          <Col sm={24} lg={12}>
            <BaseFormItemHook control={control} name="lastName" label="Last Name" error={errors["lastName"]} />
          </Col>
          <Col sm={24} lg={12}>
            <BaseFormItemHook control={control} name="email" label="Email: " error={errors['Email']} />
          </Col>
          <Col sm={24} lg={12}>
            <BaseFormItemHook control={control} name="userName" label="User Name: " error={errors['userName']} />
          </Col>
          <Col sm={24} lg={12}>
            <BaseFormItemHook control={control} name="company" label="Company: " error={errors['company']} />
          </Col>
          <Col sm={16} lg={8} offset={20}>
            <Form.Item>
              <BaseButton type="primary" htmlType="submit" icon={<SaveOutlined />}  disabled={!isDirty}>
                Save changes
              </BaseButton>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default ContentProfile;
