import { useEffect } from 'react';
import { Col, Form, Row, theme } from 'antd';
import { Card } from '@/components/common/BaseCard/Card';
import { SaveOutlined } from '@ant-design/icons';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import { useForm } from 'react-hook-form';
import BaseFormItemHook from '@/shared/common/Form/FormItem';
import { ProfileAdminType } from '@/interfaces/interfaces';
import { ProfileApi } from '@/api/profile/ProfileAPi';
import { formatDayjs, getMessageStatus } from '@/helper';
import BaseFormSelection from '@/shared/common/Form/FormSelection';
import { OPTIONS_GENDER, formatDate } from '@/constants/constants';
import BaseFormDatePicker from '@/shared/common/Form/FormDatePicker';
interface ContentProfileProps {
  dataProfile: Partial<ProfileAdminType>;
  handleFlag: () => void;
}

const ContentProfile = ({ dataProfile, handleFlag }: ContentProfileProps) => {
  const { first_name, last_name, address, phone_number, gender, dob } =
    dataProfile;
  const defaultValues: ProfileAdminType = {
    first_name: first_name,
    last_name: last_name,
    dob: dob && formatDayjs(dob, formatDate.DATE),
    address: address,
    phone_number: phone_number,
    gender: gender
  };
  const { token } = theme.useToken();
  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty, errors }
  } = useForm<ProfileAdminType>({
    defaultValues: defaultValues
  });

  useEffect(() => {
    reset({
      first_name: first_name,
      last_name: last_name,
      dob: formatDayjs(dob, formatDate.DATE),
      address: address,
      phone_number: phone_number,
      gender: gender
    });
  }, [address, dob, first_name, gender, last_name, phone_number, reset]);

  const onFinish = async (values: ProfileAdminType) => {
    await ProfileApi.postDataProfile(values)
      .then(response => {
        handleFlag();
        getMessageStatus(response.data.message, 'success');
      })
      .catch(err => {
        getMessageStatus(err, 'error');
      });
  };

  return (
    <Card
      style={{
        padding: '24px',
        background: token ? token.colorBgContainer : '#ffffff'
      }}
    >
      <Form
        name="user-profile-details-form"
        layout="vertical"
        onFinish={handleSubmit(onFinish)}
        autoComplete="on"
        requiredMark={false}
      >
        <Row gutter={[32, 0]}>
          <Col sm={24} lg={12}>
            <BaseFormItemHook
              control={control}
              name="first_name"
              label="First Name: "
              error={errors['first_name']}
            />
          </Col>

          <Col sm={24} lg={12}>
            <BaseFormItemHook
              control={control}
              name="last_name"
              label="Last Name"
              error={errors['last_name']}
            />
          </Col>
          <Col sm={24} lg={12}>
            <BaseFormDatePicker
              control={control}
              name="dob"
              label="Day of Birth: "
              errors={errors}
            />
          </Col>
          <Col sm={24} lg={12}>
            <BaseFormItemHook
              control={control}
              name="address"
              label="Address: "
              error={errors['address']}
            />
          </Col>
          <Col sm={24} lg={12}>
            <BaseFormItemHook
              control={control}
              name="phone_number"
              label="Phone Number: "
              error={errors['phone_number']}
            />
          </Col>
          <Col sm={24} lg={12}>
            <BaseFormSelection
              control={control}
              name="gender"
              label="Gender: "
              errors={errors}
              options={OPTIONS_GENDER}
            />
          </Col>
          <Col sm={16} lg={8} offset={21}>
            <Form.Item>
              <BaseButton
                type="primary"
                htmlType="submit"
                className={`${!isDirty && 'disable'}`}
                icon={<SaveOutlined />}
                disabled={!isDirty}
                size="middle"
              >
                Lưu
              </BaseButton>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default ContentProfile;
