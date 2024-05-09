import { useForm, Controller } from 'react-hook-form';
import { Col, DatePicker, Flex, theme } from 'antd';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import { RedoOutlined } from '@ant-design/icons';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { formatDayjsConvertTypeDayjs } from '@/helper';
import { useState } from 'react';
import BaseFormItemHook from '@/shared/common/Form/FormItem';
import BaseFormRangePicker from '@/shared/common/Form/FormRangePicker';
import { useTranslation } from 'react-i18next';

interface FilterPostProps {
  handleFilter: (filter: string) => void;
}

const FilterPost: React.FC<FilterPostProps> = ({ handleFilter }) => {
  const { RangePicker } = DatePicker;
  const { token } = theme.useToken();
  const [searchValue, setSearchValue] = useState('');
  const { t } = useTranslation();

  const messageRequired: string = t('pages.censor.validateInput');

  const schema = yup.object().shape({
    titleContent: yup
      .string()
      .transform(value => value.trim().replace(/\s+/g, ' '))
      .matches(/^[\p{L}\d\s]*$/u, {
        message: messageRequired,
        excludeEmptyString: true
      }),
    dataRange: yup.array().of(
      yup.object().shape({
        startDate: yup.date(),
        endDate: yup
          .date()
          .min(yup.ref('startDate'), 'End date must be after start date')
      })
    )
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const handleSearchClick = (data: any) => {
    handleFilter(data);
  };

  const onReset = () => {
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleSearchClick)}
      className="filter-section"
      style={{
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        background: token ? token.colorBgContainer : '#ffffff'
      }}
    >
      <Col>
        <Flex
          style={{ justifyContent: 'space-between' }}
          className="filter-field"
        >
          <Col xs={24} lg={2}>
            <div>
              <BaseButton onClick={onReset} className="btn-reset">
                <RedoOutlined />
              </BaseButton>
            </div>
          </Col>

          <Col xs={24} lg={10} className="input-section">
            <div className="input-search">
              <BaseFormItemHook
                control={control}
                name="titleContent"
                error={errors['titleContent']}
                placeholder={t('pages.censor.placeholderSearch')}
                className="search-value"
              />
            </div>
          </Col>

          <Col xs={24} lg={9} className="input-section">
            <div className="search-wrapper">
              <BaseFormRangePicker
                control={control}
                name="dataRange"
                errors={errors}
                renderExtraFooter={() => (
                  <>
                    <div>{t('pages.censor.startDate')}</div>
                    <div>{t('pages.censor.endDate')}</div>
                  </>
                )}
                className="date-time-picker"
              />
              {errors?.dataRange && errors.dataRange[0]?.startDate && (
                <span>{errors.dataRange[0].startDate.message}</span>
              )}
            </div>
          </Col>
          <Col xs={24} sm={24} lg={3}>
            <div>
              <BaseButton htmlType="submit" className="btn-find">
                {t('pages.censor.searchText')}
              </BaseButton>
            </div>
          </Col>
        </Flex>
      </Col>
    </form>
  );
};

export default FilterPost;
