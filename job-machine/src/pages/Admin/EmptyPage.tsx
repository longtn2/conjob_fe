import { Col } from 'antd';
import { useTranslation } from 'react-i18next';

export const EmptyPage = () => {
  const { t } = useTranslation();
  return (
    <Col span={18}>
      <h3>{t('pages.censor.emptyTitle')}</h3>
    </Col>
  );
};
