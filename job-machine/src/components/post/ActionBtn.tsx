import { Popconfirm, theme } from 'antd';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
import { BaseModal } from '../common/BaseModel';
import { useState } from 'react';
interface ActionBtnProps {
  handleDelete: (key: string | number) => void;
  handleAcceptPost: (id: string | number) => void;
  itemKey: string | number;
  col: number;
}

const ActionBtn: React.FC<ActionBtnProps> = ({
  handleDelete,
  handleAcceptPost,
  itemKey,
  col
}) => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const { token } = theme.useToken();
  return (
    <>
      <div
        className={col === 6 ? 'card__action-top' : 'xs_card__action-top'}
        style={{ background: token ? token.colorBgContainer : '#ffffff' }}
      >
        <BaseButton
          size="large"
          className="btn-delete"
          onClick={() => setModalOpen(true)}
        >
          {t('common.delete')}
        </BaseButton>
        <BaseButton
          size="large"
          className="btn-accept"
          onClick={() => handleAcceptPost(itemKey)}
        >
          {t('common.accept')}
        </BaseButton>
      </div>
      <BaseModal
        title={t('common.submitText')}
        centered
        open={modalOpen}
        onOk={() => handleDelete(itemKey)}
        onCancel={() => setModalOpen(false)}
        className="modal-container"
      />
    </>
  );
};

export default ActionBtn;
