import { STATUS_CENSOR, formatDate } from '@/constants/constants';
import BaseFormItemHook from '@/shared/common/Form/FormItem';
import BaseFormSelection from '@/shared/common/Form/FormSelection';
import { Card, Col, Flex, Form, Row, theme } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaHistoryVideo } from '@/utils/yup';
import BaseFormRangePicker from '@/shared/common/Form/FormRangePicker';
import { HistoryVideoFormValues } from '@/interfaces/interfaces';
import { ParamsPostVideo } from '@/interfaces/interfaces';
import { formatDayjs } from '@/helper';
import { useTranslation } from 'react-i18next';

interface HeaderCensorshipVideoProps {
  params: ParamsPostVideo;
  handleFlag: () => void;
  handleChangeParams: (value: ParamsPostVideo) => void;
  actionReset: () => void;
}

const HeaderCensorshipVideo = ({
  params,
  handleFlag,
  handleChangeParams,
  actionReset
}: HeaderCensorshipVideoProps) => {
  const { token } = theme.useToken();
  const { t } = useTranslation();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<HistoryVideoFormValues>({
    defaultValues: {
      name_author: '',
      status_censor: undefined,
      dates: {
        start_date: '',
        end_date: ''
      }
    },
    resolver: yupResolver<HistoryVideoFormValues>(schemaHistoryVideo)
  });

  const onFinish = async (data: HistoryVideoFormValues) => {
    const { dates, name_author, status_censor } = data;
    const newData = {
      ...params,
      search_term: name_author || undefined,
      status_filter: status_censor || undefined
    };
    if (dates && dates[0] && dates[1]) {
      newData.start_date = formatDayjs(dates[0], formatDate.DATE_TIME_YEAR);
      newData.end_date = formatDayjs(dates[1], formatDate.DATE_TIME_YEAR);
    }
    await handleChangeParams(newData);
  };

  const onRefreshValue = () => {
    reset({
      name_author: '',
      status_censor: undefined,
      dates: undefined
    });
    actionReset();
    handleFlag();
  };

  return (
    <Card
      style={{
        padding: '30px 24px',
        background: token ? token.colorBgContainer : '#ffffff'
      }}
    >
      <Form layout="vertical" onFinish={handleSubmit(onFinish)}>
        <Row gutter={[48, 16]}>
          <Col xs={24} sm={8} lg={6}>
            <BaseFormItemHook
              name="id_content"
              control={control}
              placeholder={t('pages.history.idContent')}
            />
          </Col>
          <Col xs={24} sm={8} lg={12}>
            <BaseFormRangePicker
              name="dates"
              control={control}
              placeholder="dd/mm/yyyy - dd/mm/yyyy"
              errors={errors}
            />
          </Col>
          <Col xs={24} sm={8} lg={6}>
            <BaseFormItemHook
              name="name_author"
              control={control}
              placeholder={t('pages.history.name_author')}
            />
          </Col>
          <Col xs={24} sm={8} lg={6}>
            {/* <BaseFormItemHook
              name="id_censor"
              control={control}
              placeholder="ID kiểm duyệt viên"
            /> */}
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
            <Form.Item>
              <BaseButton
                type="primary"
                className="ant-btn-primary"
                htmlType="submit"
                style={{ background: '#b71c1c' }}
                size="middle"
              >
                {t('common.search')}
              </BaseButton>
            </Form.Item>
          </div>
          <div className="reset-button">
            <Form.Item>
              <BaseButton
                type="link"
                style={{
                  background: token.colorInfoBg,
                  color: token.colorInfoText
                }}
                size="middle"
                onClick={onRefreshValue}
              >
                {t('pages.history.reset')}
              </BaseButton>
            </Form.Item>
          </div>
        </Flex>
      </Form>
    </Card>
  );
};

export default HeaderCensorshipVideo;
