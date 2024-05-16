import React from 'react';
import { Row, Col, Flex, Segmented } from 'antd';
import FilterPost from '@/components/post/CardPost';
import { useTranslation } from 'react-i18next';

interface FilterSectionProps {
  col: number;
  handleFilter: (value: any) => void;
  handleOptionChange: (selectedOption: number) => void;
  options: number[];
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
  return (
    <Row className={col === 24 ? 'middle-container-row' : 'container-row'}>
      <Col span={19}>
        <FilterPost handleFilter={handleFilter} />
      </Col>
      <Col span={5}>
        <Flex style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
          <div className="frame-section">
            {col === 24 ? (
              <img src={layoutIcon} alt="Layout Icon" className="icon-layout" />
            ) : (
              <h4>{t("pages.censor.layoutPost")}</h4>
            )}
            <Segmented options={options} onChange={handleOptionChange} />
          </div>
        </Flex>
      </Col>
    </Row>
  );
};

export default FilterSection;
