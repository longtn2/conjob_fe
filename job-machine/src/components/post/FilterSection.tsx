import React from 'react';
import { Row, Col, Flex, Segmented, theme } from 'antd';
import FilterPost from '@/components/post/CardPost';
import { useTranslation } from 'react-i18next';

interface FilterSectionProps {
  col: number;
  handleFilter: (value: any) => void;
  handleOptionChange: (selectedOption: number) => void;
  options: { label: JSX.Element; value: number }[];
  layoutIcon: string;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  col,
  handleFilter,
  handleOptionChange,
  options,
  layoutIcon
}) => {
  const { t } = useTranslation();
  const { token } = theme.useToken();
  return (
    <Row className="container-row">
      <Col xs={24} sm={24} lg={24} className="search-section">
        <FilterPost handleFilter={handleFilter} />
      </Col>
      <Col xs={24} sm={24}>
        <Flex style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
          <div
            className="frame-section"
            style={{ background: token ? token.colorBgContainer : '#ffffff' }}
          >
            <h4>{t('pages.censor.layoutPost')}</h4>

            <Segmented options={options} onChange={handleOptionChange} />
          </div>
        </Flex>
      </Col>
    </Row>
  );
};

export default FilterSection;
