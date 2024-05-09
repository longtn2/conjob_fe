import React from 'react';
import { Row, Col, Flex, Popconfirm, Checkbox } from 'antd';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';

interface BulkActionsProps {
  col: number;
  selectedPosts: string[];
  handleCheckAll: () => void;
  handleDeleteAllSelected: () => void;
  handleActiveAllSelected: () => void;
  isAllSelected: boolean;
}

const BulkActions: React.FC<BulkActionsProps> = ({
  col,
  selectedPosts,
  handleCheckAll,
  handleDeleteAllSelected,
  handleActiveAllSelected,
  isAllSelected
}) => {
  const { t } = useTranslation();
  return (
    <Col span={24}>
      <Row className={col === 24 ? 'middle-container-row' : ''}>
        <Flex
          gap={10}
          style={{ alignItems: 'center' }}
          className="bulk-actions"
        >
          <Checkbox
            className="check-all"
            onChange={handleCheckAll}
            checked={isAllSelected}
          >
            {t('pages.censor.checkAll')}
          </Checkbox>
          {selectedPosts.length > 0 && (
            <div className="btn-action">
              <Popconfirm
                title={t('common.deleteAll')}
                onConfirm={handleDeleteAllSelected}
              >
                <BaseButton size="large" className="btn-delete-all">
                  {t('common.delete')}
                </BaseButton>
              </Popconfirm>
              <BaseButton
                size="large"
                className="btn-accept-all"
                onClick={handleActiveAllSelected}
              >
                {t('common.accept')}
              </BaseButton>
            </div>
          )}
        </Flex>
      </Row>
    </Col>
  );
};

export default BulkActions;
