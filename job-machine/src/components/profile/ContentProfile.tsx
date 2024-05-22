import { useEffect } from 'react';
import { Col, Form, Row, Typography, theme } from 'antd';
import { Card } from '@/components/common/BaseCard/Card';
import { SaveOutlined } from '@ant-design/icons';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import { useForm } from 'react-hook-form';
import BaseFormItemHook from '@/shared/common/Form/FormItem';
import { ProfileAdminType } from '@/interfaces/interfaces';
import { ProfileApi } from '@/api/profile/ProfileAPi';
import { formatDayjs, getMessageStatus, updateLocalStorage } from '@/helper';
import BaseFormSelection from '@/shared/common/Form/FormSelection';
import { OPTIONS_GENDER, formatDate } from '@/constants/constants';
import BaseFormDatePicker from '@/shared/common/Form/FormDatePicker';
import { schemaProfile } from '@/utils/yup';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
interface ContentProfileProps {
  dataProfile: Partial<ProfileAdminType>;
  handleFlag: () => void;
  handleChangeLoading: () => void;
}

const { Text } = Typography;

const ContentProfile = ({
  dataProfile,
  handleFlag,
  handleChangeLoading
}: ContentProfileProps) => {
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
  const { t } = useTranslation();
  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty, errors }
  } = useForm<ProfileAdminType>({
    defaultValues: defaultValues,
    resolver: yupResolver(schemaProfile)
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
    handleChangeLoading();
    await ProfileApi.putDataProfile({
      ...values,
      dob: formatDayjs(values.dob, formatDate.DATE_REVERSE)
    })
      .then((response: any) => {
        getMessageStatus(response.message, 'success');
        if (values.first_name) {
          updateLocalStorage('firstName', values.first_name);
        } else if (values.last_name) {
          updateLocalStorage('firstName', values.last_name);
        }
        handleFlag();
      })
      .catch(err => {
        getMessageStatus(err.message, 'error');
      })
      .finally(() => {
        handleChangeLoading();
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
          <Col xs={24} sm={24} lg={12}>
            <BaseFormItemHook
              control={control}
              name="first_name"
              label={<Text>{t('pages.profile.firstName')}</Text>}
              error={errors['first_name']}
            />
          </Col>

          <Col xs={24} sm={24} lg={12}>
            <BaseFormItemHook
              control={control}
              name="last_name"
              label={<Text>{t('pages.profile.lastName')}</Text>}
              error={errors['last_name']}
            />
          </Col>
          <Col xs={24} sm={24} lg={12}>
            <BaseFormDatePicker
              control={control}
              name="dob"
              label={<Text>{t('pages.profile.dob')}</Text>}
              errors={errors}
            />
          </Col>
          <Col xs={24} sm={24} lg={12}>
            <BaseFormItemHook
              control={control}
              name="address"
              label={<Text>{t('pages.profile.address')}</Text>}
              error={errors['address']}
            />
          </Col>
          <Col xs={24} sm={24} lg={12}>
            <BaseFormItemHook
              control={control}
              name="phone_number"
              label={<Text>{t('pages.profile.phone')}</Text>}
              error={errors['phone_number']}
            />
          </Col>
          <Col xs={24} sm={24} lg={12}>
            <BaseFormSelection
              control={control}
              name="gender"
              label={<Text>{t('pages.profile.gender')}</Text>}
              errors={errors}
              options={OPTIONS_GENDER}
            />
          </Col>
          <Col
            span={24}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end'
            }}
          >
            <Form.Item>
              <BaseButton
                type="primary"
                htmlType="submit"
                className={`${!isDirty && 'disable'}`}
                icon={<SaveOutlined />}
                disabled={!isDirty}
                size="middle"
              >
                {t('common.save')}
              </BaseButton>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default ContentProfile;
