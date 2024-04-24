import { STATUS_CENSOR } from '@/constants/constants';
import BaseFormDatePicker from '@/shared/common/Form/FormDatePicker';
import BaseFormItemHook from '@/shared/common/Form/FormItem';
import BaseFormSelection from '@/shared/common/Form/FormSelection';
import { Card, Col, Flex, Row, theme } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';

type Props = {};

const HeaderCensorshipVideo = () => {
  const { token } = theme.useToken();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm();
  return (
    <Card
      style={{
        padding: '30px 24px',
        background: token ? token.colorBgContainer : '#ffffff'
      }}
    >
      <Row gutter={[48, 16]}>
        <Col xs={24} sm={8} lg={6}>
          <BaseFormItemHook
            name="id_content"
            control={control}
            placeholder="ID noi dung"
          />
        </Col>
        <Col xs={24} sm={8} lg={6}>
          <BaseFormDatePicker
            name="time_censorship"
            control={control}
            placeholder="dd/mm/yyyy - dd/mm/yyyy"
          />
        </Col>
        <Col xs={24} sm={8} lg={6}>
          <BaseFormDatePicker control={control} name="time_start_censorship" />
        </Col>
        <Col xs={24} sm={8} lg={6}>
          <BaseFormItemHook
            name="name_author"
            control={control}
            placeholder="Mã/Tên tác giả"
          />
        </Col>
        <Col xs={24} sm={8} lg={6}>
          <BaseFormItemHook
            name="id_censor"
            control={control}
            placeholder="ID kiểm duyệt viên"
          />
        </Col>
        <Col xs={24} sm={8} lg={6}>
          <BaseFormSelection
            name="status_censor"
            control={control}
            options={STATUS_CENSOR}
          />
        </Col>
      </Row>
      <Flex align="end" justify="center" gap={20}>
        <div className="find-button">
          <BaseButton
            type="primary"
            className="ant-btn-primary"
            style={{ background: '#b71c1c' }}
            size="middle"
          >
            Tìm kiếm
          </BaseButton>
        </div>
        <div className="reset-button">
          <BaseButton
            type="link"
            style={{
              background: token.colorInfoBg,
              color: token.colorInfoText
            }}
            size="middle"
          >
            Đặt lại
          </BaseButton>
        </div>
      </Flex>
    </Card>
  );
};

export default HeaderCensorshipVideo;
